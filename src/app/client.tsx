"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import ErrorClient from "~components/error-client";
import LoadingClient from "~components/loading-client";
import { Paragraph } from "~components/ui/typography";
import { tw } from "~lib/helpers";
import { schema } from "~lib/utils/schema";
import { MahasiswaProps } from "~types";
import { trpc } from "./_trpc/client";

export default function Client() {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { value: "" },
    resolver: zodResolver(schema),
  });

  const { data, isLoading, isError, refetch } = trpc.getData.useQuery(
    { value: getValues("value") },
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  const mahasiswa = data as MahasiswaProps;

  function onSubmit() {
    refetch();
  }

  if (isLoading) return <LoadingClient />;
  if (isError) return <ErrorClient />;

  const studentsData = mahasiswa.mahasiswa.map((item) =>
    item.text.replace(/PT :|Prodi: /gi, "").split(", ")
  );

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-start items-center">
          <MagnifyingGlassIcon
            className="absolute ml-3"
            width={20}
            height={20}
          />
          <input
            {...register("value")}
            className={tw(
              "flex relative h-9 w-full rounded-md border border-input",
              "bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium",
              "focus-visible:ring-1 focus-visible:ring-ring",
              "placeholder:text-muted-foreground focus-visible:outline-none pl-10",
              "disabled:cursor-not-allowed disabled:opacity-50"
            )}
            type="search"
            placeholder="Cari berdasarkan nama, NIM, jurusan, atau perguruan tinggi...."
            name="value"
            required
          />
        </div>
        {errors.value?.message ? (
          <Paragraph className="mt-2">{errors.value.message}</Paragraph>
        ) : null}
      </form>
      <div className="space-y-5 mt-5">
        {mahasiswa.mahasiswa.length ? (
          studentsData.map((item, index) => (
            <div className="group" key={index + 1}>
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
                  Nama: {item[0]}
                </Paragraph>
                <Paragraph className="font-medium group-hover:cursor-auto w-fit">
                  Perguruan Tinggi: {item[1]}
                </Paragraph>
                <Paragraph className="font-medium group-hover:cursor-auto w-fit">
                  Prodi: {item[2]}
                </Paragraph>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center font-semibold">
            Data Mahasiswa tidak ditemukan!
          </p>
        )}
      </div>
    </div>
  );
}
