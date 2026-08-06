const biodata = {
    Nama      :"Ahmad Wildan Asy Syifa",
    Umur      :19,
    Pekerjaan :"Mahasiswa",  
    Kota      :"Ngawi",

    tampilkanStatus:function(){
        console.log("=======Biodata=======");
        console.log("Nama       :", this.Nama);
        console.log("Umur       :", this.Umur);
        console.log("Pekerjaan  :", this.Pekerjaan);
        console.log("Kota       :", this.Kota);
        console.log("=====================")
    }
}

biodata.tampilkanStatus();