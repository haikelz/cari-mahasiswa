import { Metadata } from "next";
import Link from "next/link";
import Image from "~components/ui/image";
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
import { formatToID } from "~lib/helpers";
import { configuredOfetch } from "~lib/utils/configured-ofetch";
import { DetailPerguruanTinggiProps } from "~types";

const { NEXT_PUBLIC_API_URL } = env;

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata | undefined> {
  const { slug } = params;
  const response: DetailPerguruanTinggiProps = await configuredOfetch(
    `${NEXT_PUBLIC_API_URL}/detail_pt/${slug}`
  );

  const { data } = response;

  return {
    title: data.nm_lemb,
    description: `Perguruan tinggi bernama ${data.nm_lemb}`,
    openGraph: {
      type: "website",
      url: `https://cari-mahasiswa.vercel.app/perguruan-tinggi/${slug}`,
      title: data.nm_lemb,
      description: `Perguruan tinggi bernama ${data.nm_lemb}`,
      images: [
        {
          url: "/banner.png",
          alt: "OG Image",
        },
      ],
      siteName: `cari-mahasiswa.vercel.app/perguruan-tinggi/${slug}`,
    },
    twitter: {
      title: data.nm_lemb,
      description: `Perguruan tinggi bernama ${data.nm_lemb}`,
      site: `https://cari-mahasiswa.vercel.app/perguruan-tinggi/${slug}`,
      card: "summary_large_image",
    },
    metadataBase: new URL(
      `https://cari-mahasiswa.vercel.app/perguruan-tinggi/${slug}`
    ),
  };
}

async function getUniversityDetail(
  slug: string
): Promise<DetailPerguruanTinggiProps> {
  const response: DetailPerguruanTinggiProps = await configuredOfetch(
    `${NEXT_PUBLIC_API_URL}/detail_pt/${slug}`
  );

  return response;
}

export default async function DetailPerguruanTinggi(
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const { data, prodi } = await getUniversityDetail(slug);

  return (
    <main className="flex justify-center flex-col items-center w-full">
      <section className="max-w-3xl w-full">
        <div className="flex w-full justify-center items-start flex-col">
          <div className="flex justify-center items-center w-full text-center">
            <Heading as="h1">Detail Perguruan Tinggi</Heading>
          </div>
          <div className="mt-8 w-full mb-4">
            <div className="flex justify-center items-center w-full">
              <Image
                src={
                  data.logo ??
                  `https://placehold.co/300?text=Image+Not+Found&font=montserrat`
                }
                alt="logo"
                width={300}
                height={300}
                isBase64={data.logo ? true : false}
                className="my-4 rounded-md dark:bg-white"
                fetchPriority="high"
              />
            </div>
            <div className="mt-4">
              <Heading as="h3">Informasi Umum</Heading>
              <div className="mt-2">
                <Paragraph className="font-medium">NPSN: {data.npsn}</Paragraph>
                <Paragraph className="font-medium">
                  Nama: {data.nm_lemb ?? "-"}
                </Paragraph>
                <Paragraph className="font-medium">
                  Wilayah: {data.nama_wil ?? "-"}
                </Paragraph>
                <Paragraph className="font-medium">
                  Alamat: {data.jln ?? "-"}
                </Paragraph>
                <Paragraph className="font-medium">
                  Status: {data.stat_sp ?? "-"}
                </Paragraph>
                <Paragraph className="font-medium">
                  Tanggal berdiri: {formatToID(data.tgl_berdiri) ?? "-"}
                </Paragraph>
                <Paragraph className="font-medium">
                  Website:{" "}
                  <Link
                    href={
                      data.website.includes("https") ||
                      data.website.includes("http")
                        ? data.website
                        : `https://${data.website}`
                    }
                    target="_blank"
                    className="text-blue-500 underline underline-offset-4"
                    rel="noreferrer noopener"
                  >
                    {data.website ?? "-"}
                  </Link>
                </Paragraph>
                <Paragraph className="font-medium">
                  No.Telepon: {data.no_tel ?? "-"}
                </Paragraph>
                <Paragraph className="font-medium">
                  E-Mail: {data.email ?? "-"}
                </Paragraph>
                <Paragraph className="font-medium">
                  Kode pos: {data.kode_pos ?? "-"}
                </Paragraph>
                <Paragraph className="font-medium">
                  SK.Pendirian SP: {data.sk_pendirian_sp ?? "-"}
                </Paragraph>
                <Paragraph className="font-medium">
                  Tanggal SK Pendirian:{" "}
                  {formatToID(data.tgl_sk_pendirian_sp) ?? "-"}
                </Paragraph>
              </div>
            </div>
          </div>
          <div className="mt-5 w-full">
            <Heading as="h3">Daftar Jurusan yang Tersedia</Heading>
            <Table className="mt-3">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center font-bold">No</TableHead>
                  <TableHead className="text-center font-bold">Kode</TableHead>
                  <TableHead className="text-center font-bold">
                    Jurusan
                  </TableHead>
                  <TableHead className="text-center font-bold">
                    Jenjang
                  </TableHead>
                  <TableHead className="text-center font-bold">
                    Akreditasi
                  </TableHead>
                  <TableHead className="text-center font-bold">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {prodi.map((item, index) => (
                  <TableRow key={index + 1}>
                    <TableCell className="font-medium text-center">
                      {index + 1}
                    </TableCell>
                    <TableCell className="font-medium text-center">
                      {item.kode_prodi ?? "-"}
                    </TableCell>
                    <TableCell className="font-medium">
                      {item.nm_lemb ?? "-"}
                    </TableCell>
                    <TableCell className="font-medium text-center">
                      {item.jenjang ?? "-"}
                    </TableCell>
                    <TableCell className="font-medium text-center">
                      {item.akreditas ?? "-"}
                    </TableCell>
                    <TableCell className="font-medium text-center">
                      {item.stat_prodi ?? "-"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </main>
  );
}
