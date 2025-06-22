"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaBook = void 0;
// book.model.ts//
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: String,
    author: String,
    genre: {
        type: String,
        enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY']
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
}, {
    versionKey: false,
    timestamps: true
});
bookSchema.methods.updateAfterBorrow = function (quantity) {
    return __awaiter(this, void 0, void 0, function* () {
        this.copies -= quantity;
        if (this.copies <= 0) {
            this.available = false;
        }
        yield this.save();
    });
};
bookSchema.statics.borrowBook = function (bookId, quantity) {
    return __awaiter(this, void 0, void 0, function* () {
        const book = yield this.findById(bookId);
        if (!book)
            throw new Error('Book not found');
        if (book.copies < quantity)
            throw new Error('Not enough copies available');
        yield book.updateAfterBorrow(quantity);
        return book;
    });
};
exports.schemaBook = (0, mongoose_1.model)('schemaBook', bookSchema);
