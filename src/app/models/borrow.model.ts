// borrow.model.ts//
import mongoose, { model, Schema } from "mongoose";
import { IBorrow } from "../interface/borrow.interface";

const borrowSchema = new Schema<IBorrow>({
    book: {
        type: Schema.Types.ObjectId,
        ref: "schemaBook",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    dueDate: {
        type: Schema.Types.Date,
        required: true
    }
},
    {
        versionKey: false,
        timestamps: true
    }

);

export const schemaborrow = model('schemaborrow', borrowSchema)