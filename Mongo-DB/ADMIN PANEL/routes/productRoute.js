const express = require('express')
const multer = require('multer');
const routes = express.Router();

const {viewProductPage,AddProductPage,AjaxSub_CategorywiseRecord,InsertProduct, deleteProduct,changeStatus , editProduct}= require('../controllers/productController');
const st = multer.diskStorage({
    destination : (req, res, cb) => {
        cb(null,'uploads');
    },
    filename : (req, file, cb) => {
        cb(null,`${file.fieldname}-${Math.floor(Math.random() * 1000000)}`);
    }
})
const fileUpload = multer({storage : st}).single('image');


routes.get('/',viewProductPage);
routes.get('/addproductpage',AddProductPage);
routes.get('/ajaxsub_categorywiserecord',AjaxSub_CategorywiseRecord);
routes.post('/insertproduct' ,fileUpload,InsertProduct)
routes.get('/deleteproduct' ,deleteProduct)
routes.get ('/changestatus' , changeStatus)
routes.get('/editproduct' ,editProduct)



module.exports = routes;