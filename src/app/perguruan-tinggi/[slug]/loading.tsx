export default function Loading() {
  return (
    <main className="flex justify-center flex-col items-center w-full">
      <section className="max-w-3xl w-full">
        <div className="flex items-start justify-center flex-col w-full">
          <div className="bg-neutral-200 animate-pulse dark:bg-neutral-800 w-full md:w-96 h-8 rounded-md"></div>
          <div className="flex justify-center mt-12 items-center w-full">
            <div className="md:w-[500px] w-full rounded-md animate-pulse bg-neutral-200 dark:bg-neutral-800 h-14"></div>
          </div>
          <div className="w-full flex justify-center items-center mt-8">
            <div className="w-96 h-96 bg-neutral-200 dark:bg-neutral-800 rounded-md animate-pulse"></div>
          </div>
          <div className="h-10 mt-8 w-44 bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded-md"></div>
          <div className="w-[400px] h-[400px] mt-4 bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded-md"></div>
        </div>
      </section>
    </main>
  );
}
