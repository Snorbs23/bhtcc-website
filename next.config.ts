import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/news",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
