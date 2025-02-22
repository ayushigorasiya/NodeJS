const viewCrud = (req,res) => {
    return res.render('crud/viewcrud');
}

const addCrud = (req,res) => {
    return res.render('crud/addcrud');
}

module.exports = {
    viewCrud,addCrud
}