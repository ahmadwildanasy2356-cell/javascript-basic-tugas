function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    console.log(hitungan);
  };
}

const penghitung = buatPenghitung();

penghitung();
penghitung();
penghitung();
// outputnya : 1 2 3
// variabel hitungan dibuat didalam fungsi buatPenghitung
// masih bisa digunakan karena ada konsep closure
// di fungsi anonim (yang kosong)