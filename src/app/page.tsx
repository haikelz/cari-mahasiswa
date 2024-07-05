import { Metadata } from "next";
import { Heading, Paragraph } from "~components/ui/typography";

import Client from "./client";

export const metadata: Metadata = {
  title: "Cari Mahasiswa",
  description:
    "Sebuah Website untuk mencari data Mahasiswa dari berbagai perguruan tinggi",
  openGraph: {
    type: "website",
    url: "https://crmhs.ekel.dev",
    title: "Cari Mahasiswa",
    description:
      "Sebuah Website untuk mencari data Mahasiswa dari berbagai perguruan tinggi",
    images: [
      {
        url: "/banner.png",
        alt: "OG Image",
      },
    ],
    siteName: "crmhs.ekel.dev",
  },
  twitter: {
    title: "Cari Mahasiswa",
    description:
      "Sebuah Website untuk mencari data Mahasiswa dari berbagai perguruan tinggi",
    site: "https://crmhs.ekel.dev",
    card: "summary_large_image",
  },
  metadataBase: new URL("https://crmhs.ekel.dev"),
};

export default function HomePage() {
  return (
    <>
      <main className="w-full flex justify-center items-start min-h-screen">
        <section className="w-full max-w-3xl my-3 flex justify-center items-center flex-col">
          <div className="flex justify-center items-center space-x-5 text-center">
            <Heading as="h1">Cari Mahasiswa</Heading>
          </div>
          <Paragraph data-cy="description" className="my-5 text-center">
            Sebuah Website untuk mencari data Mahasiswa dari berbagai perguruan
            tinggi di Indonesia.
          </Paragraph>
          <Client />
        </section>
      </main>
    </>
  );
}
