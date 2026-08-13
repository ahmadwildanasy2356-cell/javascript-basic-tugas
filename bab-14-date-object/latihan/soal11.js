const tahunLahir = 2008;
const waktuSekarang = new Date();
const tahunSekarang = waktuSekarang.getFullYear();
const umur = tahunSekarang-tahunLahir;

console.log("Umur :" + umur + " tahun");