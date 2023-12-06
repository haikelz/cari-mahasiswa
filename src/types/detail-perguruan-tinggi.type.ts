export interface DetailPerguruanTinggiProps {
  data: PerguruanTinggiProps;
  prodi: ProdiProps[];
}

export type PerguruanTinggiProps = {
  npsn: string;
  stat_sp: string;
  nm_lemb: string;
  tgl_berdiri: string;
  sk_pendirian_sp: string;
  tgl_sk_pendirian_sp: string;
  jln: string;
  nama_wil: string;
  kode_pos: string;
  no_tel: string;
  no_fax: string;
  email: string;
  website: string;
  akreditas: string;
  lintang: number;
  bujur: number;
  id_sp: string;
  logo: string;
  rasio: RasioProps[];
};

export type RasioProps = {
  smt: string;
  jmldosen: string;
  jmlmhs: string;
  kode_program_studi: string;
};

export type ProdiProps = {
  id_sms: string;
  kode_prodi: string;
  nm_lemb: string;
  stat_prodi: string;
  jenjang: string;
  akreditas?: string;
  rasio: Omit<RasioProps, "kode_program_studi">;
};
