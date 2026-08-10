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


console.log("\n--- HASIL VALIDASI ---");

if (namaBersih === "") {
    console.log("Validasi Gagal: Nama produk tidak boleh kosong.");
} else {
    console.log("Nama produk valid.");
}


if (isNaN(hargaNumber)) {
    console.log("Validasi Gagal: Harga harus berupa angka yang valid.");
} else {
    console.log("Harga produk valid.");
}

const diawaliProd = kodeProduk.startsWith("PROD");
const diakhiri001 = kodeProduk.endsWith("001");

if (diawaliProd && diakhiri001) {
    console.log("Kode produk valid.");
} else {
    console.log("Validasi Gagal: Format kode produk salah.");
}

//1.untuk membuang spasi
//2.replace : mengganti kata pertama yang ditemukan replaceAll : mengganti semua kata
//3.parselnt : mengambil angka bulat parseFloat : mempertahakan angka desimal
//4.saat validasi angka murni tanpa huruf
//5. agar angka nol dibelakang koma tidak hilang 
//6.biar tidak error karena perbedaan ukuran huruf
//7..trim() dan .toLowerCase() alasannya : merapikan user


