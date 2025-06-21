
// book.model.ts//
import { model, Schema } from "mongoose";

const bookSchema = new Schema({
    title: String,
    author: String,
    genre: {
        type: String,
        enum: ['AICTION', 'NON_FICTION','SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY']
    },
    isbn: {
        type: String,
        require: true
    },
    description: String,
    copies: {
        type: Number
    },
    available: Boolean
});

export const schemaBook = model('schemaBook', bookSchema)