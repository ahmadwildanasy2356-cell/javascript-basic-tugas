const biodata = {
  nama: "Andi",
  umur: 20,
  pekerjaan: "Programmer",
  kota: "Yogyakarta",
};

console.log("======Biodata Diri======");
for(let data in biodata){
    console.log(data , ":", biodata[data]);
}
console.log("=========================");