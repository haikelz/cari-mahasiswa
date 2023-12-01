import htmr from "htmr";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { LoadingBackToTop } from "~components/back-to-top";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~components/ui/table";
import { Heading, Paragraph } from "~components/ui/typography";
import { env } from "~env.mjs";
import { configuredOfetch } from "~lib/utils/configured-ofetch";
import { DetailMahasiswaProps, MahasiswaProps } from "~types";

const { NEXT_PUBLIC_API_URL } = env;

const SwitchTheme = dynamic(() => import("~components/switch-theme"), {
  loading: () => <LoadingBackToTop />,
  ssr: false,
});

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata | undefined> {
  const { slug } = params;

  const response: DetailMahasiswaProps = await configuredOfetch(
    `${NEXT_PUBLIC_API_URL}/detail_mhs/${slug}`
  );

  return {
    title: response.dataumum.nm_pd,
    description: `Mahasiswa bernama ${response.dataumum.nm_pd}`,
    openGraph: {
      type: "website",
      url: `https://cari-mahasiswa.vercel.app/mahasiswa/${slug}`,
      title: `Mahasiswa bernama ${response.dataumum.nm_pd}`,
      description: `Mahasiswa bernama ${response.dataumum.nm_pd}`,
      images: [
        {
          url: "/banner.png",
          alt: "OG Image",
        },
      ],
      siteName: "cari-mahasiswa.vercel.app",
    },
    twitter: {
      title: response.dataumum.nm_pd,
      description: `Mahasiswa bernama ${response.dataumum.nm_pd}`,
      site: `https://cari-mahasiswa.vercel.app/mahasiswa/${slug}`,
      card: "summary_large_image",
    },
    metadataBase: new URL(
      `https://cari-mahasiswa.vercel.app/mahasiswa/${slug}`
    ),
  };
}

export async function generateStaticParams(
  { params }: { params: { slug: string } }
): Promise<{ slug: string }[]> {
  const { slug } = params;

  const response: MahasiswaProps = await configuredOfetch(
    `${NEXT_PUBLIC_API_URL}/hit_mhs/${slug}`
  );

  return response.mahasiswa.map((item) => ({
    slug: item["website-link"].replace(/data_mahasiswa|[^a-z0-9-]/gi, ""),
  }));
}

async function getStudentDetail(slug: string): Promise<DetailMahasiswaProps> {
  const response: DetailMahasiswaProps = await configuredOfetch(
    `${NEXT_PUBLIC_API_URL}/detail_mhs/${slug}`
  );

  return response;
}

export default async function DetailMahasiswa(
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  const studentDetail = await getStudentDetail(slug);

  return (
    <main className="flex justify-center flex-col items-center w-full">
      <section className="max-w-3xl w-full">
        <div className="flex items-start justify-center flex-col w-full">
          <div className="flex w-full justify-center items-center space-x-5">
            <Heading as="h1" className="text-center">
              Detail Mahasiswa
            </Heading>
            <SwitchTheme />
          </div>
          <div className="w-full mt-8 mb-4">
            <Heading as="h3">Informasi Umum</Heading>
            <div className="mt-2">
              <Paragraph className="font-medium">
                Nama: {studentDetail.dataumum.nm_pd}
              </Paragraph>
              <Paragraph className="font-medium">
                <Link href="">NIM: {studentDetail.dataumum.nipd}</Link>
              </Paragraph>
              <Paragraph className="font-medium">
                Perguruan Tinggi: {studentDetail.dataumum.namapt}
              </Paragraph>
              <Paragraph className="font-medium">
                Prodi: {studentDetail.dataumum.namaprodi}
              </Paragraph>
              <Paragraph className="font-medium">
                Jenjang: {studentDetail.dataumum.namajenjang}
              </Paragraph>
              <Paragraph className="font-medium">
                Jenis Kelamin:{" "}
                {studentDetail.dataumum.jk === "L" ? "Laki-Laki" : "Perempuan"}
              </Paragraph>
            </div>
          </div>
          <div className="w-full mt-5">
            <Heading as="h3">Data Studi</Heading>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center font-bold">No</TableHead>
                  <TableHead className="text-center font-bold">
                    Mata Kuliah
                  </TableHead>
                  <TableHead className="text-center font-bold">Kode</TableHead>
                  <TableHead className="text-center font-bold">SKS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentDetail.datastudi.length ? (
                  studentDetail.datastudi.map((item, index) => (
                    <TableRow key={index + 1}>
                      <TableCell className="font-medium text-center">
                        {studentDetail.datastudi.length ? index + 1 : "Anime"}
                      </TableCell>
                      <TableCell className="font-medium">
                        {htmr(item.nm_mk)}
                      </TableCell>
                      <TableCell className="font-medium text-center">
                        {item.kode_mk}
                      </TableCell>
                      <TableCell className="font-medium text-center">
                        {item.sks_mk}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell className="font-medium text-center">
                      Tidak ada data
                    </TableCell>
                    <TableCell className="font-medium text-center">
                      Tidak ada data
                    </TableCell>
                    <TableCell className="font-medium text-center">
                      Tidak ada data
                    </TableCell>
                    <TableCell className="font-medium text-center">
                      Tidak ada data
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </main>
  );
}
