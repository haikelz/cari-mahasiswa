import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "~components/breadcumbs";
import Map from "~components/map";
import { Button } from "~components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~components/ui/dialog";
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
import { getUniversityDetail, getUniversityListProdi } from "~features";
import { formatToID } from "~lib/helpers";
import { configuredOfetch } from "~lib/utils/configured-ofetch";
import type {
  DetailPerguruanTinggiProps,
  ProdiPerguruanTinggiProps,
} from "~types";

import { DetailLogo } from "./client";

const { NEXT_PUBLIC_API_URL } = env;

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata | undefined> {
  const { slug } = params;
  const response: DetailPerguruanTinggiProps = await configuredOfetch(
    `${NEXT_PUBLIC_API_URL}/v2/detail_pt/${slug}`
  );

  const { nm_lemb } = response;

  return {
    title: nm_lemb,
    description: `Perguruan tinggi bernama ${nm_lemb}`,
    openGraph: {
      type: "website",
      url: `https://cari-mahasiswa.vercel.app/perguruan-tinggi/${slug}`,
      title: nm_lemb,
      description: `Perguruan tinggi bernama ${nm_lemb}`,
      images: [
        {
          url: "/banner.png",
          alt: "OG Image",
        },
      ],
      siteName: `cari-mahasiswa.vercel.app/perguruan-tinggi/${slug}`,
    },
    twitter: {
      title: nm_lemb,
      description: `Perguruan tinggi bernama ${nm_lemb}`,
      site: `https://cari-mahasiswa.vercel.app/perguruan-tinggi/${slug}`,
      card: "summary_large_image",
    },
    metadataBase: new URL(
      `https://cari-mahasiswa.vercel.app/perguruan-tinggi/${slug}`
    ),
  };
}

export default async function DetailPerguruanTinggi(
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const {
    nm_lemb,
    nama_wil,
    npsn,
    jln,
    stat_sp,
    website,
    tgl_berdiri,
    tgl_sk_pendirian_sp,
    no_tel,
    email,
    sk_pendirian_sp,
    kode_pos,
    lintang,
    bujur,
  } = (await getUniversityDetail(slug)) as DetailPerguruanTinggiProps;

  const prodi = (await getUniversityListProdi(
    slug
  )) as ProdiPerguruanTinggiProps[];

  const logo = `${NEXT_PUBLIC_API_URL}/v2/detail_pt_logo/${slug}`;

  return (
    <>
      <main className="flex justify-center flex-col items-center w-full">
        <section className="max-w-3xl w-full">
          <div className="flex w-full justify-center items-start flex-col">
            <Breadcrumbs />
            <div className="flex mt-10 justify-center items-center w-full text-center">
              <Heading as="h1">Detail Perguruan Tinggi</Heading>
            </div>
            <div className="mt-8 w-full mb-4">
              <div className="flex justify-center items-center w-full">
                <DetailImageDialog logo={logo} nm_lemb={nm_lemb} />
              </div>
              <div className="mt-4">
                <Heading as="h3">Informasi Umum</Heading>
                <div className="mt-2">
                  <Paragraph className="font-medium">NPSN: {npsn}</Paragraph>
                  <Paragraph className="font-medium">
                    Nama: {nm_lemb ?? "-"}
                  </Paragraph>
                  <Paragraph className="font-medium">
                    Wilayah: {nama_wil ?? "-"}
                  </Paragraph>
                  <Paragraph className="font-medium">
                    Alamat: {jln ?? "-"}
                  </Paragraph>
                  <Paragraph className="font-medium">
                    Status: {stat_sp ?? "-"}
                  </Paragraph>
                  <Paragraph className="font-medium">
                    Tanggal berdiri: {formatToID(tgl_berdiri) ?? "-"}
                  </Paragraph>
                  <Paragraph className="font-medium">
                    Website:{" "}
                    <Link
                      href={
                        website.includes("https") || website.includes("http")
                          ? website
                          : `https://${website}`
                      }
                      target="_blank"
                      className="text-blue-500 underline underline-offset-4"
                      rel="noreferrer noopener"
                    >
                      {website ?? "-"}
                    </Link>
                  </Paragraph>
                  <Paragraph className="font-medium">
                    No.Telepon: {no_tel ?? "-"}
                  </Paragraph>
                  <Paragraph className="font-medium">
                    E-Mail: {email ?? "-"}
                  </Paragraph>
                  <Paragraph className="font-medium">
                    Kode pos: {kode_pos ?? "-"}
                  </Paragraph>
                  <Paragraph className="font-medium">
                    SK.Pendirian SP: {sk_pendirian_sp ?? "-"}
                  </Paragraph>
                  <Paragraph className="font-medium">
                    Tanggal SK Pendirian:{" "}
                    {formatToID(tgl_sk_pendirian_sp) ?? "-"}
                  </Paragraph>
                </div>
              </div>
            </div>
            <div className="mt-5 mb-4 w-full">
              <Heading as="h3">Peta Lokasi</Heading>
              <div className="w-full mt-3">
                <Map lat={lintang} long={bujur} />
              </div>
            </div>
            <div className="mt-5 w-full">
              <Heading as="h3">Daftar Jurusan yang Tersedia</Heading>
              <Table className="mt-3">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center font-bold">No</TableHead>
                    <TableHead className="text-center font-bold">
                      Kode
                    </TableHead>
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
                    <TableHead className="text-center font-bold">
                      Rasio
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
                      <TableCell className="font-medium text-center">
                        <RatioListDialog rasio_list={item.rasio_list} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      </main>
      <DetailLogo src={logo} alt={nm_lemb} />
    </>
  );
}

function DetailImageDialog<T extends string>(
  { logo, nm_lemb }: { logo: T; nm_lemb: T }
) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          isBase64={false}
          src={logo}
          alt={nm_lemb}
          width={300}
          height={300}
          className="aspect-square"
          loading="lazy"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Logo {nm_lemb}</DialogTitle>
        </DialogHeader>
        <div className="w-full flex justify-center items-center">
          <Image
            isBase64={false}
            src={logo}
            alt={nm_lemb}
            width={400}
            height={400}
            className="aspect-square"
            loading="lazy"
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              aria-label="close"
              className="font-bold"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function RatioListDialog(
  { rasio_list }: Pick<ProdiPerguruanTinggiProps, "rasio_list">
) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="font-bold"
          type="button"
          aria-label="lihat"
        >
          Lihat
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Rasio</DialogTitle>
          <DialogDescription>
            Perbandingan jumlah dosen dan mahasiswa
          </DialogDescription>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center font-bold">Semester</TableHead>
              <TableHead className="text-center font-bold">Dosen</TableHead>
              <TableHead className="text-center font-bold">Mahasiswa</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rasio_list.map((item2, index) => (
              <TableRow key={index + 1}>
                <TableCell className="font-medium text-center">
                  {item2.semester}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {item2.dosen}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {item2.mahasiswa}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              aria-label="close"
              className="font-bold"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
