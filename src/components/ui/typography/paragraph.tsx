import { HTMLAttributes } from "react";
import { tw } from "~lib/helpers";
import type { ChildrenProps } from "~types";

type ParagraphProps = ChildrenProps & HTMLAttributes<HTMLParagraphElement>;

export function Paragraph({ className, children, ...props }: ParagraphProps) {
  return (
    <p className={tw("leading-7", className)} {...props}>
      {children}
    </p>
  );
}
