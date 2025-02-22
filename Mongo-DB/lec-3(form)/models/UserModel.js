const mongoose = require('mongoose');

const userschema = mongoose.Schema({

    username: {
        type: String,
        required: true,
    },
    useremail :{
        type: String,
        require : true,
    },
    userpassword: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    hobby: {
        type: Array,       
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        require: true
    }
})

const user = mongoose.model("user" , userschema);
module.exports = user;