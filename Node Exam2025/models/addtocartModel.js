const mongoose = require('mongoose');
const addtocartSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    }
})
const cart = mongoose.model("cart", addtocartSchema);

module.exports = cart;

