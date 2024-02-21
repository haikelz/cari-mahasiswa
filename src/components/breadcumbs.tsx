"use client";

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
        "font-semibold px-2 leading-6 tracking-wide py-1",
        "rounded-md bg-neutral-200 dark:bg-neutral-800"
      )}
    >
      <Link
        href="/"
        className="hover:underline-offset-4 hover:font-extrabold hover:underline"
      >
        home
      </Link>
      <span>{" > "}</span>
      {pathnames.slice(0, pathnames.length - 1).map((item, index) => (
        <Fragment key={index + 1}>
          <Link
            href={`/${item}`}
            className="hover:underline-offset-4 hover:font-extrabold hover:underline"
          >
            {item}
          </Link>
          <span>{" > "}</span>
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
