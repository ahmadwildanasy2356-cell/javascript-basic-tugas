const nilai = [80, 95, 60, 75, 100];
let jumlah= 0;

for (let i = 0; i < nilai.length; i++) {
  const angka = nilai[i];

  jumlah += angka

}

const rataRata=jumlah / nilai.length;

console.log("---");
console.log("Total data    :", nilai.length);
console.log("ratarata      :", rataRata.toFixed(2))