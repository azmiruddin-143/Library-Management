// // book.controller.ts//
import express from "express"
import { schemaBook } from "../models/book.model";
export const bookRouters = express.Router()

bookRouters.post('/', async (req, res) => {
    const bookBody = req.body
    const book = await schemaBook.create(bookBody)
    res.status(201).json({
        succese: true,
        message: "Book er Data Insert Oice",
        book: book
    })
})

bookRouters.get('/:id', async (req, res) => {
    const id = req.params.id
    const book = await schemaBook.findById(id)
    res.status(201).json({
        succese: true,
        message: "Book er one Data Find kora oice",
        book: book
    })
})



// filter//

bookRouters.get('/', async (req, res) => {
    const genre = req.query.genre;
    const sortBy = req.query.sortBy;
    const sort = req.query.sort;
    const limit = req.query.limit;
    const book = await schemaBook

        .find(genre ? { genre: genre } : {})
         .sort(sortBy ? { [sortBy as string]: sort === 'desc' ? -1 : 1 } : {})
        .limit(limit ? +limit : 5);

    res.status(201).json({
        succese: true,
        message: "Book er All Data Find kora oice",
        book: book
    })
})



// filter//

bookRouters.put('/:bookId', async (req, res) => {
    const bookId = req.params.bookId
    const bookBody = req.body
    const book = await schemaBook.findByIdAndUpdate(bookId, bookBody, { new: true })
    res.status(201).json({
        succese: true,
        message: "Book er copies Update kora oice",
        book: book
    })
})


bookRouters.delete('/:bookId', async (req, res) => {
    const bookId = req.params.bookId
    const book = await schemaBook.findByIdAndDelete(bookId)
    res.status(201).json({
        succese: true,
        message: "Book er one data Delete kora oice",
        book: book
    })
})





