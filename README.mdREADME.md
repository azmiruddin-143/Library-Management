# 📘 Library Management System API

A full-featured REST API built with **Express.js**, **TypeScript**, and **MongoDB**, designed to handle core functionalities of a library — from managing books to borrowing and tracking due dates.

---

## 🔧 Core Functionalities

- ✅ **Add New Books** with essential details like title, author, genre, and number of copies
- 🔍 **Retrieve Book List** with support for filtering, sorting, and limiting
- 🆔 **Get Specific Book** by its MongoDB ObjectId
- ✏️ **Update Book Information** easily by ID
- ❌ **Delete Books** if no longer available
- 📦 **Borrow Book** with quantity and due date validation
- 📊 **Borrow Statistics** (admin report) using aggregation

---

## 🧪 API Endpoints Overview

### 📚 1. `POST /api/books`
Add a new book.  
**Body:**  
```json
{
  "title": "Book Title",
  "author": "Author Name",
  "genre": "FICTION",
  "isbn": "1234567890",
  "copies": 5
}
