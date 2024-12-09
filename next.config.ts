import type { NextConfig } from "next";

const cdnUrl = new URL(process.env.NEXT_PUBLIC_API_DOMAIN!);

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [{
            protocol: cdnUrl.protocol.slice(0, -1) as never,
            hostname: 'localhost',
            port: cdnUrl.port,
        }]
    },
    output: "standalone"
};

export default nextConfig;
