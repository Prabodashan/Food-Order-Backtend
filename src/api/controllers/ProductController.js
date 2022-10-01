const Product = require("../Models/ProductModel");

// @desc    Get products
// @route   GET /api/products
// @access  Private
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return res
      .status(500)
      .json({ message: Object.entries(error.errors)[0][1].message });
  }
};

// @desc    Set product
// @route   POST /api/products
// @access  Private
const setProduct = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const product = await Product.create({
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        star: req.body.star,
        sizes: req.body.sizes,
        image: req.body.image,
      });

      return res.status(200).json(product);
    } catch (error) {
      return res
        .status(500)
        .json({ message: Object.entries(error.errors)[0][1].message });
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private
const updateProduct = async (req, res) => {
  if (req.user.isAdmin) {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(400).json({ message: "product not found" });
    }

    try {
      const updatedproduct = await product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

      res.status(200).json(updatedproduct);
    } catch (error) {
      return res
        .status(500)
        .json({ message: Object.entries(error.errors)[0][1].message });
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private
const deleteProduct = async (req, res) => {
  if (req.user.isAdmin) {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(400).json({ message: "product not found" });
    }

    try {
      await product.remove();

      return res.status(200).json({ id: req.params.id });
    } catch (error) {
      return res
        .status(500)
        .json({ message: Object.entries(error.errors)[0][1].message });
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
};

module.exports = {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
};
