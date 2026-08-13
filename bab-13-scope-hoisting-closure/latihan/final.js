function buatAkun(nama, saldoAwal) {
  let namaUser = nama;
  let saldo = saldoAwal;

  return {
    lihatProfil: function() {
      console.log("===== PROFIL =====");
      console.log("Nama: " + namaUser);
      console.log("Saldo: Rp" + saldo);
    },
    
    cekSaldo: function() {
      console.log("Saldo: Rp" + saldo);
    },
    
    tambahSaldo: function(jumlah) {
      saldo += jumlah;
      console.log("Saldo berhasil ditambahkan.");
      console.log("Saldo sekarang: Rp" + saldo);
    },
    
    kurangiSaldo: function(jumlah) {
      if (jumlah > saldo) {
        console.log("Saldo tidak mencukupi.");
      } else {
        saldo -= jumlah;
        console.log("Saldo berhasil dikurangi.");
        console.log("Saldo sekarang: Rp" + saldo);
      }
    }
  };
}


const akunBudi = buatAkun("Budi", 100000);
akunBudi.lihatProfil();
akunBudi.cekSaldo();
akunBudi.tambahSaldo(50000);
akunBudi.kurangiSaldo(25000);
akunBudi.cekSaldo();

console.log("\n-------------------------\n");


const akunAni = buatAkun("Ani", 500000);
akunAni.lihatProfil();

akunAni.kurangiSaldo(600000); 

console.log("\nCek ulang saldo Budi:");
akunBudi.cekSaldo();
