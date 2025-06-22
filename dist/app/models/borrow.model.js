"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaborrow = void 0;
// borrow.model.ts//
const mongoose_1 = require("mongoose");
const borrowSchema = new mongoose_1.Schema({
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "schemaBook",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    dueDate: {
        type: mongoose_1.Schema.Types.Date,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.schemaborrow = (0, mongoose_1.model)('schemaborrow', borrowSchema);
