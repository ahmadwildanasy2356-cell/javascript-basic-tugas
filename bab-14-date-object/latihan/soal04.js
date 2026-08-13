const namaHari = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

const tanggal = new Date("2026-08-17");
const hari = tanggal.getDay();
const hariTerpilih = namaHari[hari]
console.log("Hari :", hariTerpilih);