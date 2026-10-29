#!/usr/bin/env python3
"""Xola SlideRoof 1160 - parametrische Vorauslegung.

Berechnet Ausfahrgeometrie, Gewicht, Rollen-/Schienenlasten, Wind- und
Eigengewichtslastfaelle, Stuetzfuss- und Halterlasten sowie die PV-Eckdaten.

Alle Ergebnisse sind KONZEPT-ABSCHAETZUNGEN (Handrechnung, Starrkoerper,
kleine Neigungswinkel). Sie ersetzen keine statische Berechnung durch einen
Fachplaner (EN 1991-1-4, EN 1999-1-1/-1-3, Fahrzeug-Pruefungen).

Koordinaten: x = Auszugsrichtung, 0 = Vorderkante Kassette / Drehachse am
Markisenhalter, positiv nach aussen (weg vom Fahrzeug), negativ ueber dem Dach.
y = Fahrzeuglaengsrichtung, z = vertikal.

Aufruf:
    python3 slideroof_calc.py                       # Bericht mit Standardwerten
    python3 slideroof_calc.py --set tilt_deg=10     # einzelne Parameter aendern
    python3 slideroof_calc.py --params my.json      # Parameter aus JSON
    python3 slideroof_calc.py --markdown > results.md
    python3 slideroof_calc.py --json                # maschinenlesbar
"""
from __future__ import annotations

import argparse
import json
import math
import sys
from dataclasses import asdict, dataclass, fields, replace

G = 9.81  # m/s^2


@dataclass(frozen=True)
class Params:
    # --- Solarmodul (Datenblatt Xola 580 Wp) ---
    module_len_y_mm: float = 2260.0      # Laengsrichtung Fahrzeug
    module_wid_x_mm: float = 1219.0      # Auszugsrichtung
    module_mass_kg: float = 9.1
    module_wp: float = 580.0
    n_modules: int = 2
    # Elektrische Werte: NICHT im Datenblatt-Auszug -> ANNAHMEN, vor Freigabe ersetzen
    module_voc_v: float = 52.0
    module_isc_a: float = 14.3
    module_vmp_v: float = 43.5
    module_imp_a: float = 13.4
    temp_coeff_voc_pct_per_k: float = -0.25
    t_min_c: float = -20.0

    # --- Fluegelrahmen ---
    frame_edge_mm: float = 15.0          # Rahmenrand je Seite in x ausserhalb Modul
    tail_mm: float = 160.0               # modulfreier Ueberlappungs-"Schwanz" je Fluegel
    roller_inset_mm: float = 20.0        # Rollenmitte ab Profilende
    inner_side_profile_w_mm: float = 40.0
    outer_side_profile_w_mm: float = 25.0
    side_clearance_mm: float = 5.0
    cable_side_extra_mm: float = 30.0       # einseitig breiter: liegende E-Kette Stufe 2
    inner_side_profile_kg_m: float = 1.60   # Doppel-C 70x40x2,5 (Laufprofil Stufe 1+2)
    outer_side_profile_kg_m: float = 0.50   # C 30x25x1,8 mit Rollenzapfen
    cross_beam_kg_m: float = 0.55           # Rechteckrohr 40x40x2 bzw. 40x30x2
    rib_count: int = 5
    rib_kg_m: float = 0.22                  # Hutprofil 30x15x1,2
    seal_kg_m: float = 0.07                 # EPDM-U-Kantenprofil
    adhesive_kg_per_wing: float = 0.3
    hardware_kg_per_wing: float = 0.8       # Rollen, Spannverschluesse, Griffe

    # --- Kassette ---
    cassette_front_beam_mm: float = 35.0    # Tiefe Front-/Gelenkprofil in x
    cassette_rear_beam_mm: float = 25.0
    cassette_clearance_x_mm: float = 20.0
    cassette_side_wall_mm: float = 25.0
    cassette_height_mm: float = 110.0
    bracket_offset_mm: float = 30.0         # Aufbau unter Kassette (Halter/Pads)
    cassette_front_beam_kg_m: float = 1.80
    cassette_rear_beam_kg_m: float = 0.90
    cassette_side_kg_m: float = 1.00
    cassette_underside_kg_m2: float = 0.60  # PP-Hohlkammer 3 mm, nur Staubschutz
    cassette_stringer_kg_m: float = 0.80
    cassette_hardware_kg: float = 3.0       # Gelenke, Riegel, Lippen, Buersten, Rollen

    # --- Fuesse, Streben, Anbauteile ---
    n_feet: int = 2
    foot_mass_kg: float = 2.3
    foot_inset_mm: float = 30.0
    foot_tube_min_outer_mm: float = 30.0    # kleinstes Teleskoprohr (quadratisch)
    foot_tube_min_wall_mm: float = 1.5
    foot_plate_mm: float = 200.0
    n_struts: int = 2                       # Neigungsstreben am Kassetten-Innenende
    strut_mass_kg: float = 0.9              # Bloc-Gasfeder + Zug-Gasfeder + Beschlag
    strut_from_inner_end_mm: float = 30.0
    roof_anchor_kg: float = 1.6             # 2 Adapter auf Dach-Befestigungspunkte
    n_brackets: int = 4
    bracket_adapter_kg: float = 0.4
    cabling_kg: float = 1.4                 # 2 E-Ketten, Leitungen, Stecker

    # --- Montage / Geometrie ---
    mount_height_m: float = 2.75            # Drehachse ueber Boden (Hochdach-Van)
    outer_wing_drop_mm: float = 60.0        # Unterkante Aussenfluegel unter Drehachse
    tilt_deg: float = 7.0
    ground_tolerance_m: float = 0.15
    roof_slope_deg: float = 5.0             # Querneigung Fahrzeug beim Ausfahren

    # --- Wind / Lasten ---
    rho_air: float = 1.25
    v_operating_ms: float = 10.8            # Grenze Bft 5 (Boe), danach einfahren
    cp_uplift: float = 1.5                  # Netto-Sog Vordach (konservativ)
    cp_down: float = 1.0
    anchor_capacity_n: float = 400.0        # je Fuss, Hering in mittlerem Boden
    misuse_point_load_n: float = 500.0      # Person haengt an Vorderkante
    gas_comp_ratio: float = 0.7             # 60-80 % Gewichtsausgleich
    bracket_allow_uplift_n: float = 2000.0  # PLATZHALTER: Summe aller Halter, vom Hersteller/Pruefung

    # --- Rollen / Fuehrung ---
    safety_static: float = 2.0
    racking_factor: float = 1.2             # ungleiche Verteilung links/rechts
    dyn_factor: float = 1.3                 # Stoss beim Einrasten / Bedienstange
    roll_friction: float = 0.01
    seal_drag_n: float = 25.0

    # --- Fahrt ---
    v_drive_kmh: float = 130.0
    cp_drive_lift: float = 0.8
    a_vertical_g: float = 2.0
    a_brake_g: float = 1.0
    a_crash_g: float = 10.0

    # --- Querrahmen (Durchbiegung unter Wind) ---
    cross_beam_i_mm4: float = 73_365.0      # 40x40x2
    cross_beam_h_mm: float = 40.0
    alu_e_mpa: float = 70_000.0
    alu_f0_mpa: float = 150.0               # 6060/6063-T66 ~ 150-160; 6082-T6: 250
    gamma_m: float = 1.1

    # --- Optionaler Stoffflugel ---
    fabric_wing: bool = False
    fabric_extra_area_m2: float = 2.0
    fabric_mass_kg: float = 3.5

    # --- Elektrik ---
    cable_len_m: float = 6.0                # einfach, Modul -> MPPT
    cable_mm2: float = 4.0


