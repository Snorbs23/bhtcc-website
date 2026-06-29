import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/news",
        destination: "/",
        permanent: false,
      },
      {
        source: "/thaifex2027",
        destination:
          "https://docs.google.com/forms/d/1PTGBm-DtFFzSQkIovLl6C1B4J2Db5Xl-KObfyTkNI-A/viewform",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
