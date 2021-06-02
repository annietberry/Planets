import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Star = new Schema(
  {
    Name: { type: String, required: true },
    Size: { type: Number, required: true },
    Color: { type: Number, required: true },
    Age: { type: Number, min: 0, max: 99999 },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Star;