# --------------------------------------------------------------------------
# Geometrie
# --------------------------------------------------------------------------
def geometry(p: Params) -> dict:
    wing_x = p.module_wid_x_mm + 2 * p.frame_edge_mm + p.tail_mm
    inner_w_y = p.module_len_y_mm + 2 * (p.outer_side_profile_w_mm
                                         + p.inner_side_profile_w_mm
                                         + p.side_clearance_mm) + p.cable_side_extra_mm
    outer_w_y = p.module_len_y_mm + 2 * p.outer_side_profile_w_mm
    cas_x = wing_x + p.cassette_clearance_x_mm + p.cassette_front_beam_mm + p.cassette_rear_beam_mm
    cas_y = inner_w_y + 2 * p.side_clearance_mm + 2 * p.cassette_side_wall_mm

    stowed_x0 = -(p.cassette_front_beam_mm + p.cassette_clearance_x_mm / 2 + wing_x)
    inner_x0 = -p.tail_mm
    inner_x1 = inner_x0 + wing_x
    outer_x0 = inner_x1 - p.tail_mm
    outer_x1 = outer_x0 + wing_x
    th = math.radians(p.tilt_deg)

    # Glas-Lagen (Modulflaechen) im ausgefahrenen Zustand
    inner_glass = (inner_x0 + p.tail_mm + p.frame_edge_mm,
                   inner_x0 + p.tail_mm + p.frame_edge_mm + p.module_wid_x_mm)
    outer_glass = (outer_x0 + p.tail_mm + p.frame_edge_mm,
                   outer_x0 + p.tail_mm + p.frame_edge_mm + p.module_wid_x_mm)

    x_foot = outer_x1 - p.foot_inset_mm
    foot_top_z = (p.mount_height_m - p.outer_wing_drop_mm / 1000
                  - x_foot / 1000 * math.sin(th))
    foot_top_z_flat = p.mount_height_m - p.outer_wing_drop_mm / 1000 - 0.0

    solar_area = p.n_modules * p.module_len_y_mm * p.module_wid_x_mm / 1e6
    roof_area = outer_x1 / 1000 * inner_w_y / 1000
    return {
        "wing_len_x_mm": wing_x,
        "inner_wing_width_y_mm": inner_w_y,
        "outer_wing_width_y_mm": outer_w_y,
        "cassette_x_mm": cas_x,
        "cassette_y_mm": cas_y,
        "cassette_height_mm": p.cassette_height_mm,
        "vehicle_height_increase_mm": p.cassette_height_mm + p.bracket_offset_mm,
        "stroke_inner_mm": inner_x0 - stowed_x0,
        "stroke_outer_mm": outer_x0 - stowed_x0,
        "inner_wing_x_mm": (inner_x0, inner_x1),
        "outer_wing_x_mm": (outer_x0, outer_x1),
        "inner_glass_x_mm": inner_glass,
        "outer_glass_x_mm": outer_glass,
        "glass_gap_mm": outer_glass[0] - inner_glass[1],
        "frame_overlap_mm": inner_x1 - outer_x0,
        "projection_mm": outer_x1,
        "projection_horizontal_mm": outer_x1 * math.cos(th),
        "front_drop_mm": outer_x1 * math.sin(th),
        "inner_end_lift_mm": cas_x * math.sin(th),
        "x_foot_mm": x_foot,
        "foot_len_tilted_m": foot_top_z,
        "foot_len_flat_m": foot_top_z_flat,
        "foot_len_range_m": (foot_top_z - p.ground_tolerance_m,
                             foot_top_z_flat + p.ground_tolerance_m),
        "foot_max_folded_len_m": outer_w_y / 2 / 1000 - 0.05,
        "solar_area_m2": solar_area,
        "roof_area_m2": roof_area,
        "pv_wp": p.n_modules * p.module_wp,
        "x_strut_mm": -(cas_x - p.strut_from_inner_end_mm),
        "roller_spacing_mm": p.tail_mm - 2 * p.roller_inset_mm,
    }


