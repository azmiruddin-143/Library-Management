
import mongoose, { model, Schema } from "mongoose";

const borrowSchema = new Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    quantity: {
        type: Number,
        require: true,
        min: 1
    },
    dueDate: {
        type: Date,
        require: true
    }
},
    {
        versionKey: false,
        timestamps: true
    }

);

export const schemaborrow = model('schemaborrow', borrowSchema)