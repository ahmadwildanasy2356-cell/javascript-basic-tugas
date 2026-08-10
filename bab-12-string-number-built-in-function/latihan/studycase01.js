const username = "   BUDI123   ";

const namaNama = username.trim().toLowerCase();
console.log("Username :", namaNama);

if(namaNama.length >= 5){
 console.log("Username valid");
}else {
    console.log("Username terlalu pendek");
}