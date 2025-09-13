## Test Fullstack Dapur Buzzer - Fadhil Rahman

Repository ini digunakan untuk pengajuan pekerjaan (job application). Aplikasi menggunakan Next.js (App Router), Tailwind, dan HeroUI. Di bawah ini panduan instalasi, pengisian env, serta detail Submission 1 (endpoint + cara mengujinya).

### Instalasi

1. Install dependency

```bash
npm install
```

2. Buat file `.env` di root (sudah di-`.gitignore`) dan isi variabel berikut

```env
API_KEY = APIKEY123  // API key static tidak bisa diubah

SPRINT_PEDIA_COOKIE="<paste-your-sprintpedia-cookie-here>" // Isi dengan cookie yang anda miliki
```

3. Jalankan mode development

```bash
npm run dev
```

Aplikasi berjalan di `http://localhost:3000`.

---

## Submission 1

- URL Endpoint: `GET /api/instagram`
- Lokasi Kode: `app/api/instagram/route.ts:1`
- Query params yang dibutuhkan:
  - `username` : username Instagram yang ingin dicek
  - `key` : harus sama dengan `API_KEY` pada `.env`

### Contoh Request

```bash
curl "http://localhost:3000/api/instagram?username=uhuy&key=your-api-key-here"
```

### Environment yang diperlukan

- `API_KEY` — validasi akses endpoint internal
- `SPRINT_PEDIA_COOKIE` — cookie sesi untuk meneruskan request ke SprintPedia

Jika `SPRINT_PEDIA_COOKIE` tidak valid atau kadaluarsa, response dari upstream akan crash. Perbarui cookie dan coba ulang.

---
