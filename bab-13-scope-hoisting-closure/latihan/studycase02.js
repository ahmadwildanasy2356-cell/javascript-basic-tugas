function buatRekening(saldoAwal) {
  let saldo = saldoAwal;

  return {
    cekSaldo: function() {
      console.log("Saldo saat ini: " + saldo);
    },
    setor: function(jumlah) {
      saldo = saldo + jumlah;
      console.log("Setoran berhasil. Saldo: " + saldo);
    },
    tarik: function(jumlah) {
      saldo = saldo - jumlah;
      console.log("Penarikan berhasil. Saldo: " + saldo);
    }
  };
}


const rekening = buatRekening(1000000);

rekening.cekSaldo();    // Saldo saat ini: 1000000
rekening.setor(500000);   // Setoran berhasil. Saldo: 1500000
rekening.tarik(200000);   // Penarikan berhasil. Saldo: 1300000
rekening.cekSaldo();    // Saldo saat ini: 1300000
