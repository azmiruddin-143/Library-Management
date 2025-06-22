
// book.model.ts////
import { model, Schema } from "mongoose";
import { BookModel, IBook } from "../interface/book.interface";


const bookSchema = new Schema<IBook>({
    title: String,
    author: String,
    genre: {
        type: String,
        enum: ['FICTION', 'NON_FICTION','SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY']
    },
    isbn: {
        type: String,
        required: true
    },
    description: String,
    copies: {
        type: Number
    },
    available: Boolean
},
  {
        versionKey: false,
        timestamps: true
    }

);

bookSchema.pre('save', function(next) {
  if (this.title) this.title = this.title.trim();
  next();
});

bookSchema.methods.updateAfterBorrow = async function (quantity: number): Promise<void> {
    this.copies -= quantity;
    if (this.copies <= 0) {
        this.available = false;
    }
    await this.save();
};


bookSchema.statics.borrowBook = async function (bookId: string, quantity: number): Promise<IBook> {
    const book = await this.findById(bookId);
    if (!book) throw new Error('Book not found');
    if (book.copies < quantity) throw new Error('Not enough copies available');

    await book.updateAfterBorrow(quantity);
    return book;
};


export const schemaBook = model<IBook,BookModel>('schemaBook', bookSchema)