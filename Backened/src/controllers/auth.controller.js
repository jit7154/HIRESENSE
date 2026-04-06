const userModel = require("../models/users.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { body, validationResult } = require('express-validator')
const tokenBlacklistModel=require('../models/blacklist.model')



async function registerUserController(req,res){
    //ye hum controller bana rhe hai for register
//jab like hum regiser karenege toh kaise functionaliites rahegiii
//we extract req.body se hum username adnd other thinggs
    const {username,password,email}=req.body


    //if not provided
    if(!username ||!email ||!password){
        return res.status(400).json({
            message:"please provide username,password or email"

        })
    }
    
    const normalizedEmail= email.trim().toLowerCase();
    console.log(normalizedEmail)

    const isUserAlreadyExist=await userModel.findOne({
        $or:[{username},{email:normalizedEmail}]
    })

    if(isUserAlreadyExist){
        return res.status(400).json({
            message:"Username or Email already exist"
        })
    }
//bcrypt to hash krne me seue ata hai
//jsonwebtoke toh jwt token allocate krne me kaam me ata hai
//cookie parser help to read cookie and convert to jwt and vice versa

    const hashpassword = await bcrypt.hash(password.trim(),10);
    const user = await userModel.create({
        username:username.trim(),
        email:normalizedEmail,
       password: hashpassword
    })

    const token = jwt.sign({
        id:user._id,
        username:user.username
    },process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    maxAge: 7 * 24 * 60 * 60 * 1000
});

    res.status(201).json({
        message:"USer Successfully Registered",
        user:{
            username:user.username,
            //email:user.email,
            id:user._id
        },
        token
    })

}


async function loginUserController(req,res){
    console.log("INCOMING LOGIN DATA:", req.body);
    const {username,password}=req.body

    const user = await userModel.findOne({
        username: username.trim() 
    }).select('+password');
    if(!user){
        return res.status(400).json({
            message: 'username or password is incorrect'
        })
    }
    
    //debugginhgggg
//    console.log(`\n--- X-RAY LOGIN CHECK ---`);
// console.log(`Typed Password : '${password}' (Length: ${password.length})`);
// console.log(`Stored DB Hash : '${user.password}' (Length: ${user.password.length})`);
    const isMatch = await bcrypt.compare(password.trim(),user.password)

    console.log(isMatch);
    if(!isMatch){
        return res.status(400).json({
            message:"username or Password is incorrect"
        })
    }

    //if password and wmail match kr lete hain toh hum ek tokn create krenge bcz woh login hua hai toh jwt and cookie helsos him to stay logged in

     const token = jwt.sign({
        id :user._id,
        email:user.email,
        username:user.username

    },process.env.JWT_SECRET,{expiresIn:'1d'})

    

    res.cookie("token", token, {
    httpOnly: true,  // Important: JS se read nahi hone dega (hackers se bachata hai)
    sameSite: "lax", // Important: Localhost (5173 aur 3000) ke beech cookie allow karega
    secure: false,   // Important: Localhost par HTTP hota hai, toh isko false rakhna hai
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days tak logged in rakhega
});

// Uske baad response bhejo
return res.status(200).json({ message: "Logged in", user ,token});
    

    
}



async function logoutUserController(req,res){
    const token = req.cookies.token;

    if(token){
        await tokenBlacklistModel.create({token})

    }

    res.clearCookie("token")
    res.status(200).json({
        message:" Successfully"
    })


}



//get the current logged in userss
async function getMEController(req, res) {

    res.setHeader('Cache-Control', 'no-store');
    try {
        const user = await userModel.findById(req.user.id);
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
}



module.exports={
    registerUserController,
    loginUserController,
    logoutUserController,
    getMEController
}
