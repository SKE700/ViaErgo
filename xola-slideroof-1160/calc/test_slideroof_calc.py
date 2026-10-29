"""Plausibilitaetstests: python3 -m unittest test_slideroof_calc.py"""
import math
import unittest
from dataclasses import replace

from slideroof_calc import G, Params, geometry, masses, run, statics


class GeometryTest(unittest.TestCase):
    def setUp(self):
        self.p = Params()
        self.g = geometry(self.p)

    def test_solar_area_and_power(self):
        self.assertGreaterEqual(self.g["solar_area_m2"], 5.5)
        self.assertEqual(self.g["pv_wp"], 1160)

    def test_no_shading_between_modules(self):
        # Glas des Innenfluegels darf keine Zellen des Aussenfluegels ueberdecken
        self.assertGreaterEqual(self.g["glass_gap_mm"], 0)

    def test_frames_overlap_for_moment_joint(self):
        self.assertGreater(self.g["frame_overlap_mm"], 0)

    def test_wings_fit_in_cassette(self):
        inner = self.g["cassette_x_mm"] - self.p.cassette_front_beam_mm - self.p.cassette_rear_beam_mm
        self.assertGreaterEqual(inner, self.g["wing_len_x_mm"])

    def test_feet_fold_without_collision(self):
        lo, hi = self.g["foot_len_range_m"]
        # 3-teiliges Teleskop: ausgezogen ~2,7x Klapplaenge
        self.assertLessEqual(hi / 2.7, self.g["foot_max_folded_len_m"])


class MassTest(unittest.TestCase):
    def test_items_sum_to_total(self):
        p = Params()
        m = masses(p, geometry(p))
        self.assertAlmostEqual(sum(m["items"].values()), m["total_kg"])

    def test_lightweight_variant_is_lighter(self):
        base = run(Params())["masses"]["total_kg"]
        light = run(replace(Params(), inner_side_profile_kg_m=0.95, cross_beam_kg_m=0.32))["masses"]["total_kg"]
        self.assertLess(light, base)


class StaticsTest(unittest.TestCase):
    def _equilibrium(self, p):
        g = geometry(p)
        m = masses(p, g)
        st = statics(p, g, m)
        # Fall C: P - S + U - W = 0 (S als Zug nach unten)
        self.assertAlmostEqual(st["C_pivot_N"] - st["C_strut_N"] + st["uplift_N"] - st["W_N"], 0, places=6)
        # Fall B: Momentengleichgewicht um Drehachse
        xs = abs(g["x_strut_mm"]) / 1000
        self.assertAlmostEqual(st["B_strut_tension_N"] * xs, st["Wx_Nm"], places=6)

    def test_equilibrium_default(self):
        self._equilibrium(Params())

    def test_equilibrium_with_fabric_wing(self):
        self._equilibrium(replace(Params(), fabric_wing=True))

    def test_anchors_raise_liftoff_speed(self):
        st = run(Params())["statics"]
        self.assertGreater(st["v_liftoff_anchored_ms"], st["v_liftoff_unanchored_ms"])

    def test_longer_tail_reduces_roller_load(self):
        a = run(replace(Params(), tail_mm=120))["rollers"]["required_C0_per_roller_N"]
        b = run(replace(Params(), tail_mm=200))["rollers"]["required_C0_per_roller_N"]
        self.assertLess(b, a)

    def test_dynamic_pressure(self):
        st = run(replace(Params(), v_operating_ms=10.0))["statics"]
        self.assertAlmostEqual(st["q_Pa"], 0.5 * 1.25 * 100)


class ElectricalTest(unittest.TestCase):
    def test_cold_voc_higher_and_below_100v(self):
        el = run(Params())["electrical"]
        self.assertGreater(el["voc_cold_V"], Params().module_voc_v)
        self.assertLess(el["voc_cold_V"], 100)  # 100-V-MPPT-Klasse zulaessig


if __name__ == "__main__":
    unittest.main()
