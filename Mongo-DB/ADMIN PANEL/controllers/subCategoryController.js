const CategoryModel = require('../models/CategoryModel');
const SubcategoryModel = require('../models/SubcategoryModel');

const AddSubcategoryPage = async(req , res) => {
    try {
        let categories = await CategoryModel.find({ status: 'active' });
        
        
        return res.render('subcategory/add_subcategory', {
            category: categories
        })
        
    } catch (err) {
        console.log(err);
        return false;
                    
    }
}
const ViewSubcategoryPage = async(req, res) => {
    try{
        const subcategory = await SubcategoryModel.find({}).populate('categoryId');
        
        console.log(subcategory);
        
        
        return res.render('subcategory/view_subcategory', {
            subcategory : subcategory
        })
    }
    catch(err){
        console.log(err);
        return false;
        
    }
}


const InsertSubcategory = async(req , res) =>{
    try{
        const {category,subcategory} = req.body;
        await SubcategoryModel.create({
            categoryId : category,
            subcategory: subcategory
        })
        req.flash('success' ,' Sub_Category Add Successfully....!')
        return res.redirect('/subcategory/addsubcategorypage');
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
            await SubcategoryModel.findByIdAndUpdate(id , {
                status : 'active'
            })
        }
        else{
            await SubcategoryModel.findByIdAndUpdate(id , {
                status : 'deactive'
            })
        }
        req.flash('success' ,' Category Update Successfully....!')
        return res.redirect('/subcategory');
    }
    catch(err){
        console.log(err);
        return false;
        
    }
}


const EditSubcategory = async(req , res) => {
    try{
        const id = req.query.id;
        let category = await CategoryModel.find({status :'active'})
        let single = await SubcategoryModel.findById(id).populate('categoryId');
        return res.render('subcategory/edit_subcategory',{
            single: single,
            category: category
        })
        
        
    }
    catch(err){
        console.log(err);
        return false;
    }
}

const deletesubCategory = async(req , res) => {
    try{
        let id = req.query?.id;
        await SubcategoryModel.findByIdAndDelete(id);
        req.flash('success' ,' Category Delete Successfully....!')
        return res.redirect('/subcategory');
    }
    catch(err){
        console.log(err);
        return false;
        
    }
}
const updatesubCategory = async (req , res) => {
    try{
        const {editid , category ,subcategory} = req.body;
        await SubcategoryModel.findByIdAndUpdate(editid , {
            categoryId : category,
            subcategory:subcategory
            
        })
        req.flash('success' ,' Category Updated Successfully....!')
        return res.redirect('/subcategory');
    }
    catch(err){
        console.log(err);
        return false;
    }
}
module.exports ={
    AddSubcategoryPage ,InsertSubcategory,ViewSubcategoryPage,EditSubcategory,deletesubCategory,updatesubCategory,changeStatus
}