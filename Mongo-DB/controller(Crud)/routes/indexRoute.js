const express = require('express');

const routes = express.Router();


routes.get('/',(req,res)=>{
    return res.render('index')
})




routes.use('/crud',require('./crudRoute'));
routes.use('/product',require('./productRoute'));
routes.use('/user',require('./userRoute'));

module.exports = routes;