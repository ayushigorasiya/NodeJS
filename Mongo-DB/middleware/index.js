const express = require('express');
const port = 8000;
const app = express();
app.set('view engine', 'ejs');

const viewAge = (req, res, next) => {
    let age = req.query.age;
    if (!age || age < 18) {
        return res.redirect('/');
    }
    return next();
}

app.get('/', (req, res) => {
    return res.render('index');
})

app.get('/product', checkAge, (req, res) => {
    return res.render('product');
})

app.get('/about', checkAge, (req, res) => {
    return res.render('about');
})

app.use(viewAge);


app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is start on port :- ${port}`);

})