# --------------------------------------------------------------------------
# Gewicht
# --------------------------------------------------------------------------
def masses(p: Params, g: dict) -> dict:
    wx = g["wing_len_x_mm"] / 1000
    rib_len = wx - p.tail_mm / 1000
    inner_frame = (2 * wx * p.inner_side_profile_kg_m
                   + 2 * g["inner_wing_width_y_mm"] / 1000 * p.cross_beam_kg_m
                   + p.rib_count * rib_len * p.rib_kg_m
                   + 2 * (p.module_len_y_mm + p.module_wid_x_mm) / 1000 * p.seal_kg_m
                   + p.adhesive_kg_per_wing + p.hardware_kg_per_wing)
    outer_frame = (2 * wx * p.outer_side_profile_kg_m
                   + 2 * g["outer_wing_width_y_mm"] / 1000 * p.cross_beam_kg_m
                   + p.rib_count * rib_len * p.rib_kg_m
                   + 2 * (p.module_len_y_mm + p.module_wid_x_mm) / 1000 * p.seal_kg_m
                   + p.adhesive_kg_per_wing + p.hardware_kg_per_wing)
    cx, cy = g["cassette_x_mm"] / 1000, g["cassette_y_mm"] / 1000
    cassette = (cy * p.cassette_front_beam_kg_m + cy * p.cassette_rear_beam_kg_m
                + 2 * cx * p.cassette_side_kg_m + cx * cy * p.cassette_underside_kg_m2
                + cx * p.cassette_stringer_kg_m + p.cassette_hardware_kg)
    items = {
        "Module (2x)": p.n_modules * p.module_mass_kg,
        "Traegerrahmen Innenfluegel": inner_frame,
        "Traegerrahmen Aussenfluegel": outer_frame,
        "Kassette inkl. Laufprofile/Gelenke": cassette,
        "Stuetzfuesse": p.n_feet * p.foot_mass_kg,
        "Neigungsstreben/Gasfedern": p.n_struts * p.strut_mass_kg,
        "Dach-Ankeradapter": p.roof_anchor_kg,
        "Markisenhalter-Adapter": p.n_brackets * p.bracket_adapter_kg,
        "E-Ketten, Leitungen, Stecker": p.cabling_kg,
    }
    if p.fabric_wing:
        items["Stofffluegel (optional)"] = p.fabric_mass_kg
    total = sum(items.values())
    inner_wing = p.module_mass_kg + inner_frame
    outer_wing = p.module_mass_kg + outer_frame
    return {
        "items": items,
        "total_kg": total,
        "inner_wing_kg": inner_wing,
        "outer_wing_kg": outer_wing,
        "outer_wing_with_feet_kg": outer_wing + p.n_feet * p.foot_mass_kg
                                   + (p.fabric_mass_kg if p.fabric_wing else 0.0),
        "cassette_kg": cassette + p.n_struts * p.strut_mass_kg * 0.5,
        "inner_frame_kg": inner_frame,
        "outer_frame_kg": outer_frame,
    }


