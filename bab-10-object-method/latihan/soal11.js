const game = {
  pemain: "Bima",
  nyawa: 100,
  
  terkenaSerangan: function (damage) {
    this.nyawa -= damage;
    console.log(" Nyawa sekarang:", this.nyawa);
  }
};

console.log("Nyawa awal :" ,game.nyawa);

game.terkenaSerangan(30);
