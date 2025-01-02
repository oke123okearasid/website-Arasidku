// Validasi login
document.getElementById('form-login')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login berhasil!');
        window.location.href = "index.html";
    } else {
        alert('Username atau password salah!');
    }
});

// Proteksi halaman transaksi
if (window.location.pathname.endsWith('transaksi.html')) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        alert('Anda harus login terlebih dahulu!');
        window.location.href = "login.html";
    }
}

// Logika transaksi
document.getElementById('form-transaksi')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const namaBuku = document.getElementById('nama-buku').value;
    const namaTransaksi = document.getElementById('nama-transaksi').value;
    const jumlah = document.getElementById('jumlah').value;
    const kategori = document.getElementById('kategori').value;

    if (!namaBuku) {
        alert('Silakan pilih nama buku!');
        return;
    }

    const transaksiList = document.getElementById('transaksi-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${namaBuku}</td>
        <td>${namaTransaksi}</td>
        <td>${jumlah}</td>
        <td>${kategori}</td>
    `;
    transaksiList.appendChild(row);

    alert('Transaksi berhasil disimpan!');
    document.getElementById('form-transaksi').reset();
});
