export default function Loading() {
  return (
    <main className="flex justify-center flex-col items-center w-full">
      <section className="max-w-3xl w-full">
        <div className="flex items-start justify-center flex-col w-full">
          <div className="bg-neutral-200 animate-pulse dark:bg-neutral-800 w-96 h-8 rounded-md"></div>
          <div className="flex mt-12 justify-center items-center w-full">
            <div className="md:w-[500px] w-full rounded-md animate-pulse bg-neutral-200 dark:bg-neutral-800 h-14"></div>
          </div>
          <div className="bg-neutral-200 animate-pulse dark:bg-neutral-800 w-72 h-44 mt-8 mb-5 rounded-md"></div>
          <div className="bg-neutral-200 w-full h-96 animate-pulse dark:bg-neutral-800 rounded-md"></div>
          <div className="w-full h-[400px] mt-4 animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-md"></div>
        </div>
      </section>
    </main>
  );
}
