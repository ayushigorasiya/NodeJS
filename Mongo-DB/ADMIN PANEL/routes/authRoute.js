const express = require('express');
const routes = express.Router();

const { loginPage, registerPage,registerUser, loginUser ,dashboardPage,logoutUser,forgotPassword,forgotPage , otp,postOtp,newPasswordPage,postNewPassword} = require('../controllers/authController');
const passport =  require('passport');

routes.get('/',loginPage)//1
routes.post('/loginuser' ,passport.authenticate('local' , {failureRedirect : '/'}), loginUser)//5
routes.get('/register',registerPage)//2
routes.post('/registeruser',registerUser)//4
routes.get('/dash' ,passport.checkUser, dashboardPage);//3
routes.get('/logout' , logoutUser);//6
routes.post('/forgotpassword' , forgotPassword)//7
routes.get('/forgotpasswordpage' , forgotPage)
routes.get('/otp',otp)//8
routes.post('/postotp' , postOtp)//9
routes.get('/newpassword' , newPasswordPage)//10
routes.post('/postnewpassword' , postNewPassword)//11

module.exports = routes;