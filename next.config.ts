import type { NextConfig } from "next";
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})

const nextConfig: NextConfig = {
  experimental: {
    // @ts-ignore - Turbopack config is required to silence Webpack/Turbopack conflict in Next.js 15/16
    turbopack: {},
  },
};

export default withPWA(nextConfig);
