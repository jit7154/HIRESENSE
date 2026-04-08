const express = require("express")
const authController = require("../controllers/auth.controller")
const authMiddleware = require('../middleware/auth.middleware')
//this file is generally for like jitte bhi  auth relatedr routes haii unke liye haii ye 
const authRouter = express.Router();
const rateLimit = require("express-rate-limit");



const authLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 50, // Start blocking after 5 requests
    message: { error: "Too many attempts. Please try again in an hour." }
});

//this is a register route hai 
//method is post
authRouter.post("/register",authLimiter,authController.registerUserController)

//this is login route
//method is post
authRouter.post("/login",authLimiter,authController.loginUserController)



//this is logout route
//get method rakh lete hai
//isme hum blacklisting bhi implement karnege
authRouter.get("/logout",authLimiter,authController.logoutUserController)

authRouter.get("/get-me",authLimiter,authMiddleware.authUser,authController.getMEController)

module.exports=authRouter