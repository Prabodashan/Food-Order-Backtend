//Create table for category
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    value: { type: String, required: [true, "Please add value"] },
    label: { type: String, required: [true, "Please add label"] },
  },
  {
    timestamps: true, //for date
  }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
