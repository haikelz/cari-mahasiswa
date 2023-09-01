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

export const appRouter = router({
  getMahasiswa: publicProcedure
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
      const response = await ofetch(
        `${NEXT_PUBLIC_API_URL}/${input.value ? input.value : "Yuuki"}`,
        {
          method: "GET",
          parseResponse: JSON.parse,
          responseType: "json",
        }
      );

      const data = response as MahasiswaProps;

      return {
        total: data.mahasiswa.length,
        mahasiswa: data.mahasiswa,
      };
    }),
});

export type AppRouter = typeof appRouter;
