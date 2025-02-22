const User = require('../models/UserModel');

const nodemailer = require ('nodemailer');
const loginPage = (req,res) => {
    
    if(res.locals?.users){
        return res.redirect('/dash')
    }

    return res.render('login');
    
}

//login User Start
const loginUser = async (req, res) => {
    try{
       return res.redirect('/dash');
   } catch (error) {
       console.log(err);
       return false;
       
   }
}
//login User End

const registerPage = (req,res) => {
    return res.render('register')
}

//register User Start
const registerUser = async(req,res) => {
    try{
        const {name,email,password}=req.body; 
        let user = await User.create({
            name:name,
            email:email,
            password:password
        })
        console.log(`user register`);
        return res.redirect('/');
    }catch(err){
        console.log(err);
        return  false;
    }
}
//register User End

const dashboardPage = (req, res) => {
    return res.render('dashboard');
}

//logout user start
const logoutUser = (req , res) => {                                                                
    req.logout((err) => {
        if(err){
            console.log(err);
            return false;
            
        }
        res.redirect('/')
    })
    console.log(`logout successfully`);
    
}
//logout user end


//forgot password start
const forgotPassword = async(req , res) => {
    try{

        const {email}= req.body;
        console.log(email);
        let user = await User.findOne({email : email});
        console.log(user);
        if(!user){
            console.log(`email are not valid`);
            return res.redirect('/');
        }
        console.log(user);
        let otp = Math.floor(Math.random()*1000000);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'ayushigorasiya287@gmail.com',
              pass: 'uzyl nnov zakz nozt'
            }
          });
          
          var mailOptions = {
            from: 'ayushigorasiya287@gmail.com',
            to: email,
            subject: 'Forgot password',
            html: `<h1 style="color:green">Your OTP Is this :- ${otp}</h1>`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
                let userotp = {
                    otp: otp,
                    email:email
                }
                res.cookie('userotp' , userotp)
              console.log('Email sent: ' + info.response);
                return res.redirect('/otp');
            }
          });
    }
    catch(err){
        console.log(err);
        return false;
        
    }
}

const otp = (req , res) => {
    return res.render('otp')
}

const forgotPage =  (req, res) => {
    return res.render('forgotpassword');
}

//post otp start
const postOtp = (req , res) => {
    let otp = req.body.otp;
    console.log(otp);
    let userotp = req.cookies.userotp?.otp;
    console.log(userotp);

    if(otp == userotp){
        return res.redirect('/newpassword')
    }
    else{
        console.log(`enter valid OTP....!`);
        return res.redirect('/otp');
    }
}
//post otp end

//New Password Start
const newPasswordPage = (req , res) =>  {
    return res.render('newpassword');
}
//New Password End

//post new password start
const postNewPassword = async(req , res) => {
    try{
        const {newpassword , cpassword } = req.body;
        if(newpassword == cpassword){
            let email = req.cookies.userotp?.email; 
            await User.findOneAndUpdate({email:email},
                {password:newpassword}
        )
            res.clearCookie('userotp')
            return res.redirect('/');
        }
        else{
            console.log(`newpassword and confirm password are not match......>!`);
            return res.redirect('/newpassword');
            
        }
    }
    catch(err){
        console.log(err);
        return false;
    }
}
//post new password End
//forgot password end
module.exports = {
    loginPage,registerPage,registerUser,loginUser ,dashboardPage,logoutUser,forgotPassword,forgotPage, otp,postOtp,newPasswordPage,postNewPassword
}