import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "api-frontend.kemdikbud.go.id",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
