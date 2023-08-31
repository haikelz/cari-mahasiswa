import { ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type MahasiswaProps = {
  mahasiswa: {
    text: string;
    "website-link": string;
  }[];
};
