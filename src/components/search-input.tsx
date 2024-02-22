"use client";

import { SearchIcon } from "lucide-react";
import { forwardRef } from "react";
import { tw } from "~lib/helpers";
import { ChildrenProps } from "~types";

export const SearchInput = forwardRef<HTMLInputElement, ChildrenProps>(
  (props, ref) => {
    return (
      <div className="flex justify-start relative items-center">
        <SearchIcon className="absolute ml-3" width={20} height={20} />
        <input
          ref={ref}
          className={tw(
            "flex h-9 w-full rounded-md border border-input",
            "px-3 py-1 text-sm bg-background shadow-sm transition-colors",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-muted-foreground focus-visible:outline-none pl-10",
            "focus-visible:ring-1 focus-visible:ring-ring",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
          type="search"
          placeholder="Cari berdasarkan nama, NIM, jurusan, atau perguruan tinggi...."
          name="value"
          required
          {...props}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
