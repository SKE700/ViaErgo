import type { NextConfig } from "next";

// Statischer Export: läuft auf jedem Webspace (Hostinger public_html) ohne Node-Server.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true },
};

export default nextConfig;
