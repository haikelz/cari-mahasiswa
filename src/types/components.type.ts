import { SetStateAction } from "jotai";
import { ImageProps } from "next/image";
import { Dispatch, HTMLAttributes } from "react";
import { ChildrenProps } from "~types";

export type LightboxProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
} & ChildrenProps;

export type LogoDetailProps = {
  src: string;
  alt: string;
};

export type MapProps<T> = {
  lat: T;
  long: T;
};

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as: "h1" | "h2" | "h3" | "h4";
};

export type ParagraphProps = ChildrenProps &
  HTMLAttributes<HTMLParagraphElement>;

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export type NextImageProps = ImageProps & {
  isBase64: boolean;
};
