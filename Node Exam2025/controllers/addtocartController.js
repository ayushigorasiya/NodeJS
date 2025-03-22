const AddTocartModel = require('../models/addtocartModel');

const AddToCartPage = async (req, res) => {
    try {
        const cproduct = await AddTocartModel.find({}).populate('productId');
        return res.render('addtocart', {
            cproduct
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const AddToCart = async (req, res) => {
    try {
        const id = req.body?.productid;
        await AddTocartModel.create({
            productId: id
        });
        return res.redirect('/addtocartpage');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const DeleteToCart = async (req, res) => {
    try {
        const id = req.query?.id;
        await AddTocartModel.findByIdAndDelete(id);
        return res.redirect('/addtocartpage');
    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports = {
    AddToCartPage, AddToCart, DeleteToCart
}