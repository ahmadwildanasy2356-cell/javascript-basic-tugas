const produk = {
  nama: "Kopi Hitam",
  harga: 15000,
  stok: 20,

  tambahStok(jumlah){
    this.stok += jumlah;
  },

  kurangStok(jumlah){
    this.stok -= jumlah;
  },

  tampilkanInfo(){
    console.log("Nama   :", this.nama);
    console.log("Harga  :", this.harga);
    console.log("Stok   :", this.stok);
    console.log("====");
    
  }

};

produk.tampilkanInfo();
produk.tambahStok(10);
produk.kurangStok(3);
produk.tampilkanInfo();