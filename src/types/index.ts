import { ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type BaseDataProps = {
  text: string;
  "website-link": string;
};

export type DataProps = {
  total: number;
  mahasiswa: BaseDataProps[];
};
