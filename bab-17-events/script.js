const bookingForm = document.getElementById('bookingForm');
const namaInput = document.getElementById('nama');
const emailInput = document.getElementById('email');
const judulFilmInput = document.getElementById('judulFilm');
const btnReset = document.getElementById('btnReset');
const daftarPesanan = document.getElementById('daftarPesanan');
const pesanKosong = document.getElementById('pesanKosong');

bookingForm.addEventListener('submit', function(event) {
    
    event.preventDefault();
    const nama = namaInput.value.trim();
    const email = emailInput.value.trim();
    const judulFilm = judulFilmInput.value.trim();

    if (nama === "" || email === "" || judulFilm === "") {
        alert("⚠️ Nama, email, dan judul film wajib diisi!");
        return; 
    }

    if (pesanKosong) {
        pesanKosong.remove();
    }

    const newTicket = document.createElement('li');
    newTicket.classList.add('ticket-item');

    newTicket.innerHTML = `

        <div class="ticket-info">
            <p><strong>Film:</strong>  ${judulFilm}</p>
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Email:</strong> ${email}</p>
        </div>
        <button type="button" class="btn-delete">Hapus</button>
    `;
    
    const btnDelete = newTicket.querySelector('.btn-delete');

    btnDelete.addEventListener('click', function() {
        newTicket.remove();
        
        if (daftarPesanan.querySelectorAll('.ticket-item').length === 0) {
            daftarPesanan.appendChild(pesanKosong);
        }
    });

    daftarPesanan.appendChild(newTicket);

    bookingForm.reset();
});

btnReset.addEventListener('click', function() {
    bookingForm.reset();
});
