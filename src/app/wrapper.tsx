"use client";

import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider } from "next-themes";
import { ChildrenProps } from "~types";
import Provider from "./_trpc/provider";

export default function Wrapper({ children }: ChildrenProps) {
  return (
    <JotaiProvider>
      <Provider>
        <ThemeProvider enableSystem attribute="class">
          {children}
        </ThemeProvider>
      </Provider>
    </JotaiProvider>
  );
}
