const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
const product = mongoose.model("product", ProductSchema);

module.exports = product;

