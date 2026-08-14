const timFrontend = [
  "Budi",
  "Andi",
  "Citra",
];

const timBackend = [
  "Doni",
  "Eko",
];

const seluruhTim = [...timFrontend, ...timBackend, "Fajar"];

function tampilkanTim(namaAnggota, ...Bagian) {
  console.log("=============================");
  console.log("      " + namaAnggota             );
  console.log("=============================\n");

  for (let i = 0; i < Bagian.length; i++) {
    const [nama] = [Bagian[i]];
    const nomor = i + 1;
    console.log(nomor + ". " + nama);
  }
}

tampilkanTim("DEVELOPER TEAM", ...seluruhTim);