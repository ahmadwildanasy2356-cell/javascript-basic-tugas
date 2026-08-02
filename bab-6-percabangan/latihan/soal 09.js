let username = "Ahmad";
let password = "";

// String kosong "" bernilai falsy (dianggap false)
if (username && password) {
  console.log("Login berhasil");
} else {
  console.log("Data belum lengkap");
}