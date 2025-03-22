const express = require('express')
const multer = require('multer');
const routes = express.Router();

const { viewProductPage, AddProductPage, InsertProduct, deleteProduct, editProduct } = require('../controllers/productController');
const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Math.floor(Math.random() * 1000000)}`);
    }
})
const fileUpload = multer({ storage: st }).single('image');


routes.get('/product', viewProductPage);
routes.get('/addproductpage', AddProductPage);
routes.post('/insertproduct', fileUpload, InsertProduct)
routes.get('/deleteproduct', deleteProduct)
routes.get('/editproduct', editProduct)

module.exports = routes;