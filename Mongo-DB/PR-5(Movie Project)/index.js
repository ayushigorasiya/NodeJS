const express = require('express');

const port = 8888;

const app = express();

app.set('view engine','ejs');
const path =require('path');
app.use('/uploads',express.static(path.join(__dirname,'uploads')))

const db = require('./config/db');


app.use(express.urlencoded());

app.get('/',(req,res) => {
    return res.render('home')
})

app.use('/',require('./routes/indexRoute'));

app.listen(port,(err) => {
    if(err){
        console.log(err); 
        return false;
    }
    console.log(`Server is running on port :- http://localhost:${port}`);
});



