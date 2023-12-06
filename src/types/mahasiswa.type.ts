export type BaseMahasiswaProps = {
  nama: string;
  pt: string;
  prodi: string;
  hash: string;
};

export type MahasiswaProps = {
  mahasiswa: {
    text: string;
    "website-link": string;
  }[];
};
