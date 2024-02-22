"use client";

import { useAtom } from "jotai";
import { XIcon } from "lucide-react";
import { tw } from "~lib/helpers";
import { isOpenAtom } from "~store";

import Image from "./ui/image";

type LightboxProps = {
  imgSrc: string;
  alt: string;
};

export default function Lightbox({ imgSrc, alt }: LightboxProps) {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);

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
            <div className="mt-2">
              <Image
                isBase64={false}
                src={imgSrc}
                alt={alt}
                width={400}
                height={400}
                className="aspect-square"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
