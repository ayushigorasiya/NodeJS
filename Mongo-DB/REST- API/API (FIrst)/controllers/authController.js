const UserModel = require('../models/UserModel');

const registerUser = async(req , res) => {
    try{
        const{name , email , password} = req.body;
        if(!name || !email || !password){
            return res.status(401).send({
                success: false,
                message: "All Field Is Require....!"
            })
        }
        let user = await UserModel.create({
            name: name,
            email: email,
            password: password
        })

        console.log(user);
        
        // return res.status(200).send({
        //     success: true,
        //     message: "User successfully create",
        //     user
        // })
    }
    catch(err){
        return res.status(501).send({
            success: false,
            error: err
        })
    }
}


module.exports ={
    registerUser
}