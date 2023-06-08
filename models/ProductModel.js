const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const productSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {versionKey: false})

const productModel = model('Product', productSchema);
module.exports = productModel;