"use client";

import { atom, useAtom } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback, useEffect } from "react";

const scrollAtom = atom<number>(0);

export function useScroll() {
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
