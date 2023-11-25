import { tw } from "~lib/helpers";

export default function LoadingClient() {
  return (
    <div className="flex flex-col text-center justify-center items-center w-full">
      <div
        className={tw(
          "dark:bg-neutral-800",
          "bg-neutral-200",
          "rounded-md w-full h-10"
        )}
      ></div>
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
    </div>
  );
}
