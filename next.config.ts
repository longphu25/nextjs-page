import type { NextConfig } from "next";

const repo = "nextjs-page";

const nextConfig: NextConfig = {
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  output: "export",
};

export default nextConfig;
