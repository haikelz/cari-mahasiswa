import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import SwitchTheme from "~components/switch-theme";
import { tw } from "~lib/helpers";
import { ChildrenProps } from "~types";

import Footer from "../components/footer";
import "./globals.css";
import Wrapper from "./wrapper";

const BackToTop = dynamic(() => import("~components/back-to-top"));

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={tw("p-4", inter.className)}>
        <Wrapper>
          <SwitchTheme />
          {children}
          <Footer />
          <BackToTop />
        </Wrapper>
        <Analytics />
      </body>
    </html>
  );
}
