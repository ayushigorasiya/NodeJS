const path = require('path')
const fs = require('fs')
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
        const {editid, category , subcategory , exsubcategory , name , price , qty} = req.body;
        console.log(req.body);
        console.log(req.file);
        if(editid){
            await ProductModel.create({
                categoryId: category,
                 subcategoryId: subcategory,
                 exsubcategoryId: exsubcategory,
                 product: name,
                 price: price,
                 qty: qty,
                image : req.file.path
                
             })
             req.flash('success', 'product updated successfully');
             return res.redirect('/product')

        }
        else{
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
        
        
    }
    catch(err){
        console.log(err);
        return false    
    }
}


const deleteProduct = async(req , res) => {
    try{
        let id = req.query?.id;
        let single =await ProductModel.findByIdAndDelete(id);
        fs.unlinkSync(single?.image)
        req.flash('success' ,' Product Delete Successfully....!')
        return res.redirect('/product');
    }
    catch(err){
        console.log(err);
        return false;
    }
}

const changeStatus = async(req , res) => {
    try{
        const {id , status} = req.query;
        if(status == 'deactive'){
            await ProductModel.findByIdAndUpdate(id , {
                status : 'active'
            })
        }
        else{
            await ProductModel.findByIdAndUpdate(id , {
                status : 'deactive'
            })
        }
        req.flash('success' ,' Category Update Successfully....!')
        return res.redirect('/product');
    }
    catch(err){
        console.log(err);
        return false;
        
    }
}

const editProduct = async (req , res) => {
    try{
        let id = req.query?.id;

        let category = await CategoryModel.find({status:'active'})
        let subcategory = await SubcategoryModel.find({status:'active'})
        let exsubcategory = await ExSubcategoryModel.find({status:'active'})

        let single = await ProductModel.findById(id).populate('categoryId').populate('subcategoryId').populate('exsubcategoryId')

        return res.render('product/edit_product' , {
            single,
            category : category,
            subcategory : subcategory,
            exsubcategory: exsubcategory
        })
    }
    catch(err) {
        console.log(err);
        return false;
    }
}


module.exports ={
    viewProductPage,AddProductPage,AjaxSub_CategorywiseRecord,InsertProduct,deleteProduct,changeStatus,editProduct
}