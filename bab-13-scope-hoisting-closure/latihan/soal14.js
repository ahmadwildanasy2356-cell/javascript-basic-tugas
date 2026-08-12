function buatCounter() {
  let hitungan = 0;

  return function () {
    hitungan++;
    console.log("Jumlah klik: " + hitungan);
  };
}   
const counter = buatCounter();

counter();
counter();
counter();
counter();

