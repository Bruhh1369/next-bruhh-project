import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.forgecdn.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'r2.mcpedl.com',
        pathname: '/**',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
module.exports = nextConfig;
// ...existing code...