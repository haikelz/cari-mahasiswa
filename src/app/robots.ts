import { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://cari-mahasiswa.vercel.app/",
    sitemap: "https://cari-mahasiswa.vercel.app/sitemap.xml",
  };
}
