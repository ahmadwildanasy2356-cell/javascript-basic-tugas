const namaHari = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];
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

const namaEvent = "JavaScript Bootcamp";
const tanggalEvent = new Date("2026-09-05");

const hari = tanggalEvent.getDay();
const hariTerpilih = namaHari[hari]
const tanggal = tanggalEvent.getDate();
const bulan = tanggalEvent.getMonth();
const bulanTerpilih = namaBulan[bulan]
const tahun = tanggalEvent.getFullYear();

console.log("=========================")
console.log("     INFORMASI EVENT     ")
console.log("=========================")
console.log("Nama Event :", namaEvent);
console.log("Hari       :", hariTerpilih );
console.log("Tanggal    : " + tanggal + " " + bulanTerpilih + " " + tahun);
console.log("\n========================")