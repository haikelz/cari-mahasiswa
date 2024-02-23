"use client";

import { XIcon } from "lucide-react";
import { tw } from "~lib/helpers";
import { LightboxProps } from "~types";

export default function Lightbox(
  { isOpen, setIsOpen, children }: LightboxProps
) {
  return (
    <>
      {isOpen ? (
        <div
          className={tw(
            "w-full z-50 p-4 flex fixed inset-0 bg-black/20 justify-center",
            "m-0 overflow-y-hidden min-h-screen items-center backdrop-blur-md"
          )}
        >
          <div className="p-6 rounded-lg bg-neutral-50 shadow-lg">
            <div className="flex justify-end items-center">
              <button
                type="button"
                aria-label="open close lightbox"
                onClick={() => setIsOpen(false)}
                className="p-2 transition-all hover:bg-neutral-200 rounded-lg"
              >
                <XIcon />
              </button>
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}
