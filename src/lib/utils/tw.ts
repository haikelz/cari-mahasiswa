import { cx } from "class-variance-authority";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge tailwind classes
 * @param {ClassValue[]} classes
 * @returns classes
 */
export const tw = (...classes: ClassValue[]) => twMerge(cx(...classes));
