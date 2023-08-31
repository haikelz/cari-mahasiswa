import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const tw = (...classes: ClassValue[]) => twMerge(clsx(...classes));
