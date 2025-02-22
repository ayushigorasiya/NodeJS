const SubcategoryModel = require('../models/SubcategoryModel');

const AddSubcategoryPage = (req , res) => {
    return res.render('subcategory/add_subcategory');
}

const InsertSubcategory = async(req , res) =>{
    try{
        const {category} = req.body;
        const add = await SubcategoryModel.create({
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
module.exports ={
    AddSubcategoryPage ,InsertSubcategory
}