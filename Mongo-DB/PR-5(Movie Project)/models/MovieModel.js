const mongoose = require('mongoose');

const actionSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    }
})

const movieCrud = mongoose.model('moviecrud',actionSchema);
module.exports = movieCrud;