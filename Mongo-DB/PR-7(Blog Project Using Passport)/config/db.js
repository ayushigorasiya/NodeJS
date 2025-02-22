const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cookie');

const db = mongoose.connection;

db.on("connected",(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Database is successfully connected.. .....!`);
    
})

module.exports = db;

