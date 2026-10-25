import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} – ${site.claim}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #e4ede8 0%, #faf8f3 55%, #eae9f7 100%)",
          color: "#22252a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34, fontWeight: 600 }}>
          <div style={{ display: "flex", position: "relative", width: 64, height: 44 }}>
            <div style={{ position: "absolute", left: 0, width: 44, height: 44, borderRadius: 44, background: "#5b8a7d" }} />
            <div style={{ position: "absolute", left: 20, width: 44, height: 44, borderRadius: 44, background: "rgba(85,82,194,0.8)" }} />
          </div>
          ViaErgo Campus
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 960 }}>{site.claim}</div>
        <div style={{ fontSize: 28, color: "#5c6068" }}>Mutter-Kind-Fortbildungen · KI, Organisation und Marketing</div>
      </div>
    ),
    size,
  );
}
