"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider } from "next-themes";
import Provider from "~lib/utils/trpc/provider";
import type { ChildrenProps } from "~types";

export default function Wrapper({ children }: ChildrenProps) {
  return (
    <JotaiProvider>
      <Provider>
        <ThemeProvider enableSystem attribute="class">
          <ReactLenis
            root
            options={{
              easing: (x: number) => 1 - Math.cos((x * Math.PI) / 2),
              direction: "vertical",
              gestureDirection: "vertical",
              smooth: true,
              smoothTouch: true,
              touchMultiplier: 2,
              smoothWheel: true,
            }}
          >
            {children}
          </ReactLenis>
        </ThemeProvider>
      </Provider>
    </JotaiProvider>
  );
}
