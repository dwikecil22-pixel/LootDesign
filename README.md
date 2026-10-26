# Portofolio Desain — GitHub Pages

Website portofolio statis yang responsif untuk HP dan desktop. Dibuat dengan HTML, CSS, dan JavaScript tanpa framework atau proses build.

## Struktur file

- `index.html` — konten dan struktur halaman.
- `style.css` — desain, layout responsif, dan tema gelap.
- `script.js` — menu mobile, filter galeri, modal detail, tema, dan tahun footer.

## Cara memasang dari HP Android

1. Buka `https://github.com/` di Chrome dan masuk atau buat akun.
2. Tekan tombol `+` lalu pilih **New repository**.
3. Beri nama repositori, misalnya `portofolio-desain`.
4. Pilih **Public**, lalu buat repositori.
5. Buka repositori tersebut, tekan **Add file** → **Create new file**.
6. Buat file bernama `index.html`, lalu salin seluruh isi file `index.html` dari paket ini. Simpan dengan **Commit changes**.
7. Ulangi langkah yang sama untuk `style.css` dan `script.js`. Pastikan nama file persis sama dan berada di folder utama repositori.
8. Buka tab **Settings** pada repositori.
9. Cari **Pages** di menu pengaturan.
10. Di bagian **Build and deployment**, pilih **Deploy from a branch**.
11. Pilih branch `main`, folder `/(root)`, lalu tekan **Save**.
12. Tunggu beberapa menit. URL website biasanya berbentuk `https://USERNAME.github.io/portofolio-desain/`. Ganti `USERNAME` dan nama repositori sesuai milikmu.

Jika tampilan GitHub di HP berbeda, gunakan menu Chrome `⋮` → **Situs desktop**.

## Yang harus kamu ubah sebelum dibagikan

Cari dan ganti teks contoh berikut di `index.html`:

- `NAMA.` dan `Nama Kamu` → nama atau nama studio kamu.
- `emailkamu@example.com` → alamat email yang ingin dipublikasikan.
- Tautan Instagram dan Behance → profil kamu yang sebenarnya.
- Judul, kategori, tahun, dan deskripsi proyek → detail karya asli kamu.
- URL gambar Unsplash → URL gambar portofolio milikmu, jika sudah siap.

Gambar yang ada sekarang hanyalah gambar contoh dari Unsplash, bukan karya asli pemilik portofolio. Gambar dimuat dari internet, sehingga website memerlukan koneksi internet untuk menampilkannya.

## Cara mengganti gambar

Di `index.html`, cari elemen `<img ... src="URL_GAMBAR">`. Ganti nilai `src` dengan URL gambar publik yang bisa diakses langsung, atau unggah gambar ke repositori lalu gunakan jalur relatif, misalnya `images/poster-01.jpg`.

Untuk gambar lokal:
1. Buat folder `images` di repositori.
2. Unggah gambar ke folder itu.
3. Gunakan `src="images/poster-01.jpg"`.

Hindari mengunggah gambar yang bukan milikmu atau yang tidak memiliki izin untuk dipublikasikan.

## Fitur yang sudah ada

- Layout responsif untuk ponsel, tablet, dan desktop.
- Navigasi menu untuk layar kecil.
- Filter kategori galeri.
- Pop-up detail proyek.
- Tombol ganti tema terang/gelap.
- Navigasi aktif sesuai bagian yang sedang dibaca.
- Tidak membutuhkan server, database, atau library JavaScript eksternal.

Font Google dan gambar contoh menggunakan layanan eksternal. Jika layanan itu tidak tersedia, halaman tetap berfungsi: font diganti font bawaan perangkat, dan gambar yang gagal dimuat otomatis diganti gambar pengganti sederhana (berlaku juga untuk gambar milikmu sendiri, misalnya jika nama file salah).

## Catatan perbaikan

- Menu **Contact** kini menyala saat halaman sudah di bagian paling bawah (sebelumnya tidak pernah aktif).
- Gambar yang gagal dimuat tidak lagi merusak tampilan (tidak ada teks alt terpotong atau kotak kosong).
- Ikon ganti tema kini digambar dengan CSS sehingga tampil konsisten di semua perangkat.
- Ditambahkan favicon bawaan agar tidak ada error 404 `favicon.ico` di konsol browser.
- Warna teks abu-abu dibuat sedikit lebih gelap agar kontrasnya memenuhi standar keterbacaan WCAG AA.
- Ditambahkan font cadangan sistem, `role="group"` pada dua elemen ber-`aria-label`, dan `theme-color` ikut berubah saat tema gelap.
