import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export const tw = (...classes: any[]) => twMerge(cx(...classes));
