import { HTMLAttributes } from "react";
import type { ChildrenProps } from "~types";

type ParagraphProps = ChildrenProps & HTMLAttributes<HTMLParagraphElement>;

export function Paragraph({ children, ...props }: ParagraphProps) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
      {children}
    </p>
  );
}
