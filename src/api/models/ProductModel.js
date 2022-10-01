const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Please add title"] },
    category: { type: String, required: [true, "Please add a category"] },
    description: { type: String, required: [true, "Please add description"] },
    price: { type: Number, required: [true, "Please add a price"] },
    star: { type: String, required: [true, "Please add a star"] },
    sizes: [{ type: Object, required: [true, "Please add sizes"] }],
    image: { type: String, required: [true, "Please add a image"] },
  },
  {
    timestamps: true, //for date
  }
);

module.exports = mongoose.model("Product", productSchema);
