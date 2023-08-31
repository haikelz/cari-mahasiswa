import { Heading, Paragraph } from "../components/ui/typography";

export default function NotFoundPage() {
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <div className="text-center">
        <Heading as="h3">404 Not Found</Heading>
        <Paragraph>Halaman yang kamu cari tidak ditemukan!</Paragraph>
      </div>
    </div>
  );
}
