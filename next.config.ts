import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co"
      }
    ],
  },
  allowedDevOrigins: ['10.30.12.37'],

};

export default nextConfig;
