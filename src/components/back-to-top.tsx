"use client";

import { ArrowUpIcon } from "lucide-react";
import { P, match } from "ts-pattern";
import { useScroll } from "~hooks";

import { Button } from "./ui/button";

export default function BackToTop() {
  const scroll = useScroll();

  return (
    <>
      {match({ scroll: scroll })
        .with({ scroll: P.when((scroll) => scroll > 50) }, () => (
          <Button
            size="icon"
            variant="outline"
            className="fixed right-4 bottom-4"
            type="button"
            aria-label="back to top"
            data-cy="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUpIcon />
          </Button>
        ))
        .otherwise(() => null)}
    </>
  );
}
