const mongoose = require ('mongoose');

const subcategoryShema = mongoose.Schema({

    categoruId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    subcategory: {
        type: String,
        required: true
    },
    status:{
        type: String,
        default:'active'
    }

})

const subcategory = mongoose.model("subcategory" ,subcategoryShema);

module.exports = subcategory;