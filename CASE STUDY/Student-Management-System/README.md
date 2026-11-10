# STUDIA – Student Management System

A full-stack web application designed to manage student information through a centralized and user-friendly institutional dashboard.

## Project Overview

**STUDIA – Student Management System** is a web-based application developed as part of the Full-Stack Web Development case study.

The system allows users to manage student records efficiently through a React frontend, a Node.js and Express backend, and a MongoDB database.

The application supports student registration, record retrieval, profile viewing, updating, deletion, searching and filtering.

## Live Deployment

The application is deployed using Vercel, Render and MongoDB Atlas.

| Component | Platform | URL |
|---|---|---|
| Frontend | Vercel | https://studia-frontend.vercel.app |
| Backend | Render | https://studia-backend-orll.onrender.com |
| Students API | Render | https://studia-backend-orll.onrender.com/api/students |
| Database | MongoDB Atlas | Cloud-hosted MongoDB |

**Deployment status:**
- Frontend: Production deployment Ready.
- Backend: Web service Live.
- Database: Connected to MongoDB Atlas.

*Note: Render's free service may spin down after inactivity, so the first request can take additional time.*

## Technologies Used

### Frontend
- React.js
- Vite
- JavaScript
- Axios
- CSS
- Lucide React

### Backend
- Node.js
- Express.js
- Mongoose
- REST API

### Database
- MongoDB Atlas

### Deployment and Version Control
- Vercel – Frontend hosting
- Render – Backend hosting
- GitHub – Source code management

## Features

### 1. Dashboard
- Institutional overview.
- Total student count.
- Department summary.
- Recent student records.

### 2. Student Management
- Add new student records.
- View all registered students.
- View individual student profiles.
- Edit existing student information.
- Delete student records with confirmation.

### 3. Search and Filtering
- Search student records.
- Filter students by department.
- Filter students by academic year.

### 4. Student Information

The core student information managed by the application includes:

- Student name
- Roll number
- Email address
- Department
- Academic year

### 5. Data Validation
- Student information validation.
- Duplicate roll-number handling.
- Error handling for unsuccessful API operations.

## System Architecture

The application follows a three-layer architecture.

```text
             USER
               |
               v
       REACT FRONTEND
            (Vercel)
               |
          Axios / HTTP
               |
               v
       NODE.JS + EXPRESS
             (Render)
               |
            Mongoose
               |
               v
        MONGODB ATLAS
          (Database)
```

The frontend communicates with the backend through REST API endpoints. The backend uses Mongoose to interact with MongoDB Atlas and perform database operations.

## Database Design

The application uses MongoDB Atlas for persistent storage.

| Database Component | Name |
|---|---|
| Cluster | AURAFIT (existing cluster) |
| Database | test |
| Collection | students |

Each student is stored as a MongoDB document.

### Main Student Fields

| Field | Description |
|---|---|
| _id | MongoDB document identifier |
| name | Student full name |
| rollNumber | Student roll number |
| email | Student email |
| department | Academic department |
| year | Academic year |
| createdAt | Record creation timestamp |
| updatedAt | Last update timestamp |

The `createdAt` and `updatedAt` fields are maintained through Mongoose timestamps, as observed in the stored document.

## REST API Endpoints

