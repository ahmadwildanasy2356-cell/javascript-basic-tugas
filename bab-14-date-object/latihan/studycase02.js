const tanggalTransaksi = new Date("2026-08-13");
const jatuhTempo = new Date(tanggalTransaksi);

jatuhTempo.setDate(tanggalTransaksi.getDate() + 7);

const pilihan = {
   year : "numeric",
   month : "long",
   day : "numeric",
};
 const teksTransaksi = tanggalTransaksi.toLocaleDateString("id-ID", pilihan);
 const teksJatuhtempo = jatuhTempo.toLocaleDateString("id-ID", pilihan);

 console.log("Tanggal transaksi : " + teksTransaksi);
 console.log("Jatuh tempo       : " +  teksJatuhtempo);