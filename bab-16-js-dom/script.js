const santri = { 
    nama: "Budi Santoso", 
    kelas: "XI RPL", 
    status: "Aktif" 
};

const aktivitas = [
    "Login ke aplikasi", 
    "Membaca materi JavaScript", 
    "Mengerjakan latihan", 
    "Mengumpulkan tugas"
];

document.getElementById("santri-nama").innerText = santri.nama;
document.getElementById("santri-kelas").innerText = santri.kelas;
document.getElementById("santri-status").innerText = santri.status;

const listContainer = document.getElementById("daftar-aktivitas");

function tampilkanAktivitas() {
    listContainer.innerHTML = ""; 

    for (let i = 0; i < aktivitas.length; i++) {
        const barisBaru = document.createElement("li");
      barisBaru.innerText = "@ " + aktivitas[i];

        const tombolHapus = document.createElement("button");
        tombolHapus.innerText = "Hapus";
        tombolHapus.className = "btn-hapus";
        
        tombolHapus.onclick = function() {
            aktivitas.splice(i, 1);
            tampilkanAktivitas();
        };

        barisBaru.appendChild(tombolHapus);
        listContainer.appendChild(barisBaru);
    }
}

tampilkanAktivitas();
