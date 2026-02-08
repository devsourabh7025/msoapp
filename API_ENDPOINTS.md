# API Endpoints Reference

## Base URLs

- **Development:** `http://localhost:3000`
- **Production:** `https://msoapp.vercel.app`

---

## Authentication Endpoints

### Login
- **URL:** `/api/login`
- **Method:** `POST`
- **Full URL (Dev):** `http://localhost:3000/api/login`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/login`
- **Body:** `{ "email": "string", "password": "string" }`
- **Auth Required:** No

### Register
- **URL:** `/api/register`
- **Method:** `POST`
- **Full URL (Dev):** `http://localhost:3000/api/register`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/register`
- **Body:** `{ "name": "string", "email": "string", "password": "string" }`
- **Auth Required:** No

### Logout
- **URL:** `/api/logout`
- **Method:** `POST`
- **Full URL (Dev):** `http://localhost:3000/api/logout`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/logout`
- **Auth Required:** Yes (Cookie)

### Get Current User
- **URL:** `/api/auth/me`
- **Method:** `GET`
- **Full URL (Dev):** `http://localhost:3000/api/auth/me`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/auth/me`
- **Auth Required:** Yes (Cookie)

---

## Public Endpoints

### Get All Posts (Public)
- **URL:** `/api/public/posts`
- **Method:** `GET`
- **Full URL (Dev):** `http://localhost:3000/api/public/posts`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/public/posts`
- **Query Params:** `?page=1&limit=10&category=string&search=string`
- **Auth Required:** No

### Get Post by Slug (Public)
- **URL:** `/api/public/posts/[slug]`
- **Method:** `GET`
- **Full URL (Dev):** `http://localhost:3000/api/public/posts/your-post-slug`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/public/posts/your-post-slug`
- **Auth Required:** No

### Get All Categories (Public)
- **URL:** `/api/public/categories`
- **Method:** `GET`
- **Full URL (Dev):** `http://localhost:3000/api/public/categories`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/public/categories`
- **Auth Required:** No

---

## Post Endpoints

### Create Post
- **URL:** `/api/posts`
- **Method:** `POST`
- **Full URL (Dev):** `http://localhost:3000/api/posts`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/posts`
- **Auth Required:** Yes (NORMAL_USER or ADMIN)

### Get All Posts
- **URL:** `/api/posts`
- **Method:** `GET`
- **Full URL (Dev):** `http://localhost:3000/api/posts`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/posts`
- **Auth Required:** Yes

### Get Post Comments
- **URL:** `/api/posts/[slug]/comments`
- **Method:** `GET`
- **Full URL (Dev):** `http://localhost:3000/api/posts/your-post-slug/comments`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/posts/your-post-slug/comments`
- **Auth Required:** No

### Add Comment to Post
- **URL:** `/api/posts/[slug]/comments`
- **Method:** `POST`
- **Full URL (Dev):** `http://localhost:3000/api/posts/your-post-slug/comments`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/posts/your-post-slug/comments`
- **Body:** `{ "content": "string" }`
- **Auth Required:** Yes

---

## Settings Endpoints

### Homepage Settings
- **URL:** `/api/settings/homepage`
- **Method:** `GET`, `PUT`
- **Full URL (Dev):** `http://localhost:3000/api/settings/homepage`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/settings/homepage`
- **Auth Required:** Yes (ADMIN)

### Header Settings
- **URL:** `/api/settings/header`
- **Method:** `GET`, `PUT`
- **Full URL (Dev):** `http://localhost:3000/api/settings/header`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/settings/header`
- **Auth Required:** Yes (ADMIN)

### Footer Settings
- **URL:** `/api/settings/footer`
- **Method:** `GET`, `PUT`
- **Full URL (Dev):** `http://localhost:3000/api/settings/footer`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/settings/footer`
- **Auth Required:** Yes (ADMIN)

### Hero Settings
- **URL:** `/api/settings/hero`
- **Method:** `GET`, `PUT`
- **Full URL (Dev):** `http://localhost:3000/api/settings/hero`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/settings/hero`
- **Auth Required:** Yes (ADMIN)

### Featured Settings
- **URL:** `/api/settings/featured`
- **Method:** `GET`, `PUT`
- **Full URL (Dev):** `http://localhost:3000/api/settings/featured`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/settings/featured`
- **Auth Required:** Yes (ADMIN)

