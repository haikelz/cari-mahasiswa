import { cx } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/dist/types";
import { twMerge } from "tailwind-merge";

export const tw = (...classes: ClassValue[]) => twMerge(cx(...classes));
