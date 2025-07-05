"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // app.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import { bookRouters } from "./app/controllers/book.controller";
const book_controller_1 = require("./app/controllers/book.controller");
const borrow_controoler_1 = require("./app/controllers/borrow.controoler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cors_1.default)({
    origin: 'https://libary-frontend.vercel.app',
}));
app.use('/api/books', book_controller_1.bookRouters);
app.use('/api/borrow', borrow_controoler_1.borrowRouters);
app.get('/', (req, res) => {
    res.send('📚 Library Management API is running!');
});
exports.default = app;
