import { env } from "~env.mjs";
import { configuredOfetch } from "~lib/utils/configured-ofetch";
import { DetailMahasiswaProps, DetailPerguruanTinggiProps } from "~types";

const { NEXT_PUBLIC_API_URL } = env;

export async function getUniversityDetail(
  slug: string
): Promise<DetailPerguruanTinggiProps | undefined> {
  try {
    const response: DetailPerguruanTinggiProps = await configuredOfetch(
      `${NEXT_PUBLIC_API_URL}/detail_pt/${slug}`
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
