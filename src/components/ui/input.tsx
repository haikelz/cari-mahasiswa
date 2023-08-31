"use client";

import { forwardRef } from "react";
import { tw } from "~lib/helpers";

export const Input = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <input
      ref={ref}
      className={tw(
        "flex relative h-9 w-full rounded-md border border-input",
        "bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "focus-visible:ring-1 focus-visible:ring-ring",
        "placeholder:text-muted-foreground focus-visible:outline-none pl-10",
        "disabled:cursor-not-allowed disabled:opacity-50"
      )}
      type="search"
      placeholder="Cari berdasarkan nama, NIM, jurusan, atau perguruan tinggi...."
      name="name"
      required
      {...props}
    />
  );
});

Input.displayName = "Input";
