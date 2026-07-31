const hargaBuku = 45000;
const jumlahBeli = 4;
const diskon = 15000;

let subtotal = hargaBuku * jumlahBeli; // 45000 * 4
let totalBayar = subtotal - diskon;    // 180000 - 15000

console.log(subtotal);   // 180000
console.log(totalBayar); // 165000