const viewUser = (req , res) => {
    return res.render('user/viewuser');
}

const addUser = (req , res) => {
    return res.render('user/adduser');
}

module.exports ={
    viewUser,addUser
}