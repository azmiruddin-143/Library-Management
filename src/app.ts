// // app.ts
import express from "express";
import { bookRouters } from "./app/controllers/book.controller";
 const app = express()
 app.use(express.json())

 app.use('/api',bookRouters)

 app.get('/', (req, res) => {
    res.send('📚 Library Management API is running!');
});
export default app
