import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { tw } from "~lib/helpers";
import { seoData } from "~lib/utils/data";
import type { ChildrenProps } from "~types";
import "./globals.css";
import Wrapper from "./wrapper";

const BackToTop = dynamic(() => import("~components/back-to-top"));

const inter = Inter({ subsets: ["latin"] });

export const metadata = seoData;

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className={tw("p-4", inter.className)}>
        <Wrapper>
          {children}
          <BackToTop />
        </Wrapper>
      </body>
    </html>
  );
}
