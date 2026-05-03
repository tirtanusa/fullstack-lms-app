# 📚 DibiEdu — Project Documentation

## 🔗 Repository GitHub

> [Link Repository](https://github.com/username/repo) — _Ganti dengan link repository kamu_

---

## 🛠️ Library yang Digunakan

### Frontend (React)

| Library | Versi | Kegunaan |
|---|---|---|
| `react` | ^19 | UI library utama |
| `react-dom` | ^19 | Rendering ke DOM |
| `react-router` | ^7 | Client-side routing |
| `lucide-react` | latest | Icon library |
| `tailwindcss` | ^4 | Utility-first CSS framework |

### Backend (Laravel)

| Library | Kegunaan |
|---|---|
| `laravel/sanctum` | Token-based API authentication |
| `darkaonline/l5-swagger` | API documentation (OpenAPI/Swagger) |
| `doctrine/dbal` | Database schema migration support |

---

## ✨ Fitur Utama

- **Authentication** — Register, Login, Logout menggunakan Laravel Sanctum
- **Course Management** — CRUD kursus dengan filter, search, dan sorting
- **User Profile** — Menampilkan data profil user yang sedang login
- **Protected Routes** — Halaman tertentu hanya bisa diakses setelah login
- **Persistent Auth** — Token disimpan di `localStorage`, user tetap login setelah refresh

---

## 🚀 Fitur Tambahan (di luar requirement utama)

### 1. Role-Based Access Control (RBAC)

Sistem akses berbasis role dengan 3 level:

| Role | Akses |
|---|---|
| `user` | Halaman umum & dashboard pribadi |
| `instructor` | Dashboard instruktur + manajemen kursus yang dibuat |
| `admin` | Semua halaman termasuk manajemen user |

Implementasi menggunakan komponen `RoleProtectedRoute` yang membungkus route tertentu dan melakukan redirect ke halaman `/unauthorized` apabila role tidak sesuai.

### 2. Frontend Pagination pada Tabel User

Tabel manajemen user dilengkapi dengan pagination di sisi React (frontend). Semua data di-fetch sekali dari endpoint `/api/users`, kemudian dipaginasi menggunakan state `currentPage` dengan jumlah 5 data per halaman. Fitur ini mencakup:

- Navigasi halaman dengan tombol prev/next
- Highlight halaman aktif
- Informasi "Showing X–Y of Z users"

---

## 🗂️ Struktur Folder

```
project/
├── backend/                  # Laravel
│   ├── app/
│   │   ├── Http/Controllers/ # AuthController, CourseController, dll
│   │   ├── Models/           # User, Course, Category
│   │   └── Traits/           # ApiResponse trait
│   ├── routes/
│   │   └── api.php           # Semua API routes
│   └── config/
│       └── cors.php          # CORS configuration
│
└── frontend/                 # React + Vite
    └── src/
        ├── components/       # RoleProtectedRoute, Navbar, Footer
        ├── context/          # AuthContext, AuthProvider
        ├── hooks/            # useAuth
        └── pages/            # Login, Register, Dashboard, AdminDashboard
```

---

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Deskripsi | Auth |
|---|---|---|---|
| POST | `/api/register` | Register user baru | ❌ |
| POST | `/api/login` | Login user | ❌ |
| POST | `/api/logout` | Logout user | ✅ |
| GET | `/api/me` | Get profil user aktif | ✅ |

### Courses
| Method | Endpoint | Deskripsi | Auth |
|---|---|---|---|
| GET | `/api/courses` | Get semua kursus | ❌ |
| GET | `/api/courses/{id}` | Get detail kursus | ❌ |
| POST | `/api/courses` | Buat kursus baru | ✅ |
| PUT | `/api/courses/{id}` | Update kursus | ✅ |
| DELETE | `/api/courses/{id}` | Hapus kursus | ✅ |
| GET | `/api/courses/top-rated` | Get kursus terbaik | ❌ |
| GET | `/api/courses/lowest-price` | Get kursus termurah | ❌ |

### Users
| Method | Endpoint | Deskripsi | Auth |
|---|---|---|---|
| GET | `/api/users` | Get semua user | ✅ |

---

## ⚙️ Cara Menjalankan Project

### Backend
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

_Dokumentasi ini dibuat sebagai bagian dari Assignment End-to-End Mini Project — Dibimbing.id_
