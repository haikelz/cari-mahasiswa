import { ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type BaseDataProps = {
  nama: string;
  pt: string;
  prodi: string;
};

export type DataProps = {
  total: number;
  mahasiswa: BaseDataProps[];
};
