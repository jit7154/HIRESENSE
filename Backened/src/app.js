const express = require('express');
const app = express();
app.use(express.json())

const cookieParser=require("cookie-parser")
app.use(cookieParser())

//cors is a defalt middleware jo hume helo karta hai backendd and frontened communication me kuch issue na hoo
//detai me likhungas
const cors = require("cors")
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

const authRouter = require("./routes/auth.routes")
app.use(express.urlencoded({extended:true}))
app.use("/api/auth",authRouter)


const interviewRouter = require("./routes/interview.routes");
app.use("/api/interview",interviewRouter)

















module.exports=app;