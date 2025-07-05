// // app.ts
import express from "express";
import cors from 'cors'; 
// import { bookRouters } from "./app/controllers/book.controller";
import { bookRouters } from "./app/controllers/book.controller";
import { borrowRouters } from "./app/controllers/borrow.controoler";
 const app = express()
 app.use(express.json())
app.use(express.json()); 


app.use(cors());

app.use(cors({
  origin: 'https://libary-frontend.vercel.app',
}));


app.use('/api/books',bookRouters)
app.use('/api/borrow',borrowRouters)


 app.get('/', (req, res) => {
    res.send('📚 Library Management API is running!');
});
export default app
