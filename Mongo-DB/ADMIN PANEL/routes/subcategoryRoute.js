const express = require('express');

const routes = express.Router();

const { AddSubcategoryPage, ViewSubcategoryPage, InsertSubcategory,EditSubcategory ,deletesubCategory,updatesubCategory,changeStatus} = require('../controllers/subCategoryController');

routes.get('/', ViewSubcategoryPage)
routes.get('/addsubcategorypage', AddSubcategoryPage);
routes.post('/insertsubcategory', InsertSubcategory);
routes.get('/editsubcategory' ,EditSubcategory);
routes.get ('/changestatus' , changeStatus)
routes.get('/deletesubcategory' , deletesubCategory);
routes.post ('/updatesubcategory' , updatesubCategory)


module.exports = routes;