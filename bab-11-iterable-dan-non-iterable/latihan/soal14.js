const daftarBelanja = [
  "Beras",
  "Minyak",
  "Gula",
  "Telur",
  "Sabun",
]


let nomor = 1

for(let barang of daftarBelanja){
    console.log(nomor + ". " + barang);
    nomor++
}