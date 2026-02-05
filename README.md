# 🎓 Student Management System — Frontend (React)

This repository contains the **Frontend** of the **Student Management System**, built using **React (Vite)**. It provides a modern, responsive user interface for authentication and student management and communicates with a Spring Boot backend via REST APIs.

---

## 🚀 Overview

This frontend application enables:

* User authentication (Admin / User roles)
* Role-based dashboards
* CRUD operations for students (via backend APIs)
* Secure communication using JWT (optional)
* Smooth UI experience with component-based architecture

It is designed to work seamlessly with the **Spring Boot backend** in a separate repository.

---

## ✨ Features

### 🔹 Authentication

* Login page with role selection
* JWT token storage in `localStorage`
* Protected routes based on role

### 🔹 Admin Dashboard

* View all students
* Add new student
* Update student details
* Delete student records

### 🔹 User Dashboard

* View student details
* Add personal student record

### 🔹 UI/UX

* Clean component structure
* Responsive layout
* Error handling for failed requests

---

## 🛠️ Technologies Used

* **React (Vite)**
* **TypeScript / JavaScript**
* **Axios** (for API calls)
* **React Router** (for navigation)
* **HTML & CSS**

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Login.tsx
│   ├── AdminDashboard.tsx
│   ├── UserDashboard.tsx
│
├── services/
│   └── api.js
│
├── App.tsx
└── main.tsx
```

---

## 🔗 Connection with Backend

This frontend is connected to the Spring Boot backend running at:

```
http://localhost:8080
```

Axios is configured in:

```
src/services/api.js
```

Example:

```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080"
});

export default api;
```

---

## ▶️ How to Run Locally

### 1️⃣ Clone this repository

```bash
git clone https://github.com/chaitanyapawar99/Student-Managment-System-Frontend.git
cd Student-Managment-System-Frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

## 🔐 Authentication (If JWT is enabled)

After successful login, the JWT token is stored in `localStorage` and sent automatically with every API request:

```
Authorization: Bearer <your-token>
```

---

## 🧠 What this project demonstrates

* How React communicates with Spring Boot REST APIs
* Role-based UI navigation
* Component-based design
* State management using React hooks
* Handling HTTP requests using Axios

---

## 🔗 Backend Repository

This frontend works with the following backend repository:

```
https://github.com/chaitanyapawar99/student-backend
```

*(If your backend repo has a different name, tell me and I’ll update this link.)*

---

## 🔮 Future Enhancements

* Better UI with Tailwind / Material UI
* Pagination for student records
* Search & filter functionality
* Profile management
* Cloud deployment (Vercel + Render)

---

⭐ If you find this project useful, please give it a star!
