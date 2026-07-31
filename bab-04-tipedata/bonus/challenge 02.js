let hargaTiket = 50000;
let jumlahTiket = 2;
let usia = 18;
let punyaKartuMember = true;

let totalHarga = hargaTiket * jumlahTiket;
totalHarga -= 10000;

let cukupUsia = usia >= 17;
let totalMurah = totalHarga < 100000;

let bisaBeli = cukupUsia && punyaKartuMember;
let dapatHadiah = totalMurah || punyaKartuMember;

console.log("Total Harga  :", totalHarga);
console.log("Bisa Beli    :", bisaBeli);
console.log("Dapat Hadiah :", dapatHadiah);