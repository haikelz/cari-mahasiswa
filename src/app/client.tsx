"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { keepPreviousData } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import reactStringReplace from "react-string-replace";
import { Paragraph } from "~components/ui/typography";
import { tw } from "~lib/helpers";
import { schema } from "~lib/utils/schema";
import { trpc } from "~lib/utils/trpc/client";
import ErrorClient from "./error-client";
import IsRefetching from "./is-refetching";
import LoadingClient from "./loading-client";

const Card = dynamic(() => import("~components/ui/card"));

export default function Client() {
  const router = useRouter();

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

  if (isPending) return <LoadingClient />;
  if (isFetching && getValues("value").length) return <IsRefetching />;
  if (isError) return <ErrorClient />;

  const studentsData = data.mahasiswa;

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
      <div className="mt-5 space-y-5">
        {data.mahasiswa.length ? (
          studentsData.map((item, index) => (
            <Card key={index + 1}>
              <Paragraph className="font-medium w-fit">
                Nama:{" "}
                <Link
                  href={`/mahasiswa/${item.hash}`}
                  className="font-bold cursor-pointer"
                >
                  {reactStringReplace(
                    item.nama,
                    getValues("value"),
                    (match, index) => (
                      <span
                        key={index + 1}
                        className="dark:bg-yellow-600 bg-yellow-300"
                      >
                        {match}
                      </span>
                    )
                  )}
                </Link>
              </Paragraph>
              <Paragraph
                className={tw("font-medium", "group-hover:cursor-auto w-fit")}
              >
                Perguruan Tinggi:
                {reactStringReplace(
                  item.pt,
                  getValues("value"),
                  (match, index) => (
                    <span
                      key={index + 1}
                      className="dark:bg-yellow-600 bg-yellow-300"
                    >
                      {match}
                    </span>
                  )
                )}
              </Paragraph>
              <Paragraph
                className={tw("font-medium", "group-hover:cursor-auto w-fit")}
              >
                Prodi:{" "}
                {reactStringReplace(
                  item.prodi,
                  getValues("value"),
                  (match, index) => (
                    <span
                      className="dark:bg-yellow-600 bg-yellow-300"
                      key={index + 1}
                    >
                      {match}
                    </span>
                  )
                )}
              </Paragraph>
            </Card>
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
