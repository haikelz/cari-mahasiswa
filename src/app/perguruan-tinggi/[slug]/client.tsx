"use client";

import { useAtom } from "jotai";
import Image from "~components/ui/image";
import { isOpenAtom } from "~store";

export default function Client({ logo, alt }: { logo: string; alt: string }) {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);

  return (
    <div className="flex justify-center items-center w-full">
      <div
        role="button"
        tabIndex={0}
        aria-hidden="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          isBase64={false}
          src={logo}
          alt={alt}
          width={300}
          height={300}
          className="my-4 rounded-md dark:bg-white"
          fetchPriority="high"
        />
      </div>
    </div>
  );
}
