const express = require("express")
const authController = require("../controllers/auth.controller")
const authMiddleware = require('../middleware/auth.middleware')
//this file is generally for like jitte bhi  auth relatedr routes haii unke liye haii ye 
const authRouter = express.Router();

//this is a register route hai 
//method is post
authRouter.post("/register",authController.registerUserController)

//this is login route
//method is post
authRouter.post("/login",authController.loginUserController)



//this is logout route
//get method rakh lete hai
//isme hum blacklisting bhi implement karnege
authRouter.get("/logout",authController.logoutUserController)

authRouter.get("/get-me",authMiddleware.authUser,authController.getMEController)

module.exports=authRouter