"use client";

import { useAtom } from "jotai";
import Lightbox from "~components/lightbox";
import Image from "~components/ui/image";
import { isOpenLogoAtom } from "~store";
import { LogoDetailProps } from "~types";

export function SeeLogoDetail({ src, alt }: LogoDetailProps) {
  const [isOpenLogo, setIsOpenLogo] = useAtom(isOpenLogoAtom);

  return (
    <div className="flex justify-center items-center w-full">
      <div
        role="button"
        tabIndex={0}
        aria-hidden="true"
        onClick={() => setIsOpenLogo(!isOpenLogo)}
      >
        <Image
          isBase64={false}
          src={src}
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

export function LogoDetail({ src, alt }: LogoDetailProps) {
  const [isOpenLogo, setIsOpenLogo] = useAtom(isOpenLogoAtom);

  return (
    <Lightbox isOpen={isOpenLogo} setIsOpen={setIsOpenLogo}>
      <div className="mt-2">
        <Image
          isBase64={false}
          src={src}
          alt={alt}
          width={400}
          height={400}
          className="aspect-square"
          loading="lazy"
        />
      </div>
    </Lightbox>
  );
}
