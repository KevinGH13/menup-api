/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface Test extends Document {
    readonly name: string;
    readonly last_name: string;
    readonly number: string;
}