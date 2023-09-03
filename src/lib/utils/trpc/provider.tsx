"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/react-query";
import { atom, useAtom } from "jotai";
import { env } from "~env.mjs";
import type { ChildrenProps } from "~types";
import { trpc } from "./client";

const { NEXT_PUBLIC_DEVELOPMENT_URL, NEXT_PUBLIC_PRODUCTION_URL } = env;

const condition = process.env.NODE_ENV;

const queryClientAtom = atom<QueryClient>(() => new QueryClient({}));
const trpcClientAtom = atom(() =>
  trpc.createClient({
    links: [
      httpBatchLink({
        url: `${
          condition === "development"
            ? NEXT_PUBLIC_DEVELOPMENT_URL
            : NEXT_PUBLIC_PRODUCTION_URL
        }/api/trpc`,
      }),
    ],
  })
);

export default function Provider({ children }: ChildrenProps) {
  const [queryClient] = useAtom(queryClientAtom);
  const [trpcClient] = useAtom(trpcClientAtom);

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
