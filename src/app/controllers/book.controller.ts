// // book.controller.ts//
import express from"express"
import { schemaBook } from "../models/book.model";
 export const bookRouters = express.Router()

bookRouters.post ('/books', async (req, res) => {
    const bookBody = req.body
    const book = await schemaBook.create(bookBody)
    res.status(201).json({
        succese: true,
        message: "Book er Data Insert Oice",
        book: book
    })
})

bookRouters.get ('/books/:id', async (req, res) => {
    const id = req.params.id
    const book = await schemaBook.findById(id)
    res.status(201).json({
        succese: true,
        message: "Book er one Data Find kora oice",
        book: book
    })
})


bookRouters.get ('/books', async (req, res) => {
    // const bookBody = req.body
    const book = await schemaBook.find()
    res.status(201).json({
        succese: true,
        message: "Book er All Data Find kora oice",
        book: book
    })
})




