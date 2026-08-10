const hargaBarang = "125000.50";
const jumlah = "3";

const hargaNumber = parseFloat(hargaBarang);
const jumlahNumber = Number(jumlah);
const subtotal = hargaNumber * jumlahNumber;

const subtotalFormat = subtotal.toFixed(2);

console.log("Harga    :" + hargaNumber.toFixed(2));
console.log("Jumlah   :" + jumlahNumber);
console.log("Subtotal :" + subtotalFormat);