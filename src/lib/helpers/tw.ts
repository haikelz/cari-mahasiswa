import { cx } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/dist/types";
import { twMerge } from "tailwind-merge";

/**
 * A helper function to merge tailwind classes
 * @param {ClassValue[]} classes
 * @returns classes
 */
export const tw = (...classes: ClassValue[]) => twMerge(cx(...classes));
