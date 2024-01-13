import { Metadata } from "next";
import dynamic from "next/dynamic";
import { LoadingBackToTop } from "~components/back-to-top";
import { Heading, Paragraph } from "~components/ui/typography";

import Client from "./client";

export const metadata: Metadata = {
  title: "Cari Mahasiswa",
  description:
    "Sebuah Website untuk mencari data Mahasiswa dari berbagai perguruan tinggi",
  openGraph: {
    type: "website",
    url: "https://cari-mahasiswa.vercel.app",
    title: "Cari Mahasiswa",
    description:
      "Sebuah Website untuk mencari data Mahasiswa dari berbagai perguruan tinggi",
    images: [
      {
        url: "/banner.png",
        alt: "OG Image",
      },
    ],
    siteName: "cari-mahasiswa.vercel.app",
  },
  twitter: {
    title: "Cari Mahasiswa",
    description:
      "Sebuah Website untuk mencari data Mahasiswa dari berbagai perguruan tinggi",
    site: "https://cari-mahasiswa.vercel.app",
    card: "summary_large_image",
  },
  metadataBase: new URL("https://cari-mahasiswa.vercel.app"),
};

const SwitchTheme = dynamic(() => import("~components/switch-theme"), {
  loading: () => <LoadingBackToTop />,
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="w-full flex justify-center items-start min-h-screen">
      <section className="w-full max-w-3xl my-3 flex justify-center items-center flex-col">
        <div className="flex justify-center items-center space-x-5 text-center">
          <Heading as="h1">Cari Mahasiswa</Heading>
          <SwitchTheme />
        </div>
        <Paragraph data-cy="description" className="my-5 text-center">
          Sebuah Website untuk mencari data Mahasiswa dari berbagai perguruan
          tinggi di Indonesia.
        </Paragraph>
        <Client />
      </section>
    </main>
  );
}
