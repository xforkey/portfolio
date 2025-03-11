import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Next.js 15 doesn't need these options anymore
  // experimental: {
  //   turbo: { ... }
  // },
};

export default nextConfig;
