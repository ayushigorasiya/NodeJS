const express = require('express');

const port = 9900;
const app = express();
app.set('view engine' , 'ejs');

const path =require('path');
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
const db = require('./config/db');

const cookieparser = require('cookie-parser');

app.use(cookieparser());
app.use(express.urlencoded());
app.use('/' , express.static(path.join(__dirname,'public')));
//Passport login start

const passport = require('passport');  //1 require passport
const passportLocal = require('./config/passportLocal');  //2 require passport-local
const session = require('express-session');  //3  require express-session
app.use(session ({  //4 
    name : 'mahadev',
    secret : 'bholenath',
    saveUninitialized : true,
    resave : true,
    cookie: {
        maxAge: 1000 * 60 * 60 *24
    }
}))

app.use(passport.initialize());  //5
app.use(passport.session());  //6
app.use(passport.setUser);
//Passport login end
//multer start

// const multer = require('multer');
// const st = multer.diskStorage({
//     destination : (req, res, cb) => {
//         cb(null,'uploads');
//     },
//     filename : (req, file, cb) => {
//         cb(null,`${file.fieldname}-${Math.floor(Math.random() * 1000000)}`);
//     }
// })
// const fileUpload = multer({storage : st}).single('file');
//multer end

//flash message start
const flash = require ('connect-flash');
app.use(flash());
app.use('/' , (req , res , next) => {
    res.locals.message = req.flash()
    return next();
})
//flash message end

app.use('/',require('./routes/indexRoute'));
app.listen(port , (err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server Is Start On : http//localhost:${port}`); 
}) 