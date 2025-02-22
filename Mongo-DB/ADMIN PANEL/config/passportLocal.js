const passport = require('passport');

const passportLocal = require ('passport-local').Strategy

const UserModel = require('../models/UserModel')



passport.use(new passportLocal ({
    usernameField : 'email'
}, async(email,password,cb) => {
    try{
        console.log(email , password);
        let user = await UserModel.findOne({email : email,password:password})
        if(!user){
            console.log('User Not Found');
            return cb(null ,false);
        }
        return cb(null , user);
    }
    catch(err){
        console.log(err);
        return cb(null , err)
    }
}
))

passport.serializeUser((user , cb) => {
    return cb(null , user._id)
})
passport.deserializeUser(async (id , cb) => {
    try{
        let user = await UserModel.findById(id);
        return cb(null , user);
    }
    catch(err){
        console.log(err);
        return cb (null , err);
    }
})
passport.checkUser = (req , res , next) => { // custom middleware
    if(!req.isAuthenticated()){
        return res.redirect('/');
    }
    return next();
}
passport.setUser = (req , res ,next) => { //record save in session
    if(req.isAuthenticated()){
        res.locals.users = req.user;
    }
    return next();
} 
module.exports = passport;