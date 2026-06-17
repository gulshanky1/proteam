import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/why-us.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/services.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/overview.html",
        destination: "/how-we-work",
        permanent: true,
      },
      
    ];
  },
};

export default nextConfig;