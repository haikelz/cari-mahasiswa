"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { tw } from "~lib/helpers";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathnames = pathname.slice(1).split("/");

  return (
    <span
      className={tw(
        "font-semibold flex justify-center items-center w-fit px-2 leading-6 tracking-wide py-1",
        "rounded-md bg-neutral-200 dark:bg-neutral-800"
      )}
    >
      <Link href="/">home</Link>
      <ChevronRight size={20} />
      {pathnames.slice(0, pathnames.length - 1).map((item, index) => (
        <Fragment key={index + 1}>
          <Link href={`/${item}`}>{item}</Link>
          <ChevronRight size={20} />
        </Fragment>
      ))}
      <Link
        href={pathname}
        className="underline-offset-4 font-extrabold underline"
      >
        {pathnames[pathnames.length - 1].slice(0, 10)}...
      </Link>
    </span>
  );
}
