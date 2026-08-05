function hitungsubTotal( harga, jumlah){
    return harga * jumlah;
}

function hitungPPN(subtotal){
    return subtotal * 0.11;
}
 function hitungTotal(subtotal,ppn){
    return subtotal + ppn
 }

 const harga = 25000;
 const jumlah = 4;

 const subtotal = hitungsubTotal(harga,jumlah);
 const ppn      = hitungPPN(subtotal);
 const total    = hitungTotal(subtotal,ppn);


 
 console.log("Subtotal  =", subtotal);
 console.log("PPN (11%) =", ppn);
 console.log("Total     =", total);