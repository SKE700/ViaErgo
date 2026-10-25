import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} – ${site.claim}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OgImage() {
  const fox = `data:image/png;base64,${(await readFile(join(process.cwd(), "public/brand/viaergo-fuchs-512.png"))).toString("base64")}`;
  const wordmark = `data:image/png;base64,${(await readFile(join(process.cwd(), "public/brand/viaergo-schriftzug.png"))).toString("base64")}`;
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
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={fox} width={96} height={96} alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={wordmark} width={344} height={44} alt="" />
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 960 }}>{site.claim}</div>
        <div style={{ fontSize: 28, color: "#5c6068" }}>Mutter-Kind-Fortbildungen · KI, Organisation und Marketing</div>
      </div>
    ),
    size,
  );
}