# --------------------------------------------------------------------------
# Rollen / Teleskopfuehrung
# --------------------------------------------------------------------------
def rollers(p: Params, g: dict, m: dict) -> dict:
    """Freier Kragzustand in Endlage VOR dem Verriegeln (Bedienung mit Stange,
    Vorderkante wird nicht getragen). Momente um die vordere Laufrolle."""
    s = g["roller_spacing_mm"] / 1000
    xi0, xi1 = (v / 1000 for v in g["inner_wing_x_mm"])
    xo0, xo1 = (v / 1000 for v in g["outer_wing_x_mm"])
    x_exit1 = -p.roller_inset_mm / 1000                    # Rolle in Kassette
    x_exit2 = xi1 - p.roller_inset_mm / 1000               # Rolle am Innenfluegel vorn
    xc_i = (xi0 + xi1) / 2
    xc_o = (xo0 + xo1) / 2
    w_i = m["inner_wing_kg"] * G
    w_o = m["outer_wing_with_feet_kg"] * G

    k = p.racking_factor * p.dyn_factor / 2                 # je Seite
    # Stufe 2: Aussenfluegel haengt am Innenfluegel
    m2 = w_o * (xc_o - x_exit2)
    f2_rear = m2 / s
    f2_front = f2_rear + w_o
    # Stufe 1: Innenfluegel + Aussenfluegel haengen an der Kassette
    m1 = w_i * (xc_i - x_exit1) + w_o * (xc_o - x_exit1)
    f1_rear = m1 / s
    f1_front = f1_rear + w_i + w_o

    w_move = w_i + w_o
    slope = math.radians(p.roof_slope_deg)
    f_slope = w_move * math.sin(slope)
    f_roll_start = p.roll_friction * w_move                 # eingefahren: Rollen ~ Eigengewicht
    f_roll_end = p.roll_friction * 2 * (f1_front + f1_rear) / (p.dyn_factor * p.racking_factor)
    return {
        "moment_stage1_Nm": m1,
        "moment_stage2_Nm": m2,
        "stage1_front_roller_N_per_side": f1_front * k,
        "stage1_rear_roller_N_per_side": f1_rear * k,
        "stage2_front_roller_N_per_side": f2_front * k,
        "stage2_rear_roller_N_per_side": f2_rear * k,
        "required_C0_per_roller_N": max(f1_front, f1_rear) * k * p.safety_static,
        # Masse in halber Ausladung, die dasselbe Kragmoment erzeugt (Vergleich mit
        # Schubladen-Lastangaben, die sich auf Lastschwerpunkt Mitte beziehen)
        "equiv_drawer_load_kg_pair": m1 / G / (xo1 / 2),
        "lock_moment_per_side_Nm": m1 / 2 * p.dyn_factor,
        "slope_force_N": f_slope,
        "roll_resistance_N": f_roll_start,
        "self_rolling_on_slope": f_slope > f_roll_start,
        "pull_force_N": f_roll_end + p.seal_drag_n + f_slope,
    }


# --------------------------------------------------------------------------
# Statik ausgefahren
# --------------------------------------------------------------------------
def _q(p: Params, v: float) -> float:
    return 0.5 * p.rho_air * v * v


