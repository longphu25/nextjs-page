import type { NextConfig } from "next";

const repo = "nextjs-page";

const nextConfig: NextConfig = {
  ...(process.env.NODE_ENV === "production" 
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
  output: "export",
};

export default nextConfig;
