import NextImage, { ImageProps } from "next/image";
import { tw } from "~lib/helpers";

type NextImageProps = ImageProps & {
  isBase64: boolean;
};

/**
 * From the API itself, the image for University logo only available in base64 format.
 * So i added a case to check if the image source is base64 or null.
 */
export default function Image(
  { className, src, alt, width, height, isBase64, ...props }: NextImageProps
) {
  return (
    <>
      <NextImage
        src={isBase64 ? `data:image/png;base64,${src}` : src}
        alt={alt}
        className={tw(className)}
        width={300}
        height={300}
        {...props}
      />
    </>
  );
}
