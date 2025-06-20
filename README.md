# Task Management Application (React + TypeScript + Auth0 + Vite)

This is a full-featured Task Management application built with React, TypeScript, Vite, and Auth0. It supports task creation, viewing, editing, and deletion, with authentication and global state management via Context API.

---

## 🚀 Features

- ✅ User login/logout with Auth0
- ✅ Dashboard view of all tasks
- ✅ Task creation and editing via form
- ✅ Task details view
- ✅ TypeScript interfaces for strict typing
- ✅ Context API for task state management
- ✅ Error handling and form validation

---

## 📦 Tech Stack

- React + TypeScript
- Auth0 (`@auth0/auth0-react`)
- React Router DOM
- Context API
- Vite (fast bundler & dev server)

---

## 🛠 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Caleb-Speaker/task-management-app.git
cd task-management-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Auth0

1. Create an Auth0 account at [auth0.com](https://auth0.com)
2. Create a new **Single Page Application**
3. Add the following to the Application Settings:

**Allowed Callback URLs**
```
http://localhost:5173
```

**Allowed Logout URLs**
```
http://localhost:5173
```

**Allowed Web Origins**
```
http://localhost:5173
```

4. Enable **Offline Access** and **Refresh Token Rotation** in OAuth settings (if available)

### 4. Create `.env` file

Create a `.env` file in the root of the project:

```
REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
```

### 5. Start the development server

```bash
npm run dev
```

---

## 🧠 Project Architecture

```
src/
├── components/         # Reusable UI components (e.g., AuthButtons)
├── context/            # Global state management using Context API
├── pages/              # Page-level components (Dashboard, TaskForm, TaskDetails)
├── types/              # TypeScript interfaces and types
├── App.tsx             # Application routes and layout
├── main.tsx            # App entry point with providers
```

---

## ✍️ TypeScript & State Management

- All task data follows a strict `Task` interface.
- State is managed globally using a typed `TaskContext`.
- Hooks like `useState`, `useEffect`, and `useContext` are typed for safety.

---

## 🔐 Authentication

- Uses Auth0 (`@auth0/auth0-react`)
- Protected routes are displayed only to authenticated users.
- Logout returns the user to the home page.

---