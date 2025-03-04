const CategoryModel = require('../models/CategoryModel');
const SubcategoryModel = require('../models/SubcategoryModel');
const ExSubcategoryModel = require('../models/ExsubcategoryModel');
const viewExsubcategorypage = async (req, res) => {
    try {
        let exsubcategory = await ExSubcategoryModel.find({}).populate('categoryId').populate('subcategoryId');
        return res.render('exsubcategory/ex_view_subcategory', {
            exsubcategory: exsubcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
const addExsubcategoryPage = async(req,res) => {
    try {
        let categories = await CategoryModel.find({/* status: 'active'*/ });
        let subcategories = await SubcategoryModel.find({ /*status: 'active'*/ });
        return res.render('exsubcategory/ex_add_subcategory',
             {
            category: categories,
            subcategory: subcategories
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const changeStatus = async(req , res) => {
    try{
        const {id , status} = req.query;
        if(status == 'deactive'){
            await ExSubcategoryModel.findByIdAndUpdate(id , {
                status : 'active'
            })
        }
        else{
            await ExSubcategoryModel.findByIdAndUpdate(id , {
                status : 'deactive'
            })
        }
        req.flash('success' ,' Category Update Successfully....!')
        return res.redirect('/exsubcategory');
    }
    catch(err){
        console.log(err);
        return false;
        
    }
}


const insertExsubcategory = async(req,res) => {
    try {
        const { editid,category, subcategory, exsubcategory } = req.body;
        if(editid){

            await ExSubcategoryModel.findByIdAndUpdate(editid, {
                categoryId: category,
            subcategoryId: subcategory,
            exsubcategory: exsubcategory
            })
            req.flash('success', 'Exsubcategory successfully update');
            return res.redirect('/exsubcategory')
        }
        else{
        await ExSubcategoryModel.create({
            categoryId: category,
            subcategoryId: subcategory,
            exsubcategory: exsubcategory
        })
        req.flash('success', 'Exsubcategory create successfully');
        return res.redirect('/exsubcategory/addexsubcategorypage')
    }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteExsubcategory = async(req , res) => {
    try{
        let id = req.query?.id;
        await ExSubcategoryModel.findByIdAndDelete(id);
        req.flash('success' ,' Category Delete Successfully....!')
        return res.redirect('/exsubcategory');
    }
    catch(err){
        console.log(err);
        return false;
        
    }
}

const ajaxCategorywiseRecord = async (req, res) => {
    let categoryid = req.query.categoryid;
    try {
        let category = await SubcategoryModel.find({ categoryId: categoryid }).populate('categoryId');
        let subcategory = await ExSubcategoryModel.find({ categoryId: categoryid }).populate('categoryId').populate('subcategoryId');
        return res.status(200).send({
            success: true,
            message: "record successfully fetch",
            category: category,
            subcategory: subcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const EditExsubcategory  = async(req , res) => {
    try{
        let id = req.query?.id;
    
        let category = await CategoryModel.find({status:'active'})
        let subcategory = await SubcategoryModel.findById(id);
    
        let singleexsubcat = await ExSubcategoryModel.findById(id).populate('categoryId').populate('subcategoryId')
       
        return res.render('exsubcategory/ex_edit_subcategory' , {
            singleexsubcat,
            category: category,
            subcategory : subcategory
        })
    }
    catch(err){
        console.log(err);
        return false;
        
    }

}


  
module.exports ={
    addExsubcategoryPage,insertExsubcategory,ajaxCategorywiseRecord,viewExsubcategorypage,deleteExsubcategory,changeStatus,EditExsubcategory
}