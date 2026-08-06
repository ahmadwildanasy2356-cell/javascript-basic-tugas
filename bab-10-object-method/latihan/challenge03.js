let rekening = {
  pemilik: "Budi",
  saldo: 1000000,

  setor: function(jumlah) {
    this.saldo = this.saldo + jumlah;
    console.log("Setor Rp" + jumlah);
    this.cekSaldo();
  },

  tarik: function(jumlah) {
    if (this.saldo < jumlah) {
      console.log("Saldo tidak mencukupi.");
    } else {
      this.saldo = this.saldo - jumlah;
      console.log("Tarik Rp" + jumlah);
      this.cekSaldo();
    }
  },

  cekSaldo: function() {
    console.log("Saldo : Rp" + this.saldo + "\n");
  }
};


rekening.cekSaldo();
rekening.setor(500000);
rekening.tarik(200000);