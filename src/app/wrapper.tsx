"use client";

import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider } from "next-themes";
import Provider from "~lib/utils/trpc/provider";
import type { ChildrenProps } from "~types";

export default function Wrapper({ children }: ChildrenProps) {
  return (
    <JotaiProvider>
      <Provider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </Provider>
    </JotaiProvider>
  );
}
