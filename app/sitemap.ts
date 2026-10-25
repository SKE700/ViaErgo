import type { MetadataRoute } from "next";
import { courses } from "@/content/courses";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/mutter-kind", "/praxis", "/ueber-daniel", "/ueber-viaergo", "/kontakt", "/newsletter"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...courses.map((c) => ({ url: `${site.url}/kurse/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
