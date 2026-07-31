// Variabel Input
const namaProduk = "Buku Tulis";
const hargaSatuan = 8000;
const jumlahDibeli = 5;
const tarifPajak = 0.11; // 11% (0.11 x 40000 = 4400)

// Perhitungan
const subtotal = hargaSatuan * jumlahDibeli;
const pajak = subtotal * tarifPajak;
const totalBayar = subtotal + pajak;

// Menampilkan Struk
console.log("========== STRUK ==========\n");
console.log("Produk   :", namaProduk);
console.log("Harga    :", hargaSatuan);
console.log("Jumlah   :", jumlahDibeli);
console.log("\nSubtotal :", subtotal);
console.log("Pajak    :", pajak);
console.log("Total    :", totalBayar);