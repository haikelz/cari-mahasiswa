"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { keepPreviousData } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { Paragraph } from "~components/ui/typography";
import { tw } from "~lib/helpers";
import { schema } from "~lib/utils/schema";
import { trpc } from "~lib/utils/trpc/client";
import type { DataProps } from "~types";
import ErrorClient from "./error-client";
import IsRefetching from "./is-refetching";
import LoadingClient from "./loading-client";

const Card = dynamic(() => import("~components/ui/card"));

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

  const { data, isPending, isError, refetch, isFetching } = trpc.get.useQuery(
    { value: getValues("value") },
    {
      placeholderData: keepPreviousData,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    }
  );

  const mahasiswa = data as DataProps;

  if (isPending) return <LoadingClient />;
  if (isFetching && getValues("value").length) return <IsRefetching />;
  if (isError) return <ErrorClient />;

  const studentsData = mahasiswa.mahasiswa;

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(() => refetch())}>
        <div className="flex justify-start relative items-center">
          <MagnifyingGlassIcon
            className="absolute ml-3"
            width={20}
            height={20}
          />
          <input
            {...register("value", { required: true })}
            className={tw(
              "flex h-9 w-full rounded-md border border-input",
              "px-3 py-1 text-sm bg-background shadow-sm transition-colors",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium",
              "placeholder:text-muted-foreground focus-visible:outline-none pl-10",
              "focus-visible:ring-1 focus-visible:ring-ring",
              "disabled:cursor-not-allowed disabled:opacity-50"
            )}
            type="search"
            placeholder="Cari berdasarkan nama, NIM, jurusan, atau perguruan tinggi...."
            name="value"
            required
          />
        </div>
        {errors.value?.message ? (
          <Paragraph
            data-cy="error-message"
            className="mt-2 text-center md:text-left"
          >
            {errors.value.message}
          </Paragraph>
        ) : null}
      </form>
      <div className="space-y-5 mt-5">
        {mahasiswa.mahasiswa.length ? (
          studentsData.map((item, index) => (
            <Card key={index + 1} item={item} value={getValues("value")} />
          ))
        ) : (
          <Paragraph className="text-center font-semibold">
            Data Mahasiswa tidak ditemukan!
          </Paragraph>
        )}
      </div>
    </div>
  );
}
