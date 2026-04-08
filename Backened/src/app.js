const express = require('express');

const app = express();
app.use(express.json())

const cookieParser=require("cookie-parser")
app.use(cookieParser())
const rateLimit = require("express-rate-limit");

//cors is a defalt middleware jo hume helo karta hai backendd and frontened communication me kuch issue na hoo
//detai me likhungas
app.use(express.urlencoded({extended:true}));
const cors = require("cors")
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 2000, 
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many requests from this IP, please try again after 15 minutes." }
});

const authLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, 
    max: 5, 
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many login attempts. Please try again in an hour." }
});
app.use("/api/", apiLimiter);

const authRouter = require("./routes/auth.routes")
app.use(express.urlencoded({extended:true}))
app.use("/api/auth",authRouter)


const interviewRouter = require("./routes/interview.routes");
app.use("/api/interview",interviewRouter)

















module.exports=app;