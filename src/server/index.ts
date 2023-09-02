import { initTRPC } from "@trpc/server";
import { ofetch } from "ofetch";
import { z } from "zod";
import { env } from "~env.mjs";
import { BaseDataProps } from "~types";

type MahasiswaProps = {
  mahasiswa: BaseDataProps[];
};

const { NEXT_PUBLIC_API_URL } = env;

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

async function getMahasiswa(value: string): Promise<MahasiswaProps> {
  const response = await ofetch(
    `${NEXT_PUBLIC_API_URL}/${value ? value : "Yuuki"}`,
    { method: "GET", parseResponse: JSON.parse, responseType: "json" }
  );

  return response as MahasiswaProps;
}

export const appRouter = router({
  get: publicProcedure
    .input(z.object({ value: z.string() }))
    .output(
      z.object({
        total: z.number(),
        mahasiswa: z
          .object({ text: z.string(), "website-link": z.string() })
          .array(),
      })
    )
    .query(async ({ input }) => {
      const data = await getMahasiswa(input.value);

      return {
        total: data.mahasiswa.length,
        mahasiswa: data.mahasiswa,
      };
    }),
});

export type AppRouter = typeof appRouter;
