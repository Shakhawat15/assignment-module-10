const Product = require('../models/ProductModel');

exports.getAllProduct = async (req, res) => {
    try {
        const products = await Product.find({}, {
            _id: 0,
            name: 1,
            price: 1
        });
        res.json(products);
    } catch (e) {
        console.log(e)
    }
}