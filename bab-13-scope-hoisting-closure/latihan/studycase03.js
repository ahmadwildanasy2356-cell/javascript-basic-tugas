function buatDompet(saldoAwal){
 let saldo = saldoAwal;

  return {
   cekSaldo : function(){
        console.log("Saldo :"+ saldo);
    },

  tambahSaldo : function(Jumlah){
        saldo += Jumlah,
        console.log("Saldo berhasil ditambahkan :" + saldo);
    },

  kurangiSaldo : function(Jumlah){
        if (Jumlah <= saldo){
            saldo -= Jumlah;
            console.log("Saldo  cukup :" + saldo);
        }else {
            console.log("Saldo tidak cukup");
        }
    } 
  }
}
const dompet = buatDompet(50000);

dompet.cekSaldo();
dompet.tambahSaldo(25000);
dompet.kurangiSaldo(10000);
dompet.cekSaldo();
console.log(dompet.saldo);
