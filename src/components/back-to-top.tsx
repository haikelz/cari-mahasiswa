"use client";

import { ArrowUpIcon } from "lucide-react";
import { useScroll } from "~hooks";
import { tw } from "~lib/helpers";

import { Button } from "./ui/button";

export default function BackToTop() {
  const scroll = useScroll();

  return (
    <>
      {scroll > 50 ? (
        <Button
          variant="outline"
          className="fixed p-3 right-4 rounded-md bottom-4"
          type="button"
          aria-label="back to top"
          data-cy="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpIcon width={20} height={20} />
        </Button>
      ) : null}
    </>
  );
}
