"use client";

/**
 * A custom hook to detect user's scroll
 * @returns {number} scroll value
 */
import { useAtom } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback, useEffect } from "react";
import { scrollAtom } from "~store";

export function useScroll(): number {
  const [scroll, setScroll] = useAtom(scrollAtom);

  const handleScroll = useAtomCallback(
    useCallback(() => {
      setScroll(() => window.pageYOffset);
    }, [setScroll])
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scroll;
}
