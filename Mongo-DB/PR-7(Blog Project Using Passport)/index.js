const express = require('express');
const port = 8080;
const app = express();
app.set('view engine','ejs');
const path = require('path');
const db = require('./config/db');
app.use('/' , express.static(path.join(__dirname, 'assets')));
app.use('/img',express.static(path.join(__dirname,'img')))
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use(express.urlencoded());
//passport login start
const passport = require('passport');
const passportLocal = require('./config/passportLocal');
const session = require('express-session');
app.use(session({
    name: 'rnw',
    secret: 'rnw4',
    saveUninitialized : true,
    resave : true,
    cookie : {
        maxAge : 1000 * 60 * 60 * 24 
    }
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);
//passport login end
app.use('/', require('./routes/indexRoute'))
app.listen(port,(err) => {
    if(err){
        console.log(err); 
        return false;
    }
    console.log(`Server is running on port :- http://localhost:${port}`);
});