def statics(p: Params, g: dict, m: dict) -> dict:
    """Starrkoerper Kassette+Fluegel, Drehachse am Halter (x=0), Strebe am
    Kassetten-Innenende, Fuesse an der Vorderkante. Kleine Neigung -> cos~1."""
    xs = abs(g["x_strut_mm"]) / 1000
    xf = g["x_foot_mm"] / 1000
    xi0, xi1 = (v / 1000 for v in g["inner_wing_x_mm"])
    xo0, xo1 = (v / 1000 for v in g["outer_wing_x_mm"])
    loads = [
        (m["cassette_kg"] * G, -g["cassette_x_mm"] / 2000),
        (m["inner_wing_kg"] * G, (xi0 + xi1) / 2),
        (m["outer_wing_with_feet_kg"] * G, (xo0 + xo1) / 2),
    ]
    W = sum(w for w, _ in loads)
    Wx = sum(w * x for w, x in loads)                      # Gewichtsmoment um Achse
    Wx_out = sum(w * x for w, x in loads if x > 0)

    area = g["roof_area_m2"] + (p.fabric_extra_area_m2 if p.fabric_wing else 0.0)
    xu = xo1 / 2 if not p.fabric_wing else (xo1 / 2 * g["roof_area_m2"]
                                            + (xo1 + 0.25) * p.fabric_extra_area_m2) / area
    q = _q(p, p.v_operating_ms)
    U = p.cp_uplift * q * area
    D = p.cp_down * q * area

    T = p.gas_comp_ratio * Wx / xs                         # Zug-Gasfeder (nach unten)
    res: dict = {"W_N": W, "Wx_Nm": Wx, "q_Pa": q, "wind_area_m2": area,
                 "uplift_N": U, "down_N": D, "x_wind_m": xu,
                 "gas_spring_total_N": T, "gas_spring_each_N": T / p.n_struts}

    # A: Eigengewicht, Fuesse gestellt, Gasfeder kompensiert
    rf = (Wx - T * xs) / xf
    res["A_feet_each_N"] = rf / p.n_feet
    res["A_pivot_N"] = W + T - rf
    # Handkraft an Vorderkante beim Absenken/Anheben (Neigung einstellen)
    res["tilt_hand_force_N"] = (Wx - T * xs) / (xo1)

    # B: Eigengewicht, ohne Fuesse (Strebe blockiert)
    sb = Wx / xs
    res["B_strut_tension_N"] = sb
    res["B_pivot_N"] = W + sb

    # C: Wind-Sog, Fuesse lose, Strebe blockiert -> alles ueber Halter/Strebe
    sc = (Wx - U * xu) / xs                                # >0 Zug, <0 Druck
    res["C_strut_N"] = sc
    res["C_pivot_N"] = W + sc - U                          # <0 = Halter auf Zug (Abheben)
    # C': Wind-Sog, Strebe nur Gasfederkraft, Fuesse verankert
    rc = (Wx - U * xu - T * xs) / xf
    res["C2_anchor_each_N"] = max(0.0, -rc) / p.n_feet
    res["C2_pivot_N"] = W + T - U - rc

    # D: Winddruck von oben, Fuesse tragen
    rd = (Wx + D * xu - T * xs) / xf
    res["D_feet_each_N"] = rd / p.n_feet
    res["D_pivot_N"] = W + D + T - rd

    # E: Missbrauch Punktlast Vorderkante, ohne Fuesse
    se = (Wx + p.misuse_point_load_n * xo1) / xs
    res["E_strut_tension_N"] = se
    res["E_pivot_N"] = W + p.misuse_point_load_n + se

    # Windgeschwindigkeit, bei der Sog = Eigengewicht ausserhalb (ohne Anker/Strebe)
    w_out = sum(w for w, x in loads if x > 0)
    q_lift = w_out / (p.cp_uplift * area)
    res["v_liftoff_unanchored_ms"] = math.sqrt(2 * q_lift / p.rho_air)
    # mit Ankern
    q_lift_a = (w_out + p.n_feet * p.anchor_capacity_n) / (p.cp_uplift * area)
    res["v_liftoff_anchored_ms"] = math.sqrt(2 * q_lift_a / p.rho_air)
    # Grenzwind fuer zulaessige Halter-Abhebekraft (Fall C)
    # pivot = W + (Wx - U xu)/xs - U  = -allow  -> U
    a = xu / xs + 1
    u_lim = (W + Wx / xs + p.bracket_allow_uplift_n) / a
    res["v_limit_brackets_ms"] = math.sqrt(2 * u_lim / (p.cp_uplift * area) / p.rho_air)
    res["Wx_out_Nm"] = Wx_out
    return res


def cross_beam(p: Params, g: dict, st: dict) -> dict:
    """Querholm Aussenfluegel (Spannweite zwischen Seitenprofilen/Fuessen)
    unter Winddruck + Eigengewicht, Einfeldtraeger mit Gleichstreckenlast."""
    span = g["outer_wing_width_y_mm"]
    trib = g["wing_len_x_mm"] / 2 / 1000                     # m Einzugsbreite
    p_tot = p.cp_down * st["q_Pa"] + p.module_mass_kg * G / (g["solar_area_m2"] / p.n_modules)
    w = p_tot * trib / 1000                                  # N/mm
    M = w * span ** 2 / 8                                    # Nmm
    sigma = M / (p.cross_beam_i_mm4 / (p.cross_beam_h_mm / 2))
    delta = 5 * w * span ** 4 / (384 * p.alu_e_mpa * p.cross_beam_i_mm4)
    return {"span_mm": span, "line_load_N_per_mm": w, "moment_Nm": M / 1000,
            "sigma_MPa": sigma, "sigma_allow_MPa": p.alu_f0_mpa / p.gamma_m,
            "deflection_mm": delta, "deflection_ratio": span / delta}


def feet(p: Params, g: dict, st: dict) -> dict:
    a = p.foot_tube_min_outer_mm
    b = a - 2 * p.foot_tube_min_wall_mm
    I = (a ** 4 - b ** 4) / 12
    L = g["foot_len_range_m"][1] * 1000
    p_cr = math.pi ** 2 * p.alu_e_mpa * I / L ** 2          # Euler, beidseitig gelenkig
    f_max = max(st["D_feet_each_N"], st["A_feet_each_N"]) + p.misuse_point_load_n / p.n_feet
    return {"I_min_mm4": I, "L_buckling_mm": L, "P_cr_N": p_cr,
            "F_design_N": f_max, "buckling_safety": p_cr / f_max,
            "ground_pressure_kPa": f_max / (p.foot_plate_mm ** 2) * 1000}


