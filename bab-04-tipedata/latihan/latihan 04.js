// 1. Deklarasi data
let nama = "Ahmad Wildan Asy Syifa";
let umur = 19;
let sudahLulus = true;
let alamat = null;
let nomorTelepon;
const hobi = ["Membaca", "Menulis", "Berenang", "Olahraga", "Memasak"];
const profil = {
    nama: "Ahmad Wildan Asy Syifa",
    umur: 19,
    sekolah: "MA Al Irsyad Tengaran 7",
    jurusan: "Keagamaan",
    aktif: true
};

// 2. Cek tipe data menggunakan typeof
console.log(typeof nama);         // string
console.log(typeof umur);         // number
console.log(typeof sudahLulus);    // boolean
console.log(typeof alamat);       // object
console.log(typeof nomorTelepon); // undefined
console.log(typeof hobi);         // object
console.log(typeof profil);       // object