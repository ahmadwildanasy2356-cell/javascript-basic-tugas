function hitungNilaiAkhir (tugas, uts, uas){
  return (tugas + uts + uas) / 3 ;
}

const nilaiAkhir = hitungNilaiAkhir(80,90,75);
console.log("Nilai Akhir =", nilaiAkhir);

if(nilaiAkhir >=75){
    console.log("Status  =   Lulus")
}else{
    console.log("Status  =   Tidak Lulus")
}