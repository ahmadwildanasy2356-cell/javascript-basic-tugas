const sekarang = new Date("2026-08-13");
const deadline = new Date("2026-08-20");

const miliSekarang = sekarang.getTime();
const miliDeadline = deadline.getTime();
const selisih = miliDeadline-miliSekarang;
const satuHari = 24 * 60 * 60 * 1000;
const sisaHari = selisih/satuHari;
console.log("Deadline 20 Agustus");

if(satuHari < 0){
    console.log("Sisa waktu" + sisaHari + "hari lagi")
}else{
    console.log("Deadline sudah lewat")
}