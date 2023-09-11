import dynamic from "next/dynamic";
import { Heading, Paragraph } from "~components/ui/typography";
import { seoData } from "~lib/utils/data";
import Client from "./client";

export const metadata = seoData;

const SwitchTheme = dynamic(() => import("../components/switch-theme"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="w-full flex justify-center items-start min-h-screen">
      <section className="w-full max-w-3xl my-3 flex justify-center items-center flex-col">
        <div className="flex justify-center items-center space-x-5">
          <Heading as="h1" className="text-center">
            Cari Mahasiswa
          </Heading>
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
