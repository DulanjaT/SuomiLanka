# 🇫🇮🇱🇰 SuomiLanka

SuomiLanka is a community-driven web application built for **Sri Lankans living in Finland**. The platform allows Sri Lankan entrepreneurs, small businesses, and individuals to advertise their products and services while enabling users to easily discover local businesses within the community.

The goal of this project is to create a centralized marketplace that strengthens the Sri Lankan community in Finland by making local businesses more visible and accessible.

---

# ✨ Features

## User Features
- Browse local business advertisements
- Search businesses
- View detailed business information
- User authentication
- User profile management
- Responsive UI for desktop and mobile

## Merchant Features
- Merchant registration
- Create advertisements
- Edit advertisements
- Delete advertisements
- Upload business images
- Manage business profile

## Admin Features
- Dashboard
- User management
- Merchant approval
- Advertisement moderation
- Report handling
- Platform analytics

---

# 🛠 Tech Stack

## Frontend

- React
- React Router
- Material UI (MUI)
- Axios
- Context API

## Backend

- Node.js
- Express.js
- Prisma ORM
- JWT Authentication
- bcrypt

## Database

- PostgreSQL

## Development Tools

- Docker
- Docker Compose
- Git
- GitHub
- VS Code

---

# 📁 Project Structure

```
suomi-lanka/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │
│   ├── app/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── theme/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── backend/
│   ├── prisma/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── app.js
│   │
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# 🚀 Getting Started

## Prerequisites

Install the following before running the project.

- Node.js (v20 or newer recommended)
- npm
- Docker Desktop
- Git

---

# 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/suomi-lanka.git

cd suomi-lanka
```

---

# 2. Start PostgreSQL

From the backend directory:

```bash
docker compose up -d
```

Verify the database is running:

```bash
docker ps
```

---

# 3. Configure Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/suomi_lanka"

JWT_SECRET="your_super_secret_key"

PORT=5000
```

---

# 4. Install Backend Dependencies

```bash
cd backend

npm install
```

---

# 5. Run Prisma Migration

```bash
npx prisma migrate dev
```

Generate Prisma Client

```bash
npx prisma generate
```

(Optional)

```bash
npx prisma studio
```

---

# 6. Start Backend

```bash
npm run dev
```

The backend should now be running at

```
http://localhost:5000
```

---

# 7. Install Frontend Dependencies

```bash
cd ../frontend

npm install
```

---

# 8. Start Frontend

```bash
npm run dev
```

The frontend should now be available at

```
http://localhost:5173
```

---

# 🔐 Authentication

Authentication is handled using JSON Web Tokens (JWT).

Features include:

- Secure login
- Secure registration
- Password hashing using bcrypt
- Protected routes
- Role-based authorization
- Automatic token attachment using Axios interceptors

---

# 🎨 UI

The application uses Material UI with a custom design system.

Includes:

- Custom color palette
- Custom typography
- Global theme
- Responsive layouts
- Light theme
- Reusable components

---

# 📦 API Architecture

```
Client

↓

Axios

↓

Express Routes

↓

Controllers

↓

Services

↓

Prisma ORM

↓

PostgreSQL
```

---

# 🧩 Main Modules

- Authentication
- User Management
- Merchant Management
- Advertisements
- Categories
- Image Uploads
- Search
- Dashboard
- Administration

---

# 🔒 Security

- Password hashing
- JWT authentication
- Protected API routes
- Input validation
- Environment variables
- CORS configuration
- SQL Injection protection through Prisma ORM

---

# 📱 Responsive Design

The application is designed to work on

- Desktop
- Tablet
- Mobile

using Material UI's responsive layout system.

---

# 📈 Future Improvements

- Business reviews
- Ratings
- Favorites
- Google Maps integration
- Messaging between users and merchants
- Push notifications
- Email verification
- Forgot password
- Premium advertisements
- Subscription plans
- Payment integration
- Multi-language support (English, Sinhala, Finnish)
- Progressive Web App (PWA)

---

# 🤝 Contributing

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📜 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Dulanja Gunawardena**

Software Engineer

GitHub: https://github.com/DulanjaT

LinkedIn: https://www.linkedin.com/in/dulanja-gunawardena/

---

## Project Vision

SuomiLanka aims to become the leading online platform connecting Sri Lankan businesses and the Sri Lankan community in Finland. By providing a modern, secure, and user-friendly marketplace, the project helps local entrepreneurs grow while making it easier for users to discover trusted businesses and services within their community.