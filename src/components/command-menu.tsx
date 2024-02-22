"use client";

import { X } from "lucide-react";
import { useState } from "react";

import { Paragraph } from "./ui/typography";

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {isOpen ? (
        <div className="flex justify-center items-center fixed min-h-screen w-full z-10">
          <div>
            <Paragraph>Mantap dan luar biasa</Paragraph>
          </div>
          <button
            type="button"
            aria-label="open close"
            onClick={() => setIsOpen(!isOpen)}
          >
            <X />
          </button>
        </div>
      ) : null}
    </>
  );
}