The backend exposes the following student-management endpoints:

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/api/students` | Retrieve all students |
| POST | `/api/students` | Add a new student |
| PUT | `/api/students/:id` | Update a student |
| DELETE | `/api/students/:id` | Delete a student |

## Local Installation and Setup

### Prerequisites

Install the following before running the project:

- Node.js and npm
- Git
- MongoDB Atlas account
- Code editor such as Visual Studio Code

### 1. Clone the Repository

```bash
git clone https://github.com/mohammedalmas-csm98/FS-LAB.git
```

Navigate to the project directory:

```bash
cd "FS-LAB/CASE STUDY/Student-Management-System"
```

### 2. Configure the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

Start the backend development server:

```bash
npm run dev
```

The backend will run locally at:

```text
http://localhost:5000
```

### 3. Configure the Frontend

Open another terminal:

```bash
cd "FS-LAB/CASE STUDY/Student-Management-System/frontend"
npm install
```

Create a `.env` file inside the frontend folder:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will be available at the local URL displayed by Vite, normally:

```text
http://localhost:5173
```

## Environment Variables

| Variable | Location | Purpose |
|---|---|---|
| MONGO_URI | Backend | MongoDB Atlas connection string |
| PORT | Backend | Server port |
| VITE_API_URL | Frontend | Backend API base URL |

For production deployment, the frontend uses:

```env
VITE_API_URL=https://studia-backend-orll.onrender.com/api
```

**Security:** Never commit `.env` files, database credentials or private connection strings to GitHub. Configure production secrets through the hosting platform's environment-variable settings.

## Case Study: Debugging Student Records Not Displaying After Updates

### Problem Statement

A deployed Student Management System successfully adds student records but fails to display updated records.

### Possible Causes

1. Frontend React state is not refreshed after a successful database update.
2. Incorrect API endpoint or backend URL.
3. Asynchronous requests are not properly awaited.
4. Backend update route uses an incorrect document identifier.
5. Database or collection mismatch.
6. Mongoose schema and frontend field names do not match.
7. API response errors are not handled correctly.
8. Browser caching or an outdated frontend deployment.

### Systematic Debugging Procedure

1. Reproduce the issue and identify the expected result.
2. Inspect the browser Network tab to verify the API request and response.
3. Check the HTTP status code and request payload.
4. Examine backend logs for database or validation errors.
5. Verify the updated document in MongoDB Atlas.
6. Test the GET endpoint and confirm that it returns the latest record.
7. Check whether the frontend refreshes React state after a successful update.
8. Verify the API base URL and environment variables.
9. Reload the application and confirm that the updated record remains visible.

This procedure helps identify whether the problem originates in the frontend, backend, database or deployment configuration.

*The above describes the case-study debugging scenario and possible causes; it does not imply that every listed issue occurred in the final deployed application.*

## Testing and Validation

The application was tested for its main student-management workflows.

| Test Case | Expected Result |
|---|---|
| Open dashboard | Dashboard loads successfully |
| View students | Student records are displayed |
| Add student | New student record is stored |
| View profile | Selected student details are displayed |
| Edit student | Existing student details are updated |
| Delete student | Confirmation is requested before deletion |
| Duplicate roll number | Duplicate record is rejected |
| Database verification | Student document is visible in MongoDB Atlas |

The deployed application was tested for add, edit, view and delete operations.

## Application Screenshots

Screenshots of the application and deployment evidence are maintained separately in the project repository.

The screenshots include:

1. Dashboard
2. Student directory
3. Add student form
4. Student profile
5. Edit student form
6. Delete confirmation
7. MongoDB Atlas database
8. Render backend deployment
9. Vercel frontend deployment

## Deployment Configuration

### Frontend – Vercel

- Framework: Vite
- Root directory: `CASE STUDY/Student-Management-System/frontend`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `VITE_API_URL`

### Backend – Render

- Runtime: Node.js
- Root directory: `CASE STUDY/Student-Management-System/backend`
- Build command: `npm install`
- Start command: `npm start`
- Environment variable: `MONGO_URI`

### Database – MongoDB Atlas

- Cloud-hosted MongoDB database.
- Database: `test`
- Collection: `students`
- Connected through the backend using Mongoose.

## Future Enhancements

- Role-based authentication for administrators, faculty and students.
- Pagination for large student datasets.
- Student attendance management.
- Export student records to PDF and Excel.
- Advanced reporting and analytics.
- Audit logs for student record modifications.
- Automated testing and enhanced monitoring.

## Conclusion

STUDIA demonstrates the development and deployment of a full-stack Student Management System using React, Node.js, Express.js and MongoDB.

The application provides essential student-management functionality through a user-friendly interface and a cloud-hosted backend connected to MongoDB Atlas.

The project also demonstrates REST API development, database integration, CRUD operations, debugging methodology, environment-variable configuration and cloud deployment using Vercel and Render.

---

**Project:** STUDIA – Student Management System  
**Course:** Full-Stack Web Development  
**Student:** Mohammed Almas  
**Registration Number:** A24126552098  
**Faculty / Guide:** P. Santosh Kumar  
**Academic Year / Semester:** 3rd Year – 1st Semester
