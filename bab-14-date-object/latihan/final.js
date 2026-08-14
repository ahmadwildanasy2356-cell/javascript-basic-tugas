// 1. Data Tugas
const tugas = [
  {
    nama: "Membuat Website Portfolio",
    deadline: "2026-08-20",
  },
  {
    nama: "Mengerjakan Latihan JavaScript",
    deadline: "2026-08-15",
  },
  {
    nama: "Presentasi Project",
    deadline: "2026-09-01",
  },
];

const sekarang = new Date();
sekarang.setHours(0, 0, 0, 0); 

console.log("===== DAFTAR TUGAS =====");

for (let i = 0; i < tugas.length; i++) {
  const item = tugas[i];
  
  const tanggalDeadline = new Date(item.deadline);
  tanggalDeadline.setHours(0, 0, 0, 0);

  const opsiFormat = { day: 'numeric', month: 'long', year: 'numeric' };
  const deadlineFormat = tanggalDeadline.toLocaleDateString('id-ID', opsiFormat);

  const selisihWaktu = tanggalDeadline.getTime() - sekarang.getTime();
  
  const selisihHari = Math.ceil(selisihWaktu / (1000 * 60 * 60 * 24));

  let status = "";
  if (selisihHari < 0) {
    status = "Deadline sudah terlewat.";
  } else {
    status = selisihHari + " hari lagi";
  }
  const nomor = i + 1;
  console.log(nomor + ". " + item.nama);
  console.log("   Deadline: " + deadlineFormat);
  console.log("   Status  : " + status);
}