import { tw } from "~lib/utils/tw";
import { CardProps } from "~types";

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div data-cy="card" className="group">
      <div
        className={tw(
          "border border-neutral-300",
          "dark:bg-neutral-900 group-hover:bg-neutral-100",
          "group-hover:dark:bg-neutral-800",
          "bg-neutral-50 dark:border-neutral-200",
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
