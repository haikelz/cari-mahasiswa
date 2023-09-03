"use client";

import { Heading, Paragraph } from "~components/ui/typography";

export default function ErrorPage() {
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <div className="text-center">
        <Heading as="h3">500 Server Error</Heading>
        <Paragraph>Sepertinya ada permasalahan pada server!</Paragraph>
      </div>
    </div>
  );
}
