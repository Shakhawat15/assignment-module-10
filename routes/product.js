const express = require('express');
const router = express.Router();
const {getAllProduct} = require("../controllers/ProductController");

router.get('/products', getAllProduct)

module.exports = router;