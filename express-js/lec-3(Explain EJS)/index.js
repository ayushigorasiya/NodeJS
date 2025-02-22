const express = require ('express');

const port = 8010;

const app = express();

app.set('view engine' , 'ejs');

app.get('/' , (req , res) => {
    return res.render('home');
})


app.get('/product' , (req , res) => {
    return res.render('product');
})

app.get('/con' , (req , res) => {
    return res.render('contact');
})


app.listen(port ,(err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- http://localhost:${port} `);
    
})