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
        let categories = await CategoryModel.find({ status: 'active' });
        let subcategories = await SubcategoryModel.find({ status: 'active' });
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
const insertExsubcategory = async(req,res) => {
    try {
        const { category, subcategory, exsubcategory } = req.body;
        await ExSubcategoryModel.create({
            categoryId: category,
            subcategoryId: subcategory,
            exsubcategory: exsubcategory
        })
        req.flash('success', 'Exsubcategory create successfully');
        return res.redirect('/exsubcategory/addexsubcategorypage')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const ajaxCategorywiseRecord = async (req, res) => {
    let categoryid = req.query.categoryid;
    try {
        let category = await SubcategoryModel.find({ categoryId: categoryid }).populate('categoryId');
        return res.status(200).send({
            success: true,
            message: "record successfully fetch",
            category: category
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports ={
    addExsubcategoryPage,insertExsubcategory,ajaxCategorywiseRecord,viewExsubcategorypage
}