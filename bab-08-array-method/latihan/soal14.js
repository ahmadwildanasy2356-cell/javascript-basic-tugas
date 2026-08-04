let antrian = [];


antrian.push("Budi");
antrian.push("Ani");
antrian.push("Citra");
antrian.push("Dedi");
console.log("Antrian awal:", antrian);
 


let dilayani = antrian.shift();
console.log("Sedang dilayani:", dilayani);
console.log("Sisa antrian:", antrian);




antrian.unshift("Eka");
for (let i = 0; i < antrian.length; i++) {
  console.log(i + 1 + ".", antrian[i]);
}
