
// borrow routers//
import express from "express"
import { schemaborrow } from "../models/borrow.model"
import { schemaBook } from "../models/book.model";
export const borrowRouters = express.Router()

borrowRouters.post('/', async (req, res) => {
    try {
        const { book, quantity, dueDate } = req.body;

        const updatedBook = await schemaBook.borrowBook(book, quantity);

        const newBorrow = await schemaborrow.create({ book, quantity, dueDate });

        res.status(201).json({
            success: true,
            message: 'Book borrowed successfully',
            data: { borrow: newBorrow, updatedBook }
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});


borrowRouters.get('/', async (req, res) => {
  try {
    const summary = await schemaborrow.aggregate([
      {
        $group: {
          _id: '$book',
          totalQuantity: { $sum: '$quantity' }
        }
      },
      {
     
        $lookup: {
          from: 'schemabooks', 
          localField: '_id',
          foreignField: '_id',
          as: 'book'
        }
      },
      {
        $unwind: '$book'
      },
      {
        $project: {
          _id: 0,
          book: {
            title: '$book.title',
            isbn: '$book.isbn'
          },
          totalQuantity: 1
        }
      }
    ]);

    res.status(200).json({
      success: true,
      message: 'Borrowed books summary retrieved successfully',
      data: summary
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});