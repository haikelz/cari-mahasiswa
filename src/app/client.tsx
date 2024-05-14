"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { keepPreviousData } from "@tanstack/react-query";
import { SearchIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useForm } from "react-hook-form";
import reactStringReplace from "react-string-replace";
import { P, match } from "ts-pattern";
import { Button } from "~components/ui/button";
import { Paragraph } from "~components/ui/typography";
import { tw } from "~lib/helpers";
import { schema } from "~lib/utils/schema";
import { trpc } from "~lib/utils/trpc/client";

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

  const { isRefetching, data, isError, isPending, refetch } = trpc.get.useQuery(
    { value: getValues("value") },
    {
      placeholderData: keepPreviousData,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  if (isPending) return <LoadingClient />;
  if (isError) return <ErrorClient />;

  const studentsData = data.mahasiswa;

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(() => refetch())}>
        <div className="flex w-full justify-center items-center">
          <div className="flex w-full justify-start relative items-center">
            <SearchIcon className="absolute ml-3" width={20} height={20} />
            <input
              {...register("value", { required: true })}
              className={tw(
                "flex h-9 w-full rounded-md rounded-r-none border border-input",
                "px-3 py-1 text-sm bg-background shadow-sm transition-colors",
                "file:border-0 file:bg-transparent file:text-sm file:font-medium",
                "placeholder:text-muted-foreground focus-visible:outline-none pl-10",
                "disabled:cursor-not-allowed disabled:opacity-50"
              )}
              type="search"
              placeholder="Cari berdasarkan nama, NIM, jurusan, atau perguruan tinggi...."
              name="value"
            />
          </div>
          <Button className="rounded-l-none" type="submit">
            Search
          </Button>
        </div>
        {match({ message: errors.value?.message })
          .with({ message: P.when((message) => message) }, () => (
            <Paragraph
              data-cy="error-message"
              className="mt-2 text-center md:text-left"
            >
              {errors.value?.message}
            </Paragraph>
          ))
          .otherwise(() => null)}
      </form>
      {isRefetching && getValues("value").length ? (
        <IsRefetching />
      ) : (
        <div className="mt-5 space-y-5">
          {match({ studentsData: studentsData })
            .with(
              { studentsData: P.when((studentsData) => studentsData.length) },
              () =>
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
                      className={tw(
                        "font-medium",
                        "group-hover:cursor-auto w-fit"
                      )}
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
                      className={tw(
                        "font-medium",
                        "group-hover:cursor-auto w-fit"
                      )}
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
            )
            .otherwise(() => (
              <Paragraph className="text-center font-semibold">
                Data Mahasiswa tidak ditemukan!
              </Paragraph>
            ))}
        </div>
      )}
    </div>
  );
}
