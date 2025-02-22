const CategoryModel = require('../models/CategoryModel');

const addCategoryPage = (req , res) => {
    return res.render('category/add_category');
}

const viewCategoryPage = async(req , res) => {
    try{
        let categories = await CategoryModel.find({});
        return res.render('category/view_category' , {
            category : categories
        })
    }
    catch(err){
        console.log(err);
        return false;
        
    }
}

const insertCategory = async(req , res) => {
    try{
        const {category} = req.body;
        const add = await CategoryModel.create({
            category : category
        })
        req.flash('success' ,' Category Add Successfully....!')
        return res.redirect('/category/addcategorypage');
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
            await CategoryModel.findByIdAndUpdate(id , {
                status : status
            })
            req.flash('success' ,' Category Update Successfully....!')
            return res.redirect('/category');
        }
        else{
            await CategoryModel.findByIdAndUpdate(id , {
                status : status
                })
                req.flash('success' ,' Category Update Successfully....!')
                return res.redirect('/category');
        }
    }
    catch(err){
        console.log(err);
        return false;
        
    }
}

const deleteCategory = async(req , res) => {
    try{
        let id = req.query?.id;
        await CategoryModel.findByIdAndDelete(id);
        req.flash('success' ,' Category Delete Successfully....!')
        return res.redirect('/category');
    }
    catch(err){
        console.log(err);
        return false;
        
    }
}

const editCategory = async(req , res) => {
    try{
        let id = req.query?.id;
        let single = await CategoryModel.findById(id);                                     
        return res.render('category/edit_category', {
            single: single
        })
    }
    catch(err){
        console.log(err);
        return false;
        
    }
}

const updateCategory = async (req , res) => {
    try{
        const {editid , category} = req.body;
        await CategoryModel. findByIdAndUpdate(editid , {
            category : category
        })
        req.flash('success' ,' Category Updated Successfully....!')
        return res.redirect('/category');
    }
    catch(err){
        console.log(err);
        return false;
    }
}
module.exports ={
    addCategoryPage,viewCategoryPage , insertCategory,changeStatus,deleteCategory,editCategory,updateCategory
}