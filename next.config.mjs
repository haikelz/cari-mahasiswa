import "./src/env.mjs";
import { env } from "./src/env.mjs";

const { NEXT_PUBLIC_API_URL } = env;

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
        hostname: NEXT_PUBLIC_API_URL.replace("https://", ""),
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
