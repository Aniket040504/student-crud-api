# 🧑‍🎓 Student CRUD API (JavaScript)

This is a simple REST API built with **Node.js**, **Express**, and **MongoDB**.  
It supports basic **Create, Read, Update, Delete (CRUD)** operations for managing student records.  
> 🚫 Authentication is **not included** in this version.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose

---

## API Endpoints

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| GET    | /api/students    | Get all students       |
| GET    | /api/students/:id| Get a single student   |
| POST   | /api/students    | Create a new student   |
| PUT    | /api/students/:id| Update a student       |
| DELETE | /api/students/:id| Delete a student       |

---

## Testing

You can test the endpoints using:

- **Postman**: [Download here](https://www.postman.com/downloads/)
- **cURL** or any REST client

---

## Sample Responses

### Get All Students
![Get All Students](./screenshots/get-all.png)

### Add Student
![Add Student](./screenshots/post-student.png)
