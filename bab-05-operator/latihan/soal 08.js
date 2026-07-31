// Soal 8 — Logical Operator
let sudahLogin = true;
let sudahVerifikasi = false;
let premium = true;

// Ketentuan logika
let bolehMasuk = sudahLogin && sudahVerifikasi;
let dapatFiturPremium = premium || sudahVerifikasi;

// Menampilkan hasil
console.log("bolehMasuk        :", bolehMasuk);
console.log("dapatFiturPremium :", dapatFiturPremium);