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
          min: [1, 'Quantity must be a positive number']
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

borrowSchema.pre('save', function(next) {
  if (this.dueDate < new Date()) {
    return next(new Error('Due date must be in the future'));
  }
  next();
});

export const schemaborrow = model('schemaborrow', borrowSchema)