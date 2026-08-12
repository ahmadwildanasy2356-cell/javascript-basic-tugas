const namaProduk = "   keyboard mechanical   ";
const hargaProduk = "750000.50";
const kodeProduk = "PROD-2026-001";


const namaBersih = namaProduk.trim();
const namaFormat = namaBersih
  .split(" ")
  .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1).toLowerCase())
  .join(" ");

const hargaNumber = parseFloat(hargaProduk);


console.log("===== DATA PRODUK =====");
console.log("");
console.log("Nama  : " + namaFormat);
console.log("Harga : Rp" + hargaNumber.toFixed(2));
console.log("Kode  : " + kodeProduk);
console.log("");
console.log("=======================");




//1.untuk membuang spasi
//2.replace : mengganti kata pertama yang ditemukan replaceAll : mengganti semua kata
//3.parselnt : mengambil angka bulat parseFloat : mempertahakan angka desimal
//4.saat validasi angka murni tanpa huruf
//5. agar angka nol dibelakang koma tidak hilang 
//6.biar tidak error karena perbedaan ukuran huruf
//7..trim() dan .toLowerCase() alasannya : merapikan user


