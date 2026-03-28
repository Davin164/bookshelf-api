# 📚 Bookshelf API

RESTful API untuk mengelola koleksi buku pribadi. Dibangun sebagai submission akhir kelas **Belajar Membuat Aplikasi Back-End untuk Pemula** di Dicoding Academy.

## 🛠️ Teknologi yang Digunakan

- **Runtime**: Node.js
- **Framework**: Express.js
- **ID Generator**: Nanoid v3
- **Linter**: ESLint dengan Airbnb style guide

## 📁 Struktur Project
```
bookshelf-api/
├── src/
│   ├── books.js          # In-memory data storage
│   ├── bookHandlers.js   # Handler untuk setiap endpoint
│   ├── routes.js         # Definisi route
│   └── server.js         # Entry point server
├── .eslintrc.json        # Konfigurasi ESLint
├── .eslintignore         # File yang diabaikan ESLint
├── .gitignore            # File yang diabaikan Git
└── package.json
```

## ⚙️ Instalasi & Menjalankan Server

1. Clone repository ini
```bash
git clone https://github.com/Davin164/bookshelf-api.git
```

2. Masuk ke folder project
```bash
cd bookshelf-api
```

3. Install dependencies
```bash
npm install
```

4. Jalankan server
```bash
npm run start
```

Server akan berjalan pada **http://localhost:9000**

> Untuk mode development dengan auto-reload:
> ```bash
> npm run start-dev
> ```

## 🔗 Endpoints

### 📌 Tambah Buku
- **Method**: `POST`
- **URL**: `/books`
- **Body**:
```json
{
  "name": "string",
  "year": "number",
  "author": "string",
  "summary": "string",
  "publisher": "string",
  "pageCount": "number",
  "readPage": "number",
  "reading": "boolean"
}
```
- **Response sukses** (`201`):
```json
{
  "status": "success",
  "message": "Buku berhasil ditambahkan",
  "data": {
    "bookId": "string"
  }
}
```

---

### 📌 Tampilkan Semua Buku
- **Method**: `GET`
- **URL**: `/books`
- **Query Parameters** (opsional):
  - `?name` — Filter buku berdasarkan nama (case insensitive)
  - `?reading=0` — Tampilkan buku yang tidak sedang dibaca
  - `?reading=1` — Tampilkan buku yang sedang dibaca
  - `?finished=0` — Tampilkan buku yang belum selesai dibaca
  - `?finished=1` — Tampilkan buku yang sudah selesai dibaca
- **Response sukses** (`200`):
```json
{
  "status": "success",
  "data": {
    "books": [
      {
        "id": "string",
        "name": "string",
        "publisher": "string"
      }
    ]
  }
}
```

---

### 📌 Tampilkan Detail Buku
- **Method**: `GET`
- **URL**: `/books/:bookId`
- **Response sukses** (`200`):
```json
{
  "status": "success",
  "data": {
    "book": {
      "id": "string",
      "name": "string",
      "year": "number",
      "author": "string",
      "summary": "string",
      "publisher": "string",
      "pageCount": "number",
      "readPage": "number",
      "finished": "boolean",
      "reading": "boolean",
      "insertedAt": "string",
      "updatedAt": "string"
    }
  }
}
```

---

### 📌 Update Buku
- **Method**: `PUT`
- **URL**: `/books/:bookId`
- **Body**: sama seperti POST
- **Response sukses** (`200`):
```json
{
  "status": "success",
  "message": "Buku berhasil diperbarui"
}
```

---

### 📌 Hapus Buku
- **Method**: `DELETE`
- **URL**: `/books/:bookId`
- **Response sukses** (`200`):
```json
{
  "status": "success",
  "message": "Buku berhasil dihapus"
}
```

---

## ❌ Response Error

| Status Code | Kondisi |
|-------------|---------|
| `400` | `name` tidak diisi |
| `400` | `readPage` lebih besar dari `pageCount` |
| `404` | Buku dengan `id` tidak ditemukan |
| `500` | Server gagal menyimpan buku |

## 👤 Author

**Davin** — Information Systems Student at Universitas Sriwijaya
- GitHub: [@Davin164](https://github.com/Davin164)
Let's Connect

## 📝 Catatan

- Data disimpan secara **in-memory**, artinya data akan hilang ketika server di-restart.
- Server berjalan pada port **9000**.
- Linter menggunakan **ESLint Airbnb style guide**, jalankan `npm run lint` untuk mengecek.
