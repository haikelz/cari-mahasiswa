import { env } from "~env.mjs";
import { configuredOfetch } from "~lib/utils/configured-ofetch";
import {
  DetailMahasiswaProps,
  DetailPerguruanTinggiProps,
  ProdiPerguruanTinggiProps,
} from "~types";

const { NEXT_PUBLIC_API_URL } = env;

export async function getUniversityDetail(
  slug: string
): Promise<DetailPerguruanTinggiProps | undefined> {
  try {
    const response: DetailPerguruanTinggiProps = await configuredOfetch(
      `${NEXT_PUBLIC_API_URL}/v2/detail_pt/${slug}`
    );

    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function getUniversityProdiList(
  slug: string
): Promise<ProdiPerguruanTinggiProps[] | undefined> {
  try {
    const response: ProdiPerguruanTinggiProps[] = await configuredOfetch(
      `${NEXT_PUBLIC_API_URL}/v2/detail_pt_prodi/${slug}`
    );

    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function getStudentDetail(
  slug: string
): Promise<DetailMahasiswaProps | undefined> {
  try {
    const response: DetailMahasiswaProps = await configuredOfetch(
      `${NEXT_PUBLIC_API_URL}/detail_mhs/${slug}`
    );

    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function getUniversityListProdi(
  slug: string
): Promise<ProdiPerguruanTinggiProps[] | undefined> {
  try {
    const response: ProdiPerguruanTinggiProps[] = await configuredOfetch(
      `${NEXT_PUBLIC_API_URL}/v2/detail_pt_prodi/${slug}`
    );

    return response;
  } catch (err) {
    console.error(err);
  }
}
