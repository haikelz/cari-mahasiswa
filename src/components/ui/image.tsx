"use client";

import { atom, useAtom } from "jotai";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import NextImage, { ImageProps } from "next/image";
import { useMemo } from "react";
import { tw } from "~lib/helpers";

type NextImageProps = ImageProps & {
  isBase64: boolean;
};

export default function Image(
  { className, src, alt, width, height, isBase64, ...props }: NextImageProps
) {
  const imgSrcAtom = useMemo(() => atom<string | StaticImport>(src), [src]);
  const [imgSrc, setImgSrc] = useAtom(imgSrcAtom);

  return (
    <NextImage
      src={isBase64 ? `data:image/png;base64,${imgSrc}` : imgSrc}
      alt={alt}
      onError={() =>
        setImgSrc(
          `https://placehold.co/300?text=Image+Not+Found&font=montserrat`
        )
      }
      className={tw(className)}
      width={width}
      height={height}
      {...props}
    />
  );
}
