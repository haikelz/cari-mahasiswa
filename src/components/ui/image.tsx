import NextImage, { ImageProps } from "next/image";
import { tw } from "~lib/helpers";

type NextImageProps = ImageProps & {
  isBase64: boolean;
};

export default function Image(
  { className, src, alt, width, height, isBase64, ...props }: NextImageProps
) {
  return (
    <NextImage
      src={isBase64 ? `data:image/png;base64,${src}` : src}
      alt={alt}
      className={tw(className)}
      width={300}
      height={300}
      {...props}
    />
  );
}
