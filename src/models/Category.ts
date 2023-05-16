import mongoose, { Schema, Document } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

export interface ICategory extends Document {
    _id: string
    name: string
    rental_price: string
    technical_characteristics: string
    images: string
    created_at: Date
}

const CategorySchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: {
        type: String
    },
    rental_price: {
        type: String
     },
    technical_characteristics:{
        type: String
    },
    images:{
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model<ICategory>('Category', CategorySchema)
