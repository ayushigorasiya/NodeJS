const movieModel = require('../models/MovieModel');

const fs = require('fs');

const addData = (req, res) => {
    return res.render('act/add');
}

const viewData = async (req, res) => {
    try {
        let all = await movieModel.find({})
        return res.render('act/view', {
            all
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertData = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        await movieModel.create({
            name: name,
            description: description,
            price: price,
            image: req.file?.path
        })
        console.log("Data added..!");
        return res.redirect('/act');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteData = async (req, res) => {
    try {
        let single = await movieModel.findById(req.query.delId)
        fs.unlinkSync(single?.image);

        await movieModel.findByIdAndDelete(req.query.delId);
        return res.redirect('/act');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editData = async (req, res) => {
    try {
        let singleRow = await movieModel.findById(req.query.editId);

        return res.render('act/edit', {
            singleRow
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateData = async (req, res) => {
    try {
        const { editId, name, description, price } = req.body;
        if (req.file) {
            let singleRow = await movieModel.findById(editId);
            fs.unlinkSync(singleRow?.image);
            await movieModel.findByIdAndUpdate(editId,{
                name: name,
                description : description,
                price : price,
                image : req.file?.path
            })
            console.log("data is updated");
            return res.redirect('/act');
        } else {
            await movieModel.findByIdAndUpdate(editId,{
                name: name,
                description : description,
                price : price
            })
            console.log("data is updated");
            return res.redirect('/act');
        }

    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    addData,
    viewData,
    insertData,
    deleteData,
    editData,
    updateData
}