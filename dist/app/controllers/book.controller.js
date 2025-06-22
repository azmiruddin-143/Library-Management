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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouters = void 0;
// // book.controller.ts//
const express_1 = __importDefault(require("express"));
const book_model_1 = require("../models/book.model");
exports.bookRouters = express_1.default.Router();
exports.bookRouters.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookBody = req.body;
    const book = yield book_model_1.schemaBook.create(bookBody);
    res.status(201).json({
        succese: true,
        message: "Book created successfully",
        book: book
    });
}));
exports.bookRouters.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const book = yield book_model_1.schemaBook.findById(id);
    res.status(201).json({
        succese: true,
        message: "Book retrieved successfully",
        book: book
    });
}));
// filter//
exports.bookRouters.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const genre = req.query.genre;
    const sortBy = req.query.sortBy;
    const sort = req.query.sort;
    const limit = req.query.limit;
    const book = yield book_model_1.schemaBook
        .find(genre ? { genre: genre } : {})
        .sort(sortBy ? { [sortBy]: sort === 'desc' ? -1 : 1 } : {})
        .limit(limit ? +limit : 5);
    res.status(201).json({
        succese: true,
        message: "Books retrieved successfully",
        data: book
    });
}));
// filter//
exports.bookRouters.put('/:bookId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const bookBody = req.body;
    const book = yield book_model_1.schemaBook.findByIdAndUpdate(bookId, bookBody, { new: true });
    res.status(201).json({
        succese: true,
        message: "Book updated successfully",
        book: book
    });
}));
exports.bookRouters.delete('/:bookId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const book = yield book_model_1.schemaBook.findByIdAndDelete(bookId);
    res.status(201).json({
        succese: true,
        message: "Book deleted successfully",
        data: null
    });
}));
