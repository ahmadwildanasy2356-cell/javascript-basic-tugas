const namaBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const tanggal = new Date("2026-08-17");
const bulan = tanggal.getMonth();
const bulanTerpilih = namaBulan[bulan]
console.log("Bulan :", bulanTerpilih);
