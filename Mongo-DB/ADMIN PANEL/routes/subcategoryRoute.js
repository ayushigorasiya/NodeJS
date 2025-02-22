const express = require('express');

const routes = express.Router();

const{AddSubcategoryPage , InsertSubcategory} = require('../controllers/subCategoryController')

    routes.get('/addsubcategorypage' ,AddSubcategoryPage);
    routes.post('/insertsubcategory' ,InsertSubcategory);


module.exports=routes;