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
        min: [1, 'Quantity must be a positive number']
    },
    dueDate: {
        type: mongoose_1.Schema.Types.Date,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});
borrowSchema.pre('save', function (next) {
    if (this.dueDate < new Date()) {
        return next(new Error('Due date must be in the future'));
    }
    next();
});
exports.schemaborrow = (0, mongoose_1.model)('schemaborrow', borrowSchema);
