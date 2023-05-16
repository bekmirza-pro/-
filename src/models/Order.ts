import mongoose, { Schema, Document } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

export interface IOrder extends Document {
    _id: string
    creator: string
    category: string
    number: number
    cost: string
    madeAt: number
    created_at: Date
}

const OrderSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    creator: {
        type: String,
        ref: 'User'
    },
    category: {
        type: String,
        ref: 'Category'
    },
    number: {
        type : Number
    },
    cost:{
        type: String
    },
    madeAt: {
        type: Number,
        default: Date.now
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model<IOrder>('Order', OrderSchema)
