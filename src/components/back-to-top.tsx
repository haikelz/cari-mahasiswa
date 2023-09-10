"use client";

import { ArrowUpIcon } from "@radix-ui/react-icons";
import { tw } from "~lib/helpers";
import { useScroll } from "~hooks";

export default function BackToTop() {
  const scroll = useScroll();

  return (
    <>
      {scroll > 50 ? (
        <button
          id="back-to-top"
          className={tw(
            "fixed border border-neutral-300 dark:bg-neutral-900",
            "bg-gray-50 dark:border-neutral-200",
            "px-3 py-3 right-4 rounded-md bottom-4"
          )}
          type="button"
          aria-label="back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpIcon width={20} height={20} />
        </button>
      ) : null}
    </>
  );
}
