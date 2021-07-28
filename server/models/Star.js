import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Star = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    density: { type: Number }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Star
