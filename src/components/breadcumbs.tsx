"use client";

import htmr from "htmr";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathnames = pathname
    .slice(1)
    .replace("/", " <span> > </span> ")
    .split(" ");

  const clampSlug =
    pathnames.slice(0, pathnames.length - 1).join(" ") +
    `<span className="font-extrabold">${pathnames[pathnames.length - 1].slice(
      0,
      10
    )}...</span>`;

  return (
    <span className="font-semibold px-2 leading-6 tracking-wide py-1 rounded-md bg-neutral-200 dark:bg-neutral-800">
      <Link
        href="/"
        className="hover:underline-offset-4 hover:font-extrabold hover:underline"
      >
        home
      </Link>{" "}
      {">"} {htmr(clampSlug)}
    </span>
  );
}
