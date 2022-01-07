import * as mongoose from 'mongoose'
import NewsSchema from '../models/NewsSchema'

// function model create a colection news based on NewsSchema
export default mongoose.model("news", NewsSchema)