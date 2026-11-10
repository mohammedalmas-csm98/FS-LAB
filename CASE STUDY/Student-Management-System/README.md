# Student Management System – STUDIA

A full-stack web application designed to manage student records efficiently. The system allows users to add, view, update, search, filter and delete student information through an interactive dashboard.

## Live Deployment

- **Frontend (Vercel):** https://studia-frontend.vercel.app
- **Backend (Render):** https://studia-backend-orll.onrender.com
- **Source Code (GitHub):** https://github.com/mohammedalmas-csm98/FS-LAB

**Database:** MongoDB Atlas

## Project Overview

The Student Management System was developed as a Full Stack Web Development case study.

The application addresses a common issue in student record management: records may be successfully added to a database but updated records may not appear correctly in the application.

This project implements CRUD operations and integrates the frontend with a backend API and MongoDB database.

## Objectives

- Develop a responsive student management dashboard.
- Implement Create, Read, Update and Delete (CRUD) operations.
- Connect the frontend with a backend REST API.
- Store and retrieve student records using MongoDB.
- Implement search and filtering functionality.
- Test and debug database and application-level operations.

## Technologies Used

| Layer | Technologies |
|---|---|
| Frontend | React.js, Vite, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| API Communication | Axios, REST API |
| Development Tools | VS Code, Postman, Git, GitHub |
| Deployment | Vercel, Render |

## Features

- **Dashboard:** Displays student statistics and department information.
- **Add Student:** Create new student records.
- **View Student:** View individual student profiles.
- **Edit Student:** Update existing student information, including roll number.
- **Delete Student:** Remove student records.
- **Search:** Search student records using relevant details.
- **Filter:** Filter students by department and academic year.
- **Database Integration:** Persist student information in MongoDB.

## Project Structure

```text
Student-Management-System/
│
├── backend/
│   ├── models/
│   │   └── Student.js
│   ├── routes/
│   │   └── studentRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .gitignore
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── StudentProfile.jsx
│   │   │   └── StudentProfile.css
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Installation and Setup

### Prerequisites

- Node.js and npm
- MongoDB Atlas account
- Git
- Visual Studio Code

### 1. Clone the Repository

```bash
git clone https://github.com/mohammedalmas-csm98/FS-LAB.git
```

Navigate to the project directory:

```bash
cd "FS-LAB/CASE STUDY/Student-Management-System"
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend:

```bash
npm run dev
```

The backend runs locally at:

`http://localhost:5000`

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Set the frontend API environment variable when running against the deployed backend:

```env
VITE_API_URL=https://studia-backend-orll.onrender.com/api
```

Open the local URL displayed by Vite, usually:

`http://localhost:5173`

## API Endpoints

Local base URL: `http://localhost:5000/api/students`

Production base URL: `https://studia-backend-orll.onrender.com/api/students`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/` | Add a student |
| GET | `/` | Retrieve all students |
| PUT | `/:id` | Update a student |
| DELETE | `/:id` | Delete a student |

## Testing and Debugging

The following operations were tested:

- Adding student records.
- Retrieving student records from MongoDB.
- Updating student details.
- Editing roll numbers.
- Viewing individual student profiles.
- Deleting student records.
- Checking whether updated records appear on the dashboard.

Postman was used to verify backend API operations, and the application was tested through the browser.

The deployed application was also tested to verify frontend-backend communication and CRUD functionality.

## Case Study: Problem and Resolution

**Problem:** The application successfully added student records, but updated records were not consistently reflected in the user interface.

**Possible causes investigated:**

- Database update operation.
- Backend API response.
- Frontend API request.
- React state refresh.
- Error handling and validation.

**Resolution:** The update workflow was examined across the frontend, backend and database. The application was tested by performing CRUD operations and verifying the resulting records.

## Deployment

The application is deployed using the following services:

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

### Live Application Links

- Frontend: https://studia-frontend.vercel.app
- Backend: https://studia-backend-orll.onrender.com
- GitHub Repository: https://github.com/mohammedalmas-csm98/FS-LAB

## Author

**Mohammed Almas**

Full Stack Web Development – Case Study

GitHub: https://github.com/mohammedalmas-csm98/FS-LAB

---

*Developed as part of the Full Stack Web Development Lab Case Study.*
