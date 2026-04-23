# Robotrack - Warehouse Robot Monitoring Dashboard

Robotrack adalah aplikasi web sederhana yang dirancang untuk memantau armada robot di gudang secara real-time. Proyek ini dibangun sebagai bahan pembelajaran penggunaan **Bootstrap** dan integrasi teknologi web modern lainnya.

## Dokumentasi Penggunaan Bootstrap

Proyek ini memanfaatkan berbagai fitur utama dari Bootstrap 5 untuk menciptakan antarmuka yang responsif dan modern:

### 1. Sistem Grid (Grid System)
- **Dashboard Layout**: Menggunakan sistem grid Bootstrap (`row` dan `col-md-3`) untuk menyusun kartu statistik di bagian atas secara sejajar.
- **Bento Grid**: Diimplementasikan menggunakan kombinasi CSS Grid murni dan utilitas responsif Bootstrap untuk membuat tata letak kartu analitik yang kompleks namun tetap mobile-friendly.

### 2. Komponen UI
- **Cards**: Digunakan secara luas untuk membungkus statistik, tabel status robot, dan fitur analitik. Kartu-kartu ini dimodifikasi dengan CSS khusus untuk memberikan efek *Glassmorphism*.
- **Tabel (Tables)**: Menggunakan kelas `.table`, `.table-dark`, dan `.table-hover` untuk menampilkan daftar armada robot dengan gaya industrial yang bersih.
- **Formulir (Forms)**: Halaman Login dan Register menggunakan komponen `.form-control` dan `.form-label` dari Bootstrap untuk menangani input pengguna dengan validasi visual yang konsisten.
- **Navigasi (Navbar & Navs)**: Sidebar dashboard dibangun menggunakan komponen `.nav` dan `.nav-link` untuk navigasi antar fitur.

### 3. Utilitas (Utilities)
- Menggunakan utilitas Bootstrap seperti `d-flex`, `justify-content-between`, `align-items-center`, `mb-4`, dan `text-center` untuk mengatur tata letak elemen secara cepat tanpa menulis banyak CSS tambahan.

## Dokumentasi Visual 3D

### Asal Gambar/Scene Robot 3D
Robot 3D interaktif yang terdapat pada halaman **Login** dan **Register** bukan merupakan gambar statis, melainkan scene 3D real-time yang berasal dari **[Spline](https://spline.design/)**.

- **Teknologi**: Menggunakan library `@splinetool/viewer` yang memungkinkan rendering scene 3D langsung di browser menggunakan WebGL.
- **Interaktivitas**: Pengguna dapat berinteraksi dengan robot tersebut (seperti mengikuti gerakan kursor atau memutar objek) untuk memberikan pengalaman pengguna yang lebih imersif.
- **Sumber Scene**: Scene di-host di server Spline dan dipanggil melalui URL `.splinecode` ke dalam elemen `<spline-viewer>`.


