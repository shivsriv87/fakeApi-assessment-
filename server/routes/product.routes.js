const express = require('express');

const {getProductsByCategory,addProduct,getAllProducts,} = require('../controllers/product.controller');

const router = express.Router();

router.get('/category/:category', getProductsByCategory);

router.post('/', addProduct); 


router.get('/', getAllProducts);


module.exports = router;
