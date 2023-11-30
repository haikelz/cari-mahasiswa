"use client";

import { ArrowUpIcon } from "@radix-ui/react-icons";
import { useScroll } from "~hooks";
import { tw } from "~lib/helpers";

export default function BackToTop() {
  const scroll = useScroll();

  return (
    <>
      {scroll > 50 ? (
        <button
          className={tw(
            "fixed border border-neutral-300 dark:bg-neutral-900",
            "bg-gray-50 hover:bg-gray-100",
            "dark:border-neutral-200 dark:hover:bg-neutral-800",
            "p-3 right-4 rounded-md bottom-4"
          )}
          type="button"
          aria-label="back to top"
          data-cy="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpIcon width={20} height={20} />
        </button>
      ) : null}
    </>
  );
}
