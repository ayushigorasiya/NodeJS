const CategoryModel = require('../models/CategoryModel');
const SubcategoryModel = require('../models/SubcategoryModel');
const ExSubcategoryModel = require('../models/ExsubcategoryModel');
const ProductModel = require('../models/ProductModel');

const AddProductPage = async (req , res) => {
    try {
        let category = await CategoryModel.find({ status :'active'});
        return res.render('product/add_product', {
            category : category
        })
    }
    catch(err){
        console.log(err);
        return false
        
    }
}


//Ajax Start
const AjaxSub_CategorywiseRecord = async(req , res) => {
    let subcategoryid = req.query.subcategoryid;
    try{
        let subcategory = await ExSubcategoryModel.find({subcategoryId :subcategoryid})
        return res.status(200).send({
            success:true,
            message: 'record fetch successfully',
            subcategory
            
        })
    }
    
    catch(err) {
        console.log(err);
        return false
    }
}
//Ajax End
const viewProductPage = async (req, res) => {
    try {
        let product = await ProductModel.find({}).populate('categoryId').populate('subcategoryId').populate('exsubcategoryId');
        return res.render('product/view_product', {
            product: product
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const InsertProduct = async (req,res) => {
    try{
        const {category , subcategory , exsubcategory , name , price , qty} = req.body;
        console.log(req.body);
        console.log(req.file);
        
        
        await ProductModel.create({
            categoryId: category,
             subcategoryId: subcategory,
             exsubcategoryId: exsubcategory,
             product: name,
             price: price,
             qty: qty,
                image : req.file.path
            
         })
    
        req.flash('success', 'product create successfully');
        return res.redirect('/product/addproductpage')
    }
    catch(err){
        console.log(err);
        return false    
    }
}
module.exports ={
    viewProductPage,AddProductPage,AjaxSub_CategorywiseRecord,InsertProduct
}