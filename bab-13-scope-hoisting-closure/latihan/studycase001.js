function buatKeranjang() {
    let dataProduk = []; // Data private

    return {
        tambah: function(nama, harga) {
            dataProduk.push({ nama: nama, harga: harga });
        },
        hapus: function(nama) {
            dataProduk = dataProduk.filter(p => p.nama.toLowerCase() !== nama.toLowerCase());
        },
        lihatKeranjang: function() {
            console.log(dataProduk);
        },
        hitungTotal: function() {
            return dataProduk.reduce((total, p) => total + p.harga, 0);
        },
        jumlahItem: function() {
            return dataProduk.length;
        }
    };
}



const keranjang = buatKeranjang();

keranjang.tambah("Keyboard", 250000);
keranjang.tambah("Mouse", 150000);

keranjang.hapus("Mouse"); 

keranjang.lihatKeranjang(); 
console.log("Jumlah:", keranjang.jumlahItem()); 
console.log("Total: Rp" + keranjang.hitungTotal()); 


console.log(keranjang.dataProduk); 
