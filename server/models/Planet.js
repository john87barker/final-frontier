import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Planet = new Schema(
  {
    name: { type: String, required: true },
    magic: { type: String, required: true },
    starId: { type: ObjectId, ref: 'Stars' }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Planet
