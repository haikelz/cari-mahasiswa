import "./src/env.mjs";
import { env } from "./src/env.mjs";

const { NEXT_PUBLIC_API_URL } = env;

const logo = NEXT_PUBLIC_API_URL.replace("https://", "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: logo,
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
