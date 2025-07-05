// // book.controller.ts//
import express from "express"
import { schemaBook } from "../models/book.model";
export const bookRouters = express.Router()

bookRouters.post('/', async (req, res) => {
    try {
        const bookBody = req.body
        const book = await schemaBook.create(bookBody)
        res.status(201).json({
            succese: true,
            message: "Book created successfully",
            book: book
        })
    } catch (error) {
        console.error('Error adding book:', error); // <--- এরর লগ করু
        res.status(400).json({
            success: false,
            message: error,
        });
    }
})

bookRouters.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const book = await schemaBook.findById(id)
        res.status(201).json({
            succese: true,
            message: "Book retrieved successfully",
            book: book
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Invalid ID format',
        });
    }
})





// filter//

bookRouters.get('/', async (req, res) => {
    try {
        const genre = req.query.genre;
        const sortBy = req.query.sortBy;
        const sort = req.query.sort;
        const limit = req.query.limit;
        const book = await schemaBook

            .find(genre ? { genre: genre } : {})
            .sort(sortBy ? { [sortBy as string]: sort === 'desc' ? -1 : 1 } : {})
            .limit(limit ? +limit : 50);

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch books',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }


})



// filter//

bookRouters.put('/:bookId', async (req, res) => {
    try {
        const bookId = req.params.bookId
        const bookBody = req.body
        const book = await schemaBook.findByIdAndUpdate(bookId, bookBody, { new: true })
        res.status(201).json({
            succese: true,
            message: "Book updated successfully",
            book: book
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Invalid ID format',
        });
    }
})


bookRouters.delete('/:bookId', async (req, res) => {
    try {
        const bookId = req.params.bookId
        const book = await schemaBook.findByIdAndDelete(bookId)
        res.status(201).json({
            succese: true,
            message: "Book deleted successfully",
            data: null
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Invalid ID format',
        });
    }
})