def driving(p: Params, g: dict, m: dict) -> dict:
    v = p.v_drive_kmh / 3.6
    q = _q(p, v)
    A = g["cassette_x_mm"] * g["cassette_y_mm"] / 1e6
    U = p.cp_drive_lift * q * A
    mass = m["total_kg"] - p.n_brackets * p.bracket_adapter_kg - p.roof_anchor_kg
    up = U + mass * G * (p.a_vertical_g - 1)
    return {"q_Pa": q, "area_m2": A, "aero_lift_N": U,
            "net_up_N": up, "front_brackets_up_N": up / 2, "rear_latches_up_N": up / 2,
            "brake_shear_N": mass * G * p.a_brake_g,
            "crash_shear_N": mass * G * p.a_crash_g, "mass_kg": mass}


def electrical(p: Params) -> dict:
    voc_cold = p.module_voc_v * (1 + p.temp_coeff_voc_pct_per_k / 100 * (p.t_min_c - 25))
    i_design = 1.25 * p.module_isc_a
    rho_cu = 0.0178                                          # Ohm mm^2/m bei 20 C
    r = 2 * p.cable_len_m * rho_cu / p.cable_mm2
    dv = r * p.module_imp_a
    mppt = {}
    for vb, vcharge in ((12, 14.4), (24, 28.8), (48, 57.6)):
        i = p.module_wp / vcharge
        mppt[f"{vb}V"] = i
    return {"voc_cold_V": voc_cold, "isc_design_A": i_design,
            "cable_loss_pct": dv / p.module_vmp_v * 100, "cable_dv_V": dv,
            "mppt_charge_current_A": mppt}


def run(p: Params) -> dict:
    g = geometry(p)
    m = masses(p, g)
    st = statics(p, g, m)
    return {"params": asdict(p), "geometry": g, "masses": m,
            "rollers": rollers(p, g, m), "statics": st,
            "cross_beam": cross_beam(p, g, st), "feet": feet(p, g, st),
            "driving": driving(p, g, m), "electrical": electrical(p)}


# --------------------------------------------------------------------------
# Ausgabe
# --------------------------------------------------------------------------
def _ok(flag: bool) -> str:
    return "OK" if flag else "NICHT ERFUELLT"


