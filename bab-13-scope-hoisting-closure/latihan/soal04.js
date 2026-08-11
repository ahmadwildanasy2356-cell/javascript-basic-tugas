const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";

    console.log(nama);
  }

  dalam();
  console.log(nama);
}

luar();
console.log(nama);

// Dalam: Mengambil variabel lokal dari fungsi dalam().
// Luar : fungsi dalam sudah selesai dan ,sehingga mengambil variabel fungsi luar ().
// Global : berada di luar semua fungsi ,sehingga bias mengambil dari global scope.