import { tw } from "~lib/utils/tw";
import type { ParagraphProps } from "~types";

export function Paragraph({ className, children, ...props }: ParagraphProps) {
  return (
    <p className={tw("leading-7", className)} {...props}>
      {children}
    </p>
  );
}
