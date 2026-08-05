function cekKelulusan(nilai) {
  if (nilai < 75) {
    return "Tidak Lulus";
    console.log("Ini tidak akan muncul.");
  }
  return "Lulus";
}

console.log(cekKelulusan(80)); 
console.log(cekKelulusan(60)); 