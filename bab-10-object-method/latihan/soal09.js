const akunBank = {
  pemilik : "Ahmad Wildan Asy Syifa",
  saldo   : 100000,

  setor: function(jumlah){
      this.saldo = this.saldo + jumlah;
      console.log("Saldo sekarang :", + this.saldo)
  }
};

console.log("Saldo awal : " + akunBank.saldo);
akunBank.setor(50000)