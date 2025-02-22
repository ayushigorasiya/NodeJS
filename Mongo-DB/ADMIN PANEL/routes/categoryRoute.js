const express = require('express');

const routes = express.Router();
const {addCategoryPage , viewCategoryPage ,insertCategory , changeStatus ,deleteCategory,editCategory,updateCategory}= require('../controllers/CategoryController')

routes.get('/' , viewCategoryPage)
routes.get('/addcategorypage' , addCategoryPage);
routes.post('/insertcategory' , insertCategory);
routes.get ('/changestatus' , changeStatus)
routes.get('/deletecategory' , deleteCategory)
routes.get('/editcategory' , editCategory)
routes.post ('/updatecategory' , updateCategory)


module.exports = routes;