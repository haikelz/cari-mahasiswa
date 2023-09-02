import reactStringReplace from "react-string-replace";
import { tw } from "~lib/helpers";
import { Paragraph } from "./typography";

type CardProps = {
  item: string[];
  value: string;
};

export function Card({ item, value }: CardProps) {
  return (
    <div className="group">
      <div
        className={tw(
          "border border-neutral-300",
          "group-hover:cursor-pointer dark:bg-neutral-900 group-hover:bg-gray-100",
          "group-hover:dark:bg-neutral-800",
          "bg-gray-50 dark:border-neutral-200",
          "rounded-md w-full p-3"
        )}
      >
        <Paragraph className="font-medium group-hover:cursor-auto w-fit">
          Nama:{" "}
          {reactStringReplace(item[0], value, (match, index) => (
            <span key={index + 1} className="dark:bg-yellow-600 bg-yellow-300">
              {match}
            </span>
          ))}
        </Paragraph>
        <Paragraph
          className={tw("font-medium", "group-hover:cursor-auto w-fit")}
        >
          Perguruan Tinggi: {item[1]}
        </Paragraph>
        <Paragraph
          className={tw("font-medium", "group-hover:cursor-auto w-fit")}
        >
          Prodi: {item[2]}
        </Paragraph>
      </div>
    </div>
  );
}
