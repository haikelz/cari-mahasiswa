type AkreditasiListProps = {
  akreditasi: string;
  tgl_akreditasi: string;
  tgl_berlaku: string;
};

export type DetailPerguruanTinggiProps = {
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
  lintang: number;
  bujur: number;
  id_sp: string;
  luas_tanah: number;
  laboratorium: number;
  ruang_kelas: number;
  perpustakaan: number;
  internet: boolean;
  listrik: boolean;
  nama_rektor: string;
  akreditasi_list: AkreditasiListProps[];
};

type RasioListProps = {
  semester: string;
  dosen: number;
  mahasiswa: number;
  dosenNidn: number;
  dosenNidk: number;
};

export type ProdiPerguruanTinggiProps = {
  id_sms: string;
  kode_prodi: string;
  nm_lemb: string;
  stat_prodi: string;
  jenjang: string;
  akreditas: string | null;
  rasio_list: RasioListProps[];
};
