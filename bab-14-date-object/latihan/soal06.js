const tanggal = new Date("2026-08-17");
const hari =  String(tanggal.getDate()).padStart(2, "0");
const bulan = String(tanggal.getMonth() + 1).padStart(2, "0"); 
const tahun = tanggal.getFullYear();
const hasilFormat = hari + "/" + bulan + "/" + tahun; 

console.log(hasilFormat);
