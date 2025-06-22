# Library Management System

A RESTful API-based Library Management System built with **Express.js**, **TypeScript**, and **MongoDB** (via Mongoose). This system allows users to manage books, borrow books with validation and logic, and retrieve analytics using aggregation pipelines.

---

## 🚀 Features

### ✅ Core Functionalities
- Add, update, delete, and retrieve books.
- Borrow books by specifying quantity and due date.
- Automatically update book availability and copies when borrowed.
- Filter books by genre.
- Sort and limit book results via query parameters.

### 🛠️ Technical Features
- Built using **TypeScript** with type-safe models and logic.
- **Schema validation** to ensure required fields and correct formats.
- Implements **business logic** (like copy availability) during borrowing.
- Uses **Mongoose middleware** (`pre` and `post` hooks).
- Includes **instance/static methods** for model-specific logic.
- **Aggregation pipeline** used to calculate total borrowed quantity per book.
- Consistent and structured **API responses**.
- Modular project structure for scalability.

---

## 📁 Project Structure

- controllers/ # Business logic for books and borrow
- models/ # Mongoose schemas and methods
- routes/ # API route definitions
- utils/ # Helper functions (e.g. sendResponse)
- app.ts # Express app setup
- server.ts # Server entry point

---

## 🧑‍💻 Getting Started

### 🔧 Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

# Live Deployment Link : 
### https://library-management-api-mu.vercel.app/

---

### 🛠️ Setup Instructions

#### 1. Clone the Repository
```bash
git clone https://github.com/azmiruddin-143/Library-Management.git
cd library-management