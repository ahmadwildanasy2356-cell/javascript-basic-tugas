const nama = "Budi";

function tampilkanNama() {
  const umur = 17;

  console.log(nama);
  console.log(umur);
}

tampilkanNama();

console.log(nama);
console.log(umur);

//Berhasil: nama  karena bersifat Global Scope. umur  karena berada di Function Scope yang sama.
//Error (ReferenceError): Baris terakhir gagal karena variabel umur berada di dalam fungsi. Variabel tersebut bersifat lokal dan tidak bisa diakses dari luar fungsi.