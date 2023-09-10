"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { tw } from "~lib/helpers";

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      id="switch-theme"
      type="button"
      aria-label="switch theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={tw(
        "px-3 py-2.5 dark:bg-neutral-800",
        "dark:border-neutral-200 border",
        "bg-gray-100 border-neutral-300",
        "rounded-md"
      )}
    >
      {theme === "dark" ? (
        <SunIcon width={25} height={25} />
      ) : (
        <MoonIcon width={25} height={25} />
      )}
    </button>
  );
}