def report(r: dict, md: bool = False) -> str:
    g, m, ro, st = r["geometry"], r["masses"], r["rollers"], r["statics"]
    cb, ft, dr, el = r["cross_beam"], r["feet"], r["driving"], r["electrical"]
    p = r["params"]
    out: list[str] = []
    h = (lambda t: out.append(f"\n## {t}\n")) if md else (lambda t: out.append(f"\n=== {t} ==="))

    def row(k: str, v: str) -> None:
        out.append(f"| {k} | {v} |" if md else f"  {k:<52} {v}")

    def table_head() -> None:
        if md:
            out.append("| Groesse | Wert |\n|---|---:|")

    out.append("# Xola SlideRoof 1160 - Vorauslegung (Konzept)" if md else
               "XOLA SLIDEROOF 1160 - VORAUSLEGUNG (KONZEPT, ersetzt keine Statik)")
    if md:
        out.append("\n> Automatisch erzeugt von `calc/slideroof_calc.py`. Handrechnung, "
                   "Starrkoerper. Ersetzt keine statische Berechnung durch einen Fachplaner.")

    h("Ausfahrgeometrie"); table_head()
    row("PV-Leistung", f"{g['pv_wp']:.0f} Wp")
    row("Solarflaeche (Module)", f"{g['solar_area_m2']:.2f} m2")
    row("Dachflaeche ausgefahren (inkl. Rahmen)", f"{g['roof_area_m2']:.2f} m2")
    row("Ausladung ab Fahrzeugwand", f"{g['projection_mm']:.0f} mm")
    row("Breite (Fahrzeuglaengs)", f"{g['inner_wing_width_y_mm']:.0f} mm")
    row("Fluegellaenge in Auszugsrichtung", f"{g['wing_len_x_mm']:.0f} mm")
    row("Hub Innenfluegel / Aussenfluegel", f"{g['stroke_inner_mm']:.0f} / {g['stroke_outer_mm']:.0f} mm")
    row("Kassette L x B x H (x, y, z)",
        f"{g['cassette_x_mm']:.0f} x {g['cassette_y_mm']:.0f} x {g['cassette_height_mm']:.0f} mm")
    row("Fahrzeughoehe + (Kassette + Halter)", f"{g['vehicle_height_increase_mm']:.0f} mm")
    row("Rahmen-Ueberlappung (Stoss Fluegel)", f"{g['frame_overlap_mm']:.0f} mm")
    row("Spalt Glas-Glas (keine Verschattung)", f"{g['glass_gap_mm']:.0f} mm")
    row(f"Absenkung Vorderkante bei {p['tilt_deg']:.0f} Grad", f"{g['front_drop_mm']:.0f} mm")
    row("Anhebung Kassetten-Innenende", f"{g['inner_end_lift_mm']:.0f} mm")
    row("Stuetzfusslaenge geneigt / waagerecht", f"{g['foot_len_tilted_m']:.2f} / {g['foot_len_flat_m']:.2f} m")
    lo, hi = g["foot_len_range_m"]
    row("Erforderlicher Verstellbereich Fuss", f"{lo:.2f} ... {hi:.2f} m")
    row("Max. Klapplaenge Fuss (2 Fuesse laengs)", f"{g['foot_max_folded_len_m']:.2f} m")
    row("Rollenabstand Endlage", f"{g['roller_spacing_mm']:.0f} mm")

    h("Gewicht"); table_head()
    for k, v in m["items"].items():
        row(k, f"{v:.1f} kg")
    row("GESAMT", f"{m['total_kg']:.1f} kg")
    row("Innenfluegel komplett (Ziel <= 15 kg)", f"{m['inner_wing_kg']:.1f} kg -> {_ok(m['inner_wing_kg'] <= 15)}")
    row("Aussenfluegel komplett (Ziel <= 15 kg)", f"{m['outer_wing_kg']:.1f} kg -> {_ok(m['outer_wing_kg'] <= 15)}")
    row("Traegerrahmen innen / aussen (Ziel <= 5 kg)",
        f"{m['inner_frame_kg']:.1f} / {m['outer_frame_kg']:.1f} kg -> "
        f"{_ok(max(m['inner_frame_kg'], m['outer_frame_kg']) <= 5)}")
    row("Gesamt (Ziel < 40 kg)", _ok(m["total_kg"] < 40))

    h("Teleskopfuehrung (freier Kragzustand, Endlage, unverriegelt)"); table_head()
    row("Moment Stufe 1 (Kassette -> Innenfluegel)", f"{ro['moment_stage1_Nm']:.0f} Nm")
    row("Moment Stufe 2 (Innen -> Aussenfluegel)", f"{ro['moment_stage2_Nm']:.0f} Nm")
    row("Rolle Stufe 1 vorn / hinten je Seite", f"{ro['stage1_front_roller_N_per_side']:.0f} / {ro['stage1_rear_roller_N_per_side']:.0f} N")
    row("Rolle Stufe 2 vorn / hinten je Seite", f"{ro['stage2_front_roller_N_per_side']:.0f} / {ro['stage2_rear_roller_N_per_side']:.0f} N")
    row(f"Erf. statische Tragzahl C0 je Rolle (S={p['safety_static']})", f"{ro['required_C0_per_roller_N']:.0f} N")
    row("Aequiv. Schubladenlast (Mitte) Schienenpaar", f"{ro['equiv_drawer_load_kg_pair']:.0f} kg")
    row("Endverriegelung Moment je Seite (inkl. Stoss)", f"{ro['lock_moment_per_side_Nm']:.0f} Nm")
    row(f"Hangabtrieb bei {p['roof_slope_deg']:.0f} Grad Querneigung", f"{ro['slope_force_N']:.0f} N")
    row("Rollwiderstand eingefahren", f"{ro['roll_resistance_N']:.0f} N")
    row("Rollt selbsttaetig -> Rastung/Bremse noetig", "JA" if ro["self_rolling_on_slope"] else "nein")
    row("Zugkraft an der Bedienstange (max.)", f"{ro['pull_force_N']:.0f} N")

    h("Statik ausgefahren"); table_head()
    row("Eigengewicht bewegt + Kassette", f"{st['W_N']:.0f} N")
    row("Gewichtsmoment um Drehachse", f"{st['Wx_Nm']:.0f} Nm")
    row(f"Staudruck bei {p['v_operating_ms']} m/s", f"{st['q_Pa']:.0f} Pa")
    row("Windflaeche", f"{st['wind_area_m2']:.2f} m2")
    row(f"Sog (cp={p['cp_uplift']}) / Druck (cp={p['cp_down']})", f"{st['uplift_N']:.0f} / {st['down_N']:.0f} N")
    row(f"Zug-Gasfedern gesamt ({p['gas_comp_ratio']*100:.0f} % Ausgleich)", f"{st['gas_spring_total_N']:.0f} N ({st['gas_spring_each_N']:.0f} N je Feder)")
    row("Handkraft Vorderkante beim Neigen", f"{st['tilt_hand_force_N']:.0f} N")
    row("A Eigengewicht, Fuesse: Last je Fuss", f"{st['A_feet_each_N']:.0f} N")
    row("A Eigengewicht, Fuesse: Halter gesamt", f"{st['A_pivot_N']:.0f} N")
    row("B ohne Fuesse: Strebe Zug / Halter", f"{st['B_strut_tension_N']:.0f} / {st['B_pivot_N']:.0f} N")
    row("C Sog, Fuesse lose: Strebe (+Zug/-Druck)", f"{st['C_strut_N']:.0f} N")
    row("C Sog, Fuesse lose: Halter (- = Abheben)", f"{st['C_pivot_N']:.0f} N")
    row("C' Sog, Strebe frei: Ankerzug je Fuss", f"{st['C2_anchor_each_N']:.0f} N")
    row("D Druck von oben: Last je Fuss", f"{st['D_feet_each_N']:.0f} N")
    row("D Druck von oben: Halter gesamt", f"{st['D_pivot_N']:.0f} N")
    row(f"E Missbrauch {p['misuse_point_load_n']:.0f} N Vorderkante: Strebe / Halter", f"{st['E_strut_tension_N']:.0f} / {st['E_pivot_N']:.0f} N")
    row("Abheben ohne Anker/Strebe ab", f"{st['v_liftoff_unanchored_ms']:.1f} m/s ({st['v_liftoff_unanchored_ms']*3.6:.0f} km/h)")
    row("Abheben mit Ankern (ohne Strebe) ab", f"{st['v_liftoff_anchored_ms']:.1f} m/s ({st['v_liftoff_anchored_ms']*3.6:.0f} km/h)")
    row(f"Grenzwind Halter ({p['bracket_allow_uplift_n']:.0f} N Abheben, PLATZHALTER)", f"{st['v_limit_brackets_ms']:.1f} m/s ({st['v_limit_brackets_ms']*3.6:.0f} km/h)")

    h("Querholm Aussenfluegel"); table_head()
    row("Spannweite", f"{cb['span_mm']:.0f} mm")
    row("Biegemoment", f"{cb['moment_Nm']:.0f} Nm")
    row("Spannung / zulaessig", f"{cb['sigma_MPa']:.0f} / {cb['sigma_allow_MPa']:.0f} MPa -> {_ok(cb['sigma_MPa'] <= cb['sigma_allow_MPa'])}")
    row("Durchbiegung", f"{cb['deflection_mm']:.1f} mm (L/{cb['deflection_ratio']:.0f})")

    h("Stuetzfuesse"); table_head()
    row("Bemessungslast je Fuss (D + Missbrauch)", f"{ft['F_design_N']:.0f} N")
    row("Euler-Knicklast kleinstes Rohr", f"{ft['P_cr_N']:.0f} N")
    row("Knicksicherheit", f"{ft['buckling_safety']:.1f} -> {_ok(ft['buckling_safety'] >= 3)}")
    row("Bodenpressung Fussplatte", f"{ft['ground_pressure_kPa']:.0f} kPa")

    h("Fahrt (eingefahren)"); table_head()
    row(f"Staudruck {p['v_drive_kmh']:.0f} km/h", f"{dr['q_Pa']:.0f} Pa")
    row("Aerodyn. Auftrieb Kassette", f"{dr['aero_lift_N']:.0f} N")
    row(f"Netto nach oben inkl. {p['a_vertical_g']:.0f} g vertikal", f"{dr['net_up_N']:.0f} N")
    row("Halter vorn gesamt / Riegel hinten gesamt", f"{dr['front_brackets_up_N']:.0f} / {dr['rear_latches_up_N']:.0f} N")
    row(f"Schub Bremsung {p['a_brake_g']:.0f} g / Crash {p['a_crash_g']:.0f} g", f"{dr['brake_shear_N']:.0f} / {dr['crash_shear_N']:.0f} N")

    h("Elektrik (Modul-Elektrowerte = ANNAHMEN)"); table_head()
    row(f"Voc bei {p['t_min_c']:.0f} C", f"{el['voc_cold_V']:.1f} V")
    row("Bemessungsstrom 1,25 x Isc", f"{el['isc_design_A']:.1f} A")
    row(f"Spannungsfall {p['cable_len_m']} m / {p['cable_mm2']} mm2", f"{el['cable_dv_V']:.2f} V ({el['cable_loss_pct']:.1f} %)")
    for k, v in el["mppt_charge_current_A"].items():
        row(f"MPPT-Ladestrom je Modul @ {k}", f"{v:.0f} A")
    return "\n".join(out) + "\n"


def parse_set(params: Params, items: list[str]) -> Params:
    types = {f.name: f.type for f in fields(Params)}
    upd = {}
    for it in items:
        k, _, v = it.partition("=")
        if k not in types:
            raise SystemExit(f"Unbekannter Parameter: {k}")
        t = types[k]
        if t in ("bool", bool):
            upd[k] = v.lower() in ("1", "true", "ja", "yes")
        elif t in ("int", int):
            upd[k] = int(v)
        else:
            upd[k] = float(v)
    return replace(params, **upd)


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--params", help="JSON-Datei mit Parameter-Overrides")
    ap.add_argument("--set", action="append", default=[], metavar="KEY=VALUE")
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--markdown", action="store_true")
    a = ap.parse_args(argv)
    p = Params()
    if a.params:
        with open(a.params, encoding="utf-8") as fh:
            p = replace(p, **json.load(fh))
    p = parse_set(p, a.set)
    r = run(p)
    if a.json:
        json.dump(r, sys.stdout, indent=2, default=str)
        print()
    else:
        sys.stdout.write(report(r, md=a.markdown))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
