import { initTRPC } from "@trpc/server";
import { ofetch } from "ofetch";
import { z } from "zod";
import { env } from "~env.mjs";

const { NEXT_PUBLIC_API_URL } = env;

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  getData: publicProcedure
    .input(z.object({ value: z.string() }))
    .query(async ({ input }) => {
      const response = await ofetch(
        `${NEXT_PUBLIC_API_URL}/${input.value ? input.value : "Andi"}`,
        {
          method: "GET",
          parseResponse: JSON.parse,
          responseType: "json",
        }
      );

      return response;
    }),
});

export type AppRouter = typeof appRouter;
