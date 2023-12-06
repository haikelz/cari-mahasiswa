export type DetailMahasiswaProps = {
  datastatuskuliah: DataStatusKuliahProps[];
  datastudi: DataStudiProps[];
  dataumum: DataUmumProps;
};

export type DataStatusKuliahProps = {
  id_smt: string;
  sks_smt: number;
  nm_stat_mhs: string;
};

export type DataStudiProps = {
  kode_mk: string;
  nm_mk: string;
  sks_mk: number;
  id_smt: string;
  nilai_huruf: string;
};

export type DataUmumProps = {
  nm_pd: string;
  jk: "L" | "P";
  nipd: string;
  namapt: string;
  namajenjang: string;
  namaprodi: string;
  reg_pd: string;
  mulai_smt: string;
  nm_jns_daftar: string;
  nm_pt_asal: string;
  nm_prodi_asal: string;
  ket_keluar: string;
  tgl_keluar: string;
  no_seri_ijazah: string;
  sert_prof: string;
  link_pt: string;
  link_prodi: string;
};
