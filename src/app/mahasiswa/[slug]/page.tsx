import htmr from "htmr";
import { Metadata } from "next";
import Link from "next/link";
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

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata | undefined> {
  const { slug } = params;

  const response: DetailMahasiswaProps = await configuredOfetch(
    `${NEXT_PUBLIC_API_URL}/detail_mhs/${slug}`
  );

  const { dataumum } = response;

  return {
    title: response.dataumum.nm_pd,
    description: `Mahasiswa bernama ${dataumum.nm_pd}`,
    openGraph: {
      type: "website",
      url: `https://cari-mahasiswa.vercel.app/mahasiswa/${slug}`,
      title: `Mahasiswa bernama ${dataumum.nm_pd}`,
      description: `Mahasiswa bernama ${dataumum.nm_pd}`,
      images: [
        {
          url: "/banner.png",
          alt: "OG Image",
        },
      ],
      siteName: `cari-mahasiswa.vercel.app/mahasiswa/${slug}`,
    },
    twitter: {
      title: response.dataumum.nm_pd,
      description: `Mahasiswa bernama ${dataumum.nm_pd}`,
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

  const { datastatuskuliah, datastudi, dataumum } = await getStudentDetail(
    slug
  );

  return (
    <main className="flex justify-center flex-col items-center w-full">
      <section className="max-w-3xl w-full">
        <div className="flex items-start justify-center flex-col w-full">
          <div className="flex w-full justify-center items-center space-x-5 text-center">
            <Heading as="h1">Detail Mahasiswa</Heading>
          </div>
          <div className="w-full mt-8 mb-4">
            <Heading as="h3">Informasi Umum</Heading>
            <div className="mt-2">
              <Paragraph className="font-medium">
                Nama: {dataumum.nm_pd ?? "-"}
              </Paragraph>
              <Paragraph className="font-medium">
                NIM: {dataumum.nipd ?? "-"}
              </Paragraph>
              <Paragraph className="font-medium">
                Perguruan Tinggi:{" "}
                <Link
                  href={`/perguruan-tinggi/${dataumum.link_pt.replace(
                    /data_pt|[^a-z0-9-]/gi,
                    ""
                  )}`}
                  className="text-blue-500 underline underline-offset-4"
                >
                  {dataumum.namapt ?? "-"}
                </Link>
              </Paragraph>
              <Paragraph className="font-medium">
                Prodi: {dataumum.namaprodi ?? "-"}
              </Paragraph>
              <Paragraph className="font-medium">
                Jenjang: {dataumum.namajenjang ?? "-"}
              </Paragraph>
              <Paragraph className="font-medium">
                Jenis Kelamin: {dataumum.jk === "L" ? "Laki-Laki" : "Perempuan"}
              </Paragraph>
            </div>
          </div>
          <div className="w-full my-5">
            <Heading as="h3">Status Kuliah</Heading>
            <Table className="mt-3">
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">ID</TableHead>
                  <TableHead className="font-bold">SKS</TableHead>
                  <TableHead className="font-bold">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {datastatuskuliah.length ? (
                  datastatuskuliah.map((item, index) => (
                    <TableRow key={index + 1}>
                      <TableCell className="font-semibold">
                        {item.id_smt}
                      </TableCell>
                      <TableCell className="font-semibold">
                        {item.sks_smt ?? "-"}
                      </TableCell>
                      <TableCell className="font-semibold">
                        {item.nm_stat_mhs ?? "-"}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell className="font-medium">-</TableCell>
                    <TableCell className="font-medium">-</TableCell>
                    <TableCell className="font-medium">-</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="w-full mt-5">
            <Heading as="h3">Data Studi</Heading>
            <Table className="mt-3">
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
                {datastudi.length ? (
                  datastudi.map((item, index) => (
                    <TableRow key={index + 1}>
                      <TableCell className="font-medium text-center">
                        {datastudi.length ? index + 1 : "-"}
                      </TableCell>
                      <TableCell className="font-medium">
                        {htmr(item.nm_mk) ?? "-"}
                      </TableCell>
                      <TableCell className="font-medium text-center">
                        {item.kode_mk ?? "-"}
                      </TableCell>
                      <TableCell className="font-medium text-center">
                        {item.sks_mk ?? "-"}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell className="font-medium text-center">-</TableCell>
                    <TableCell className="font-medium text-center">-</TableCell>
                    <TableCell className="font-medium text-center">-</TableCell>
                    <TableCell className="font-medium text-center">-</TableCell>
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
