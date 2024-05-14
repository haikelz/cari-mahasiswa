import { env } from "~env.mjs";
import { configuredOfetch } from "~lib/utils/configured-ofetch";
import {
  DetailMahasiswaProps,
  DetailPerguruanTinggiProps,
  MahasiswaProps,
  ProdiPerguruanTinggiProps,
} from "~types";

const { NEXT_PUBLIC_API_URL } = env;

export async function getMahasiswa(value: string): Promise<MahasiswaProps> {
  try {
    const response: MahasiswaProps = await configuredOfetch(
      `${NEXT_PUBLIC_API_URL}/hit_mhs/${value ? value : "Yuuki"}`
    );

    return response;
  } catch (err: any) {
    throw new Error("Failed to fetch data!");
  }
}

export async function getUniversityDetail(
  slug: string
): Promise<DetailPerguruanTinggiProps> {
  try {
    const response: DetailPerguruanTinggiProps = await configuredOfetch(
      `${NEXT_PUBLIC_API_URL}/v2/detail_pt/${slug}`
    );

    return response;
  } catch (err: any) {
    throw new Error("Failed to fetch data!");
  }
}

export async function getStudentDetail(
  slug: string
): Promise<DetailMahasiswaProps> {
  try {
    const response: DetailMahasiswaProps = await configuredOfetch(
      `${NEXT_PUBLIC_API_URL}/detail_mhs/${slug}`
    );

    return response;
  } catch (err: any) {
    throw new Error("Failed to fetch data!");
  }
}

export async function getUniversityListProdi(
  slug: string
): Promise<ProdiPerguruanTinggiProps[]> {
  try {
    const response: ProdiPerguruanTinggiProps[] = await configuredOfetch(
      `${NEXT_PUBLIC_API_URL}/v2/detail_pt_prodi/${slug}`
    );

    return response;
  } catch (err: any) {
    throw new Error("Failed to fetch data!");
  }
}
