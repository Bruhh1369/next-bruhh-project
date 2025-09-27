import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['media.forgecdn.net','r2.mcpedl.com'],
  },
  /* config options here */
};

export default nextConfig;
module.exports = nextConfig;
// ...existing code...