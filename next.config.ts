import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isProd ? "/my-portfolio" : "",
  // assetPrefix is NOT needed when basePath is set. It can cause duplicate prefixes.
};

export default nextConfig;