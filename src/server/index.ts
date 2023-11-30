import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { env } from "~env.mjs";
import { configuredOfetch } from "~lib/utils/configured-ofetch";
import { BaseMahasiswaProps, MahasiswaProps } from "~types";

const { NEXT_PUBLIC_API_URL } = env;

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

async function getMahasiswa(
  value: string
): Promise<MahasiswaProps | undefined> {
  try {
    const response: MahasiswaProps = await configuredOfetch(
      `${NEXT_PUBLIC_API_URL}/hit_mhs/${value ? value : "Yuuki"}`
    );

    return response;
  } catch (err) {
    console.error(err);
  }
}

export const appRouter = router({
  get: publicProcedure
    .input(z.object({ value: z.string() }))
    .output(
      z.object({
        total: z.number(),
        mahasiswa: z
          .object({
            nama: z.string().min(1),
            pt: z.string().min(1),
            prodi: z.string().min(1),
            hash: z.string().min(1),
          })
          .array(),
      })
    )
    .query(async ({ input }) => {
      const data = await getMahasiswa(input.value);

      return {
        total: data?.mahasiswa.length as number,
        mahasiswa: data?.mahasiswa
          .map((item) => {
            const replaceStr = item.text
              .replace(/PT :|prodi: /gi, "")
              .split(", ");

            return {
              data: replaceStr,
              hash: item["website-link"].replace(
                /data_mahasiswa|[^a-z0-9-]/gi,
                ""
              ),
            };
          })
          .map((item) => {
            return {
              nama: item.data[0],
              pt: item.data[1],
              prodi: item.data[2],
              hash: item.hash,
            };
          }) as BaseMahasiswaProps[],
      };
    }),
});

export type AppRouter = typeof appRouter;
