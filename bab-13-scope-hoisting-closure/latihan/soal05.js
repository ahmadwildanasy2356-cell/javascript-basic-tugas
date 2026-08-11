const pajak = 10;

function hitungHarga(harga) {
  const totalPajak = harga * (pajak / 100);

  return harga + totalPajak;
}

console.log(hitungHarga(100000));

// 1. diluar fungsi atau global scope
// 2. didalam fungsi hitungHarga()
// 3. karena variabel pajak bersifat global jadi bisa di panggil dimana aja
// 4. tidak , karena di dalam fungsi