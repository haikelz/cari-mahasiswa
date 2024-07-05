import { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://crmhs.ekel.dev/",
    sitemap: "https://crmhs.ekel.dev/sitemap.xml",
  };
}
