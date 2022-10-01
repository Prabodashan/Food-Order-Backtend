const express = require("express");
const router = express.Router();

const {
  getProducts,
  setProduct,
  deleteProduct,
  updateProduct,
} = require("../Controllers/ProductController");

const { protect } = require("../Middleware/AuthMiddleware");

//product routes

router.route("/").get(getProducts).post(protect, setProduct);
router.route("/:id").delete(protect, deleteProduct).put(protect, updateProduct);

module.exports = router;
