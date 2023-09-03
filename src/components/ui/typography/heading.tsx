import { HTMLAttributes } from "react";
import type { ChildrenProps } from "~types";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  ChildrenProps & {
    as: "h1" | "h2" | "h3" | "h4";
  };

export function Heading({ as, children }: HeadingProps) {
  return (
    <>
      {as === "h1" ? (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {children}
        </h1>
      ) : as === "h2" ? (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {children}
        </h2>
      ) : as === "h3" ? (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {children}
        </h3>
      ) : as === "h4" ? (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {children}
        </h4>
      ) : null}
    </>
  );
}
