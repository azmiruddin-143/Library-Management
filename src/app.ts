// // app.ts
import express from "express";
// import { bookRouters } from "./app/controllers/book.controller";
import { bookRouters } from "./app/controllers/book.controller";
import { borrowRouters } from "./app/controllers/borrow.controoler";
 const app = express()
 app.use(express.json())

app.use('/api/books',bookRouters)
app.use('/api/borrow',borrowRouters)


 app.get('/', (req, res) => {
    res.send('📚 Library Management API is running!');
});
export default app
