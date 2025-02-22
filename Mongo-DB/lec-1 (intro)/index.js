const express = require ('express');

const port = 9090;

const app = express();
// mongodb ni file connect karavi che
const db = require('./config/db');

// css no path che
const path = require ('path');

//ejs ni file mate che
app.set('view engine' , 'ejs');

//css ni file connect karavi che
app.use('/' , express.static(path.join(__dirname, 'assets')));
//ejs ni file connect h1 vali
app.get('/',(req , res) => {
return res.render('index');
})
//callback function che
app.listen(port,(err)=> {
    if(err) {
        console.log(err);
        return false;

    }
    console.log(`Server Is Start On Port :- http://localhost:${port}`);
    
    
    
})