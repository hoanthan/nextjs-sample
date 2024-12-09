import type { NextConfig } from "next";

const cdnUrl = new URL(process.env.NEXT_PUBLIC_API_DOMAIN!);

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [{
            hostname: 'strapi.hoanthan.info'
        }]
    },
    output: "standalone"
};

export default nextConfig;
