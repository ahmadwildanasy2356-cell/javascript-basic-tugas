const kelas = {
  nama: "JavaScript Dasar",
  mentor: "Pak Amad",
  jumlahSiswa: 20,
}

console.log("=== Data Kelas Awal ===")
for(let data in kelas){
    console.log(data + " : " + kelas[data])
}


kelas.ruangan = "Lab Komputer"

console.log("\n=== Data Kelas Terbaru ===")
for(let data in kelas){
    console.log(data + " : " + kelas[data])
}