// // book.controller.ts//
import express from"express"
import { schemaBook } from "../models/book.model";
 export const bookRouters = express.Router()

bookRouters.post('/books', async (req, res) => {
    const bookBody = req.body
    const book = await schemaBook.create(bookBody)
    res.status(201).json({
        succese: true,
        message: "Book er Data Insert Oice",
        book: book
    })
})





