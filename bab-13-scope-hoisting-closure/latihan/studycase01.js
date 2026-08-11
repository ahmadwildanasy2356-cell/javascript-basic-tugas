function prosesLogin() {
  const tokenSesi = "abc123";

  console.log("Login berhasil");
  console.log("Token:", tokenSesi);
}

prosesLogin();

console.log(tokenSesi);

// yang terjadi mengalami ReferenceError: tokenSesi is not defined
// 1.karena menggunakan const dan dia di dalam fungsi
// 2.agar bisa diakses dimana aja harus jadikan global scope (di luar fungsi)