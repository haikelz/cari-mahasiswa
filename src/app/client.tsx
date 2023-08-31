"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import ErrorClient from "~components/error-client";
import LoadingClient from "~components/loading-client";
import { Paragraph } from "~components/ui/typography";
import { tw } from "~lib/helpers";
import { nameSchema } from "~lib/utils/schema";
import { MahasiswaProps } from "~types";
import { trpc } from "./_trpc/client";

export default function Client() {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { name: "" },
    resolver: zodResolver(nameSchema),
  });

  const { data, isLoading, isError, refetch } = trpc.getData.useQuery(
    {
      value: getValues("name"),
    },
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
            {...register("name")}
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
            name="name"
            required
          />
        </div>
        {errors.name?.message ? (
          <Paragraph className="mt-2">{errors.name.message}</Paragraph>
        ) : null}
      </form>
      <div className="space-y-5 mt-5">
        {mahasiswa.mahasiswa.length
          ? studentsData.map((item, index) => (
              <div
                className={tw(
                  "border border-neutral-300 dark:bg-neutral-900",
                  "bg-gray-50 dark:border-neutral-200",
                  "rounded-md w-full p-3"
                )}
                key={index + 1}
              >
                <p className="font-medium">Nama: {item[0]}</p>
                <p className="font-medium">Perguruan Tinggi: {item[1]}</p>
                <p className="font-medium">Prodi: {item[2]}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
