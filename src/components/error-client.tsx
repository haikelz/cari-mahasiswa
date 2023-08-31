import { Heading, Paragraph } from "./ui/typography";

export default function ErrorClient() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="text-center">
        <Heading as="h3">Error!</Heading>
        <Paragraph>Terdapat masalah saat fetch data!</Paragraph>
      </div>
    </div>
  );
}
