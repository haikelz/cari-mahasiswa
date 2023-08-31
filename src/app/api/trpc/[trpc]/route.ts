import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "~server";

async function handler(req: Request) {
  const response = await fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  });

  return response;
}

export { handler as GET, handler as POST };
