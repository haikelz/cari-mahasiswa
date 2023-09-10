import { Paragraph } from "./ui/typography";

export default function LoadingClient() {
  return (
    <div
      id="loading-client"
      className="flex text-center justify-center items-center"
    >
      <Paragraph className="font-bold text-lg">Loading....</Paragraph>
    </div>
  );
}