### Spotlight Settings
- **URL:** `/api/settings/spotlight`
- **Method:** `GET`, `PUT`
- **Full URL (Dev):** `http://localhost:3000/api/settings/spotlight`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/settings/spotlight`
- **Auth Required:** Yes (ADMIN)

### Trending Settings
- **URL:** `/api/settings/trending`
- **Method:** `GET`, `PUT`
- **Full URL (Dev):** `http://localhost:3000/api/settings/trending`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/settings/trending`
- **Auth Required:** Yes (ADMIN)

### Sidebar Settings
- **URL:** `/api/settings/sidebar`
- **Method:** `GET`, `PUT`
- **Full URL (Dev):** `http://localhost:3000/api/settings/sidebar`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/settings/sidebar`
- **Auth Required:** Yes (ADMIN)

### Post Settings
- **URL:** `/api/settings/post`
- **Method:** `GET`, `PUT`
- **Full URL (Dev):** `http://localhost:3000/api/settings/post`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/settings/post`
- **Auth Required:** Yes (ADMIN)

---

## Admin Endpoints

### Get All Categories (Admin)
- **URL:** `/api/admin/categories`
- **Method:** `GET`, `POST`, `PUT`, `DELETE`
- **Full URL (Dev):** `http://localhost:3000/api/admin/categories`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/admin/categories`
- **Auth Required:** Yes (ADMIN)

### Get Post by ID (Admin)
- **URL:** `/api/admin/posts/[id]`
- **Method:** `GET`, `PUT`
- **Full URL (Dev):** `http://localhost:3000/api/admin/posts/1234567890abcdef`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/admin/posts/1234567890abcdef`
- **Auth Required:** Yes (ADMIN)

### Get Post Requests
- **URL:** `/api/admin/post-requests`
- **Method:** `GET`, `PUT`
- **Full URL (Dev):** `http://localhost:3000/api/admin/post-requests`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/admin/post-requests`
- **Auth Required:** Yes (ADMIN)

### Seed Posts
- **URL:** `/api/admin/seed-posts`
- **Method:** `POST`
- **Full URL (Dev):** `http://localhost:3000/api/admin/seed-posts`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/admin/seed-posts`
- **Auth Required:** Yes (ADMIN)

---

## Superadmin Endpoints

### Create Superadmin
- **URL:** `/api/superadmin/create-superadmin`
- **Method:** `POST`
- **Full URL (Dev):** `http://localhost:3000/api/superadmin/create-superadmin`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/superadmin/create-superadmin`
- **Body:** `{ "email": "string", "adminSecret": "string" }`
- **Auth Required:** Yes (ADMIN + Admin Secret)

### Get All Users (Superadmin)
- **URL:** `/api/superadmin/users`
- **Method:** `GET`, `PUT`, `DELETE`
- **Full URL (Dev):** `http://localhost:3000/api/superadmin/users`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/superadmin/users`
- **Auth Required:** Yes (ADMIN)

### Get User by ID (Superadmin)
- **URL:** `/api/superadmin/users/[userId]`
- **Method:** `GET`, `PUT`
- **Full URL (Dev):** `http://localhost:3000/api/superadmin/users/1234567890abcdef`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/superadmin/users/1234567890abcdef`
- **Auth Required:** Yes (ADMIN)

### Get All Posts (Superadmin)
- **URL:** `/api/superadmin/posts`
- **Method:** `GET`, `PUT`, `DELETE`
- **Full URL (Dev):** `http://localhost:3000/api/superadmin/posts`
- **Full URL (Prod):** `https://msoapp.vercel.app/api/superadmin/posts`
- **Auth Required:** Yes (ADMIN)

---

## Quick Reference

### Base URL Variables
```javascript
// Development
const API_BASE_URL = 'http://localhost:3000';

// Production
const API_BASE_URL = 'https://msoapp.vercel.app';

// Dynamic (recommended)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
```

### Authentication
Most endpoints require authentication via HTTP-only cookie. After login/register, the cookie is automatically set and sent with subsequent requests.

### Example Usage
```javascript
// Using fetch
const response = await fetch(`${API_BASE_URL}/api/public/posts`, {
  method: 'GET',
  credentials: 'include' // Important for cookies
});

// Using axios
import axios from 'axios';
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true // Important for cookies
});

const response = await api.get('/api/public/posts');
```

---

## Summary

**Total Endpoints:** 26 routes
- **Authentication:** 4 endpoints
- **Public:** 3 endpoints
- **Posts:** 4 endpoints
- **Settings:** 9 endpoints
- **Admin:** 4 endpoints
- **Superadmin:** 4 endpoints

**HTTP Methods Used:**
- `GET`: 20 endpoints
- `POST`: 8 endpoints
- `PUT`: 12 endpoints
- `DELETE`: 3 endpoints

---

**Last Updated:** $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
