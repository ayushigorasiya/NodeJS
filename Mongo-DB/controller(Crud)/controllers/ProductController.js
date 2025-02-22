const viewProduct = (req,res) => {
    return res.render('product/viewproduct');
}

const addProduct = (req,res) => {
    return res.render('product/addproduct');
}

module.exports = {
    viewProduct, addProduct
}