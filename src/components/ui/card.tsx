import { HTMLAttributes } from "react";
import { tw } from "~lib/helpers";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div data-cy="card" className="group">
      <div
        className={tw(
          "border border-neutral-300",
          "dark:bg-neutral-900 group-hover:bg-gray-100",
          "group-hover:dark:bg-neutral-800",
          "bg-gray-50 dark:border-neutral-200",
          "rounded-md w-full p-3",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
