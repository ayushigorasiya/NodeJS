const express = require('express');

const routes = express.Router();


const {addExsubcategoryPage,insertExsubcategory,ajaxCategorywiseRecord,viewExsubcategorypage,updateExsubcategory,deleteExsubcategory,changeStatus,EditExsubcategory } = require('../controllers/ExsubcategoryController');
routes.get('/', viewExsubcategorypage)
routes.get('/addexsubcategorypage',addExsubcategoryPage);
routes.post('/insertexsubcategory',insertExsubcategory);
routes.get ('/changestatus' , changeStatus)
routes.get('/editexsubcategory' ,EditExsubcategory);
routes.get('/deleteexsubcategory' ,deleteExsubcategory)
routes.get('/ajaxcategorywiserecord', ajaxCategorywiseRecord);


module.exports = routes;