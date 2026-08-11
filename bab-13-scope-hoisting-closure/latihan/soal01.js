
const nama = "Budi";

function belajar() {
  const bahasa = "JavaScript";

  if (true) {
    let level = "Pemula";
    console.log(level);
  }
}

// nama : global scope karena dideklarasikan  diluar semua fungsi
// belajar : scope local karena dideklarasikan di dalam fungsi (fungsi belajar)
// level : block scope karena dideklarasikan menggunakan let