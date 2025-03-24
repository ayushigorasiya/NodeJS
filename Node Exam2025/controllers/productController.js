const path = require('path')
const fs = require('fs')
const ProductModel = require('../models/productModel');
const AddTocartModel = require('../models/addtocartModel');

const AddProductPage = async (req, res) => {
    return res.render('add');
}
const viewProductPage = async (req, res) => {
    try {
        let product = await ProductModel.find({})
        return res.render('view', {
            product: product
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
const InsertProduct = async (req, res) => {
    try {
        const { editid, name, price, description, qty } = req.body;
    
    
        
        if (editid) {
            let product = await ProductModel.findById(editid);
            if (req.file) {
                await ProductModel.findByIdAndUpdate(editid, {
                    product: name,
                    price: price,
                    qty: qty,
                    discription: description,
                    image: req.file.path
                })
            } else {
                await ProductModel.findByIdAndUpdate(editid, {
                    product: name,
                    price: price,
                    qty: qty,
                    discription: description,
                    image: product.image
                })
            }
            return res.redirect('/product');
        }
        else {
            await ProductModel.create({
                product: name,
                price: price,
                qty: qty,
                discription: description,
                image: req.file?.path
            })
            return res.redirect('/product')
        }
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
const deleteProduct = async (req, res) => {
    try {
        let id = req.query?.id;
        let single = await ProductModel.findById(id);
        if (fs.existsSync(single?.image)) {
            fs.unlinkSync(single?.image)
        }
        await AddTocartModel.deleteOne({ productId: id });
        await ProductModel.findByIdAndDelete(id);
        return res.redirect('/product');
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
const editProduct = async (req, res) => {
    try {
        let id = req.query?.id;
        let single = await ProductModel.findById(id)
        return res.render('edit', {
            single
        })
    }
    catch (err) {
        console.log(err);
        return false;
    }
}


module.exports = {
    AddProductPage, InsertProduct, deleteProduct, editProduct, viewProductPage
}
