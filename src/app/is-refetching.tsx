import { tw } from "~lib/utils/tw";

export default function IsRefetching() {
  return (
    <div className="w-full mt-4 space-y-4">
      <div
        className={tw(
          "animate-pulse dark:bg-neutral-800",
          "bg-neutral-200",
          "rounded-md w-full h-24"
        )}
      ></div>
      <div
        className={tw(
          "animate-pulse dark:bg-neutral-800",
          "bg-neutral-200",
          "rounded-md w-full h-24"
        )}
      ></div>
      <div
        className={tw(
          "animate-pulse dark:bg-neutral-800",
          "bg-neutral-200",
          "rounded-md w-full h-24"
        )}
      ></div>
      <div
        className={tw(
          "animate-pulse dark:bg-neutral-800",
          "bg-neutral-200",
          "rounded-md w-full h-24"
        )}
      ></div>
      <div
        className={tw(
          "animate-pulse dark:bg-neutral-800",
          "bg-neutral-200",
          "rounded-md w-full h-24"
        )}
      ></div>
      <div
        className={tw(
          "animate-pulse dark:bg-neutral-800",
          "bg-neutral-200",
          "rounded-md w-full h-24"
        )}
      ></div>
    </div>
  );
}
