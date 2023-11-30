import { Paragraph } from "~components/ui/typography";

export default function IsRefetching() {
  return (
    <div className="flex text-center justify-center items-center">
      <Paragraph className="font-bold text-lg">
        Sedang mencari data mahasiswa....
      </Paragraph>
    </div>
  );
}
