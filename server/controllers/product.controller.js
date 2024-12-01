const axios = require('axios');
const Product = require('../models/product.model');

let productCache = {};

exports.getProductsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    if (productCache[category]) {
      console.log('Serving from cache for category:', category);
      return res.status(200).json({ success: true, data: productCache[category] });
    }
    const productsFromDb = await Product.find({ category });
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    const productsFromApi = response.data;
    const combinedProducts = [...productsFromDb, ...productsFromApi];
    productCache[category] = combinedProducts;
    res.status(200).json({ success: true, data: combinedProducts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.addProduct = async (req, res) => {
  const { title, price, description, category, image } = req.body;
  try {
    const newProduct = new Product({ title, price, description, category, image });
    await newProduct.save();

    if (productCache[category]) {
      delete productCache[category]; 
    }

    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
