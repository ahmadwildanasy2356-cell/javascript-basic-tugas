const pengguna = {
  nama : "Budi Santoso",
  email: "budi@email.com",
  umur : 20,
  kota : "Jakarta",
};
const profilpengguna = {
    ...pengguna,
    kota   :"Bandung",
    status :"Aktif",
};
const { nama, email} = pengguna;
const {status} = profilpengguna;
console.log("Nama   :", nama);
console.log("Email  :", email);
console.log("Status :", status);