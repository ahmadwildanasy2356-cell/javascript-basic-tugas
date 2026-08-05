function hitungBMI(berat, tinggi) {
  return berat / (tinggi * tinggi);
}

let berat = 65;
let tinggi = 1.7;

let hasilBMI = hitungBMI(berat, tinggi);

console.log("Hasil BMI  :", hasilBMI.toFixed(2));
