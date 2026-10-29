#!/usr/bin/env python3
"""Xola SlideRoof 3480 "hochkant" - parametrische Vorauslegung.

Drei Module stehen hochkant nebeneinander (kurze Seite in Fahrzeuglaengsrichtung):
- ein ausfahrbarer Fluegel mit 3 Modulen (oben, laedt auch bei Fahrt),
- optional 3 Module fest im Kassettenboden (werden beim Ausfahren frei),
- Kassette quer ueber das ganze Dach, steht beidseitig etwas ueber die Karosserie,
- Vollauszug: 3-stufige Rollenschienen (Kassette -> Zwischenwagen -> Fluegel),
  dadurch bleibt auch in Endlage rund 1,1 m Ueberdeckung je Stufe.

Koordinaten wie slideroof_calc.py: x = nach aussen, 0 = Fahrzeugwand / Drehachse am
Markisenhalter, y = Fahrzeuglaengs, z = hoch. KONZEPT-ABSCHAETZUNG, ersetzt keine Statik.

    python3 hochkant_calc.py
    python3 hochkant_calc.py --set fixed_modules=false --markdown
"""
from __future__ import annotations

import argparse
import json
import math
import sys
from dataclasses import asdict, dataclass, fields, replace

from slideroof_calc import G


@dataclass(frozen=True)
class HParams:
    # Modul (hochkant: lange Seite in x)
    module_x_mm: float = 2260.0
    module_y_mm: float = 1219.0
    module_mass_kg: float = 9.1
    module_wp: float = 580.0
    module_voc_v: float = 52.0              # ANNAHME, Datenblatt fehlt
    module_isc_a: float = 14.3              # ANNAHME
    temp_coeff_voc_pct_per_k: float = -0.25
    t_min_c: float = -20.0
    modules_per_layer: int = 3
    fixed_modules: bool = True              # 3 Module fest im Kassettenboden
    module_gap_y_mm: float = 60.0           # Mittelschiene steht in der Fuge

    # Fahrzeug
    body_width_mm: float = 2020.0           # Sprinter-Karosserie ohne Spiegel (ca.)
    roof_flat_length_mm: float = 4300.0     # nutzbare Dachlaenge L2 (ca., am Fahrzeug messen)
    mount_height_m: float = 2.75
    legal_width_mm: float = 2550.0

    # Fluegel
    frame_edge_mm: float = 15.0
    wing_profile_kg_m: float = 0.65         # Laufprofil am Fluegel (4 Stueck)
    cross_beam_kg_m: float = 0.55
    ribs_per_module: int = 5
    rib_kg_m: float = 0.22
    seal_kg_m: float = 0.07
    adhesive_kg_per_module: float = 0.3
    hardware_kg_per_module: float = 0.6

    # Schienen (3-stufiger Vollauszug, je Laufschiene)
    rail_pack_w_mm: float = 60.0            # Breite Schienenpaket an den Seiten
    fixed_rail_kg_m: float = 1.0
    intermediate_rail_kg_m: float = 1.2     # Zwischenwagen inkl. Rollen
    safety_static: float = 2.0
    racking_factor: float = 1.3
    dyn_factor: float = 1.3
    roller_inset_mm: float = 40.0

    # Kassette
    cassette_front_mm: float = 35.0
    cassette_rear_mm: float = 25.0
    cassette_clear_x_mm: float = 20.0
    cassette_wall_mm: float = 25.0
    cassette_height_mm: float = 120.0
    bracket_offset_mm: float = 30.0
    cassette_front_kg_m: float = 1.8
    cassette_rear_kg_m: float = 0.9
    cassette_side_kg_m: float = 1.0
    cassette_underside_kg_m2: float = 0.6
    cassette_hardware_kg: float = 5.0
    fixed_support_kg_per_module: float = 0.8   # Klebung, EPDM, Ablauf (Rippen separat)

    # Fuesse, Streben, Anbau
    n_feet: int = 3
    foot_mass_kg: float = 2.3
    foot_inset_mm: float = 30.0
    n_struts: int = 2
    strut_mass_kg: float = 0.9
    strut_from_inner_end_mm: float = 30.0
    roof_anchor_kg: float = 1.6
    n_brackets: int = 6
    bracket_adapter_kg: float = 0.5
    cabling_kg: float = 2.2

    # Lasten
    tilt_deg: float = 7.0
    rho_air: float = 1.25
    v_operating_ms: float = 10.8
    cp_uplift: float = 1.5
    cp_down: float = 1.0
    anchor_capacity_n: float = 400.0
    misuse_point_load_n: float = 500.0
    gas_comp_ratio: float = 0.7
    v_drive_kmh: float = 130.0
    cp_drive_lift: float = 0.5              # mit Windabweiser vorn, sonst bis 0,8
    a_vertical_g: float = 2.0
    a_crash_g: float = 10.0
    roof_load_limit_kg: float = 150.0       # PLATZHALTER, je Fahrzeug pruefen

    # Querholm vorn (Spannweite zwischen Fuessen)
    cross_beam_i_mm4: float = 73_365.0
    cross_beam_h_mm: float = 40.0
    alu_e_mpa: float = 70_000.0
    alu_f0_mpa: float = 150.0
    gamma_m: float = 1.1


def geometry(p: HParams) -> dict:
    n = p.modules_per_layer
    row_y = n * p.module_y_mm + (n - 1) * p.module_gap_y_mm
    wing_x = p.module_x_mm + 2 * p.frame_edge_mm
    wing_y = row_y + 2 * p.frame_edge_mm
    cas_x = wing_x + p.cassette_clear_x_mm + p.cassette_front_mm + p.cassette_rear_mm
    cas_y = wing_y + 2 * (p.rail_pack_w_mm + 5) + 2 * p.cassette_wall_mm
    # Kassette mittig auf der Karosserie, Drehachse an der Wand (x = 0)
    cas_x0 = -p.body_width_mm / 2 - cas_x / 2
    cas_x1 = cas_x0 + cas_x
    stow_x0 = cas_x0 + p.cassette_rear_mm + p.cassette_clear_x_mm / 2
    dep_x0 = cas_x1 + 10
    dep_x1 = dep_x0 + wing_x
    stroke = dep_x0 - stow_x0
    rail_len = cas_x - p.cassette_front_mm - p.cassette_rear_mm
    half = stroke / 2                                    # Zwischenwagen faehrt halben Hub
    overlap = rail_len - half
    th = math.radians(p.tilt_deg)
    x_foot = dep_x1 - p.foot_inset_mm
    n_mod = n * (2 if p.fixed_modules else 1)
    return {
        "row_y_mm": row_y, "wing_x_mm": wing_x, "wing_y_mm": wing_y,
        "cassette_x_mm": cas_x, "cassette_y_mm": cas_y, "cassette_x_range_mm": (cas_x0, cas_x1),
        "overhang_each_side_mm": (cas_x - p.body_width_mm) / 2,
        "total_width_mm": max(cas_x, p.body_width_mm),
        "fits_legal_width": cas_x <= p.legal_width_mm,
        "fits_roof_length": cas_y <= p.roof_flat_length_mm,
        "cassette_height_mm": p.cassette_height_mm,
        "vehicle_height_increase_mm": p.cassette_height_mm + p.bracket_offset_mm,
        "wing_x_deployed_mm": (dep_x0, dep_x1), "projection_mm": dep_x1,
        "stroke_mm": stroke, "rail_len_mm": rail_len, "stage_overlap_mm": overlap,
        "front_drop_mm": dep_x1 * math.sin(th), "inner_end_lift_mm": (-cas_x0) * math.sin(th),
        "x_foot_mm": x_foot, "x_strut_mm": cas_x0 + p.strut_from_inner_end_mm,
        "foot_len_tilted_m": p.mount_height_m - 0.06 - x_foot / 1000 * math.sin(th),
        "foot_len_flat_m": p.mount_height_m - 0.06,
        "n_modules": n_mod, "pv_wp": n_mod * p.module_wp, "pv_wp_driving": n * p.module_wp,
        "solar_area_m2": n_mod * p.module_x_mm * p.module_y_mm / 1e6,
        "canopy_area_m2": dep_x1 / 1000 * wing_y / 1000,
        "n_tracks": n + 1,
    }


def masses(p: HParams, g: dict) -> dict:
    n = p.modules_per_layer
    t = g["n_tracks"]
    wx, wy = g["wing_x_mm"] / 1000, g["wing_y_mm"] / 1000
    cx, cy = g["cassette_x_mm"] / 1000, g["cassette_y_mm"] / 1000
    rl = g["rail_len_mm"] / 1000
    ribs = n * p.ribs_per_module * p.module_x_mm / 1000 * p.rib_kg_m
    seal = n * 2 * (p.module_x_mm + p.module_y_mm) / 1000 * p.seal_kg_m
    wing_frame = (t * wx * p.wing_profile_kg_m + 2 * wy * p.cross_beam_kg_m + ribs + seal
                  + n * (p.adhesive_kg_per_module + p.hardware_kg_per_module))
    cassette = (cy * p.cassette_front_kg_m + cy * p.cassette_rear_kg_m
                + t * cx * p.cassette_side_kg_m            # 2 Seitenwaende + Mittelschienen
                + cx * cy * p.cassette_underside_kg_m2 + p.cassette_hardware_kg)
    rails = t * rl * (p.intermediate_rail_kg_m)
    fixed = (n * (p.module_mass_kg + p.fixed_support_kg_per_module) + ribs) if p.fixed_modules else 0.0
    items = {
        f"Module Fluegel ({n}x)": n * p.module_mass_kg,
        "Traegerrahmen Fluegel": wing_frame,
        "Kassette (Rahmen, Laufschienen fest, Boden)": cassette,
        f"Zwischenwagen Vollauszug ({t}x)": rails,
        "Stuetzfuesse": p.n_feet * p.foot_mass_kg,
        "Neigungsstreben/Gasfedern": p.n_struts * p.strut_mass_kg,
        "Dach-Ankeradapter": p.roof_anchor_kg,
        "Markisenhalter-Konsolen": p.n_brackets * p.bracket_adapter_kg,
        "E-Ketten, Leitungen, Stecker": p.cabling_kg,
    }
    if p.fixed_modules:
        items[f"Kassettenmodule fest ({n}x) inkl. Auflage"] = fixed
    total = sum(items.values())
    wing = n * p.module_mass_kg + wing_frame
    return {"items": items, "total_kg": total, "wing_kg": wing,
            "moving_kg": wing + p.n_feet * p.foot_mass_kg + rails / 2,
            "cassette_kg": cassette + fixed + rails / 2 + p.n_struts * p.strut_mass_kg / 2,
            "wing_frame_kg": wing_frame}


def loads(p: HParams, g: dict, m: dict) -> dict:
    xs = abs(g["x_strut_mm"]) / 1000
    xf = g["x_foot_mm"] / 1000
    d0, d1 = (v / 1000 for v in g["wing_x_deployed_mm"])
    c0, c1 = (v / 1000 for v in g["cassette_x_range_mm"])
    w_move = m["moving_kg"] * G
    w_cas = m["cassette_kg"] * G
    x_move = (d0 + d1) / 2
    W = w_move + w_cas
    Wx = w_move * x_move + w_cas * (c0 + c1) / 2
    area = g["canopy_area_m2"]
    xu = d1 / 2
    q = 0.5 * p.rho_air * p.v_operating_ms ** 2
    U, D = p.cp_uplift * q * area, p.cp_down * q * area
    T = max(0.0, p.gas_comp_ratio * Wx / xs)
    r: dict = {"W_N": W, "Wx_Nm": Wx, "q_Pa": q, "uplift_N": U, "down_N": D,
               "gas_spring_each_N": T / p.n_struts}
    r["B_strut_tension_N"] = Wx / xs
    r["B_pivot_N"] = W + Wx / xs
    sc = (Wx - U * xu) / xs
    r["C_strut_N"] = sc
    r["C_pivot_N"] = W + sc - U
    rc = (Wx - U * xu - T * xs) / xf
    r["C2_anchor_each_N"] = max(0.0, -rc) / p.n_feet
    rd = (Wx + D * xu - T * xs) / xf
    r["D_feet_each_N"] = rd / p.n_feet
    r["D_pivot_N"] = W + D + T - rd
    se = (Wx + p.misuse_point_load_n * d1) / xs
    r["E_pivot_N"] = W + p.misuse_point_load_n + se
    r["E_strut_N"] = se

    # Vollauszug: Kragmoment des Fluegels um die Austrittsrolle, Kraeftepaar ueber Ueberdeckung
    x_exit = c1 - p.cassette_front_mm / 1000
    m_cant = w_move * (x_move - x_exit)
    lever = (g["stage_overlap_mm"] - 2 * p.roller_inset_mm) / 1000
    k = p.racking_factor * p.dyn_factor / g["n_tracks"]
    f_rear = m_cant / lever
    f_front = f_rear + w_move
    r.update({"cantilever_Nm": m_cant, "rail_lever_mm": lever * 1000,
              "roller_front_N": f_front * k, "roller_rear_N": f_rear * k,
              "roller_C0_N": max(f_front, f_rear) * k * p.safety_static})

    # Querholm vorn zwischen Fuessen
    span = g["wing_y_mm"] / (p.n_feet - 1)
    p_tot = p.cp_down * q + p.module_mass_kg * G / (p.module_x_mm * p.module_y_mm / 1e6)
    wl = p_tot * g["wing_x_mm"] / 2 / 1e6                     # N/mm
    M = wl * span ** 2 / 8
    r["beam_span_mm"] = span
    r["beam_sigma_MPa"] = M / (p.cross_beam_i_mm4 / (p.cross_beam_h_mm / 2))
    r["beam_sigma_allow_MPa"] = p.alu_f0_mpa / p.gamma_m
    r["beam_deflection_mm"] = 5 * wl * span ** 4 / (384 * p.alu_e_mpa * p.cross_beam_i_mm4)

    # Fahrt
    vd = p.v_drive_kmh / 3.6
    qd = 0.5 * p.rho_air * vd ** 2
    Ad = g["cassette_x_mm"] * g["cassette_y_mm"] / 1e6
    mass = m["total_kg"] - p.n_brackets * p.bracket_adapter_kg - p.roof_anchor_kg
    up = p.cp_drive_lift * qd * Ad + mass * G * (p.a_vertical_g - 1)
    r.update({"drive_q_Pa": qd, "drive_area_m2": Ad, "drive_up_N": up,
              "drive_per_side_N": up / 2, "crash_N": mass * G * p.a_crash_g,
              "roof_load_ok": m["total_kg"] <= p.roof_load_limit_kg})

    # Abheben ohne Anker/Strebe, mit Ankern
    w_out = w_move
    r["v_liftoff_ms"] = math.sqrt(2 * w_out / (p.cp_uplift * area) / p.rho_air)
    r["v_liftoff_anchored_ms"] = math.sqrt(
        2 * (w_out + p.n_feet * p.anchor_capacity_n) / (p.cp_uplift * area) / p.rho_air)
    return r


def electrical(p: HParams) -> dict:
    voc_cold = p.module_voc_v * (1 + p.temp_coeff_voc_pct_per_k / 100 * (p.t_min_c - 25))
    n = p.modules_per_layer
    s_voc = n * voc_cold
    strings = 2 if p.fixed_modules else 1
    i = {f"{vb}V": n * p.module_wp / vc for vb, vc in ((12, 14.4), (24, 28.8), (48, 57.6))}
    return {"voc_cold_V": voc_cold, "string_voc_cold_V": s_voc, "strings": strings,
            "mppt_pv_class_V": 150 if s_voc < 142 else 250,
            "isc_design_A": 1.25 * p.module_isc_a, "charge_A_per_string": i}


def run(p: HParams) -> dict:
    g = geometry(p)
    m = masses(p, g)
    return {"params": asdict(p), "geometry": g, "masses": m,
            "loads": loads(p, g, m), "electrical": electrical(p)}


def report(r: dict, md: bool = False) -> str:
    g, m, L, e, p = r["geometry"], r["masses"], r["loads"], r["electrical"], r["params"]
    out: list[str] = []
    ok = lambda b: "OK" if b else "NICHT ERFUELLT"
    h = (lambda t: out.append(f"\n## {t}\n\n| Groesse | Wert |\n|---|---:|")) if md else (lambda t: out.append(f"\n=== {t} ==="))
    row = (lambda k, v: out.append(f"| {k} | {v} |")) if md else (lambda k, v: out.append(f"  {k:<50} {v}"))
    out.append("# Xola SlideRoof hochkant - Vorauslegung (Konzept)" if md else "XOLA SLIDEROOF HOCHKANT - VORAUSLEGUNG (KONZEPT)")
    if md:
        out.append("\n> Automatisch erzeugt von `calc/hochkant_calc.py`. Ersetzt keine statische Berechnung.")
    h("Geometrie")
    row("PV ausgefahren / bei Fahrt", f"{g['pv_wp']:.0f} / {g['pv_wp_driving']:.0f} Wp")
    row("Module gesamt / Laufschienen", f"{g['n_modules']} / {g['n_tracks']}")
    row("Solarflaeche", f"{g['solar_area_m2']:.2f} m2")
    row("Dach ausgefahren: Breite x Ausladung", f"{g['wing_y_mm']/1000:.2f} x {g['projection_mm']/1000:.2f} m")
    row("Dachflaeche ausserhalb Fahrzeug", f"{g['canopy_area_m2']:.2f} m2")
    row("Kassette quer x laengs x hoch", f"{g['cassette_x_mm']:.0f} x {g['cassette_y_mm']:.0f} x {g['cassette_height_mm']:.0f} mm")
    row("Ueberstand ueber Karosserie je Seite", f"{g['overhang_each_side_mm']:.0f} mm")
    row(f"Gesamtbreite (zul. {p['legal_width_mm']:.0f})", f"{g['total_width_mm']:.0f} mm -> {ok(g['fits_legal_width'])}")
    row(f"Kassettenlaenge auf Dach (nutzbar {p['roof_flat_length_mm']:.0f})", ok(g["fits_roof_length"]))
    row("Fahrzeughoehe +", f"{g['vehicle_height_increase_mm']:.0f} mm")
    row("Hub Fluegel / Zwischenwagen", f"{g['stroke_mm']:.0f} / {g['stroke_mm']/2:.0f} mm")
    row("Ueberdeckung je Stufe in Endlage", f"{g['stage_overlap_mm']:.0f} mm")
    row(f"Absenkung Vorderkante / Anhebung Innenende bei {p['tilt_deg']:.0f} Grad", f"{g['front_drop_mm']:.0f} / {g['inner_end_lift_mm']:.0f} mm")
    row("Stuetzfusslaenge geneigt / waagerecht", f"{g['foot_len_tilted_m']:.2f} / {g['foot_len_flat_m']:.2f} m")
    h("Gewicht")
    for k, v in m["items"].items():
        row(k, f"{v:.1f} kg")
    row("GESAMT", f"{m['total_kg']:.1f} kg")
    row("Fluegel komplett", f"{m['wing_kg']:.1f} kg")
    row(f"Dachlast (Platzhalter {p['roof_load_limit_kg']:.0f} kg)", ok(L["roof_load_ok"]))
    h("Vollauszug (freier Kragzustand)")
    row("Kragmoment um Austrittsrolle", f"{L['cantilever_Nm']:.0f} Nm")
    row("Hebel Rollenpaar (Ueberdeckung)", f"{L['rail_lever_mm']:.0f} mm")
    row("Rolle vorn / hinten je Laufschiene", f"{L['roller_front_N']:.0f} / {L['roller_rear_N']:.0f} N")
    row(f"Erf. C0 je Rolle (S={p['safety_static']})", f"{L['roller_C0_N']:.0f} N")
    h("Statik ausgefahren")
    row("Gewichtsmoment um Drehachse", f"{L['Wx_Nm']:.0f} Nm")
    row(f"Sog / Druck bei {p['v_operating_ms']} m/s", f"{L['uplift_N']:.0f} / {L['down_N']:.0f} N")
    row("Zug-Gasfeder je Stueck", f"{L['gas_spring_each_N']:.0f} N")
    row("Ohne Fuesse: Strebe Zug / Halter", f"{L['B_strut_tension_N']:.0f} / {L['B_pivot_N']:.0f} N")
    row("Sog, Fuesse lose: Strebe / Halter (- = Abheben)", f"{L['C_strut_N']:.0f} / {L['C_pivot_N']:.0f} N")
    row("Sog, Strebe frei: Ankerzug je Fuss", f"{L['C2_anchor_each_N']:.0f} N")
    row("Druck: Last je Fuss / Halter", f"{L['D_feet_each_N']:.0f} / {L['D_pivot_N']:.0f} N")
    row(f"Missbrauch {p['misuse_point_load_n']:.0f} N: Strebe / Halter", f"{L['E_strut_N']:.0f} / {L['E_pivot_N']:.0f} N")
    row("Abheben ohne Anker/Strebe ab", f"{L['v_liftoff_ms']:.1f} m/s")
    row("Abheben mit Ankern (ohne Strebe) ab", f"{L['v_liftoff_anchored_ms']:.1f} m/s")
    row(f"Querholm vorn, Spannweite {L['beam_span_mm']:.0f} mm", f"{L['beam_sigma_MPa']:.0f} / {L['beam_sigma_allow_MPa']:.0f} MPa, f = {L['beam_deflection_mm']:.1f} mm")
    h("Fahrt (eingefahren)")
    row(f"Staudruck {p['v_drive_kmh']:.0f} km/h / Flaeche", f"{L['drive_q_Pa']:.0f} Pa / {L['drive_area_m2']:.2f} m2")
    row(f"Netto nach oben (c_lift {p['cp_drive_lift']}, {p['a_vertical_g']:.0f} g)", f"{L['drive_up_N']:.0f} N")
    row("je Seite (Halter / Gegenseite)", f"{L['drive_per_side_N']:.0f} N")
    row(f"Crash {p['a_crash_g']:.0f} g", f"{L['crash_N']:.0f} N")
    h("Elektrik (Modulwerte = ANNAHMEN)")
    row("Voc kalt je Modul / je Strang (3 in Reihe)", f"{e['voc_cold_V']:.1f} / {e['string_voc_cold_V']:.1f} V")
    row("Straenge / MPPT-Klasse", f"{e['strings']} / {e['mppt_pv_class_V']} V")
    for k, v in e["charge_A_per_string"].items():
        row(f"Ladestrom je Strang @ {k}", f"{v:.0f} A")
    return "\n".join(out) + "\n"


def parse_set(params: HParams, items: list[str]) -> HParams:
    types = {f.name: f.type for f in fields(HParams)}
    upd = {}
    for it in items:
        k, _, v = it.partition("=")
        if k not in types:
            raise SystemExit(f"Unbekannter Parameter: {k}")
        t = types[k]
        upd[k] = (v.lower() in ("1", "true", "ja", "yes")) if t in ("bool", bool) else \
                 int(v) if t in ("int", int) else float(v)
    return replace(params, **upd)


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--set", action="append", default=[], metavar="KEY=VALUE")
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--markdown", action="store_true")
    a = ap.parse_args(argv)
    p = parse_set(HParams(), a.set)
    r = run(p)
    if a.json:
        json.dump(r, sys.stdout, indent=2, default=str)
        print()
    else:
        sys.stdout.write(report(r, md=a.markdown))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
