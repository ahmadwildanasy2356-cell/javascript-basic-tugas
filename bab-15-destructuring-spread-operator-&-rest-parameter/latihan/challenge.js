function prosesNilai(...nilai){
    const tertinggi = Math.max(...nilai);
    const terendah = Math.min(...nilai);

    let total = 0;
    for (let i =0; i < nilai.length; ++i){
        total += nilai[i];
    }
    return {
        tertinggi,
        terendah,
        total,
    };

}
const nilai = [80, 90, 75, 95, 85];
const hasil = prosesNilai(...nilai);
const {tertinggi,terendah,total} = hasil;
console.log("Nilai Tertinggi :", tertinggi);
console.log("Nilai Terendah  :", terendah);
console.log("Total Nilai     :", total);

