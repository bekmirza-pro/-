import mongoose, { Schema, Document } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

export interface IAdmin extends Document {
    _id: string
    name: string
    phone_number: number
    gmail: string
    password: string
    photo: string
    type: string
}

const AdminSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: {
        type: String
    },
    phone_number: {
        type: Number,
        unique: true,
        required: true
    },
    gmail:{
        type: String
    },
    password: {
        type: String
    },
    photo:{
        type: String
    },
    type: {
        type: String,
        default: 'admin'
    }
})

export default mongoose.model<IAdmin>('Admin', AdminSchema)
