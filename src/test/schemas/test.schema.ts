/* eslint-disable prettier/prettier */
import { Schema } from "mongoose";

export const testSchema = new Schema({
    name: { type: String, required: true },
    last_name: String,
    number: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
})