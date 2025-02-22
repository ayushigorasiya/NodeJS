const express = require('express');
const routes = express.Router();
const { homePage, addPage, viewPage, addData, deleteData, editData, updateblog } = require('../controllers/blogController');



// multer start

const multer = require('multer');
const st = multer.diskStorage({
    destination: (req, res, cb) => {1
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const unique = Math.floor(Math.random() * 100000000)
        cb(null, `${file.fieldname}-${unique}`)
    }
})
const imgupload = multer({ storage: st }).single('image')

// multer end
routes.post('/insert', imgupload, addData)
routes.get('/', homePage)
routes.get('/add', addPage)
routes.get('/views', viewPage)
routes.get('/deleteblog', deleteData)
routes.get('/editblog', editData)
routes.post('/upadteblog', imgupload, updateblog)


module.exports = routes;