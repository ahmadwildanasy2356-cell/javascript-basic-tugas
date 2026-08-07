const siswa = {
  nama: "Budi",
  umur: 17,
  kelas: "XI RPL",
};

for(let data in siswa){
    console.log(data, ":", siswa[data]);
}