const express = require('express');

const port = 9090;

const app = express();

app.set('view engine','ejs');
const path = require('path');

const db = require('./config/db');

app.use('/' , express.static(path.join(__dirname, 'assets')));
app.use('/img',express.static(path.join(__dirname,'img')))
app.use('/uploads',express.static(path.join(__dirname,'uploads')))

app.use(express.urlencoded());
const cookieparser = require('cookie-parser');
app.use(cookieparser());
app.use('/', require('./routes/indexRoute'))
app.listen(port,(err) => {
    if(err){
        console.log(err); 
        return false;
    }
    console.log(`Server is running on port :- http://localhost:${port}`);
});




