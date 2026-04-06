const express = require("express")
const authMiddleware = require("../middleware/auth.middleware")
const generateInterView = require("../controllers/interview.controller")
//const generateInterviewReport = require("../services/ai.services")
const upload = require("../middleware/file.middleware")

//multer to read pdffff
const interviewRouter =express.Router();



//ye basically intervierouter banaa
//pehle. toh veriified user ko allow karo so auth middlewager
//then to upload file toh file middleware bhi use hus
//bbasski toh third wala controller haii
 interviewRouter.get("/dashboard", authMiddleware.authUser, generateInterView.getAllInterviewReportsController)
interviewRouter.post("/dashboard",authMiddleware.authUser,upload.single("resume"),generateInterView.generateInterViewReportController)

 interviewRouter.get("/dashboard/report/:interviewId", authMiddleware.authUser, generateInterView.getInterviewReportByIdController)



 interviewRouter.post("/dashboard/resume/pdf/:interviewReportId", authMiddleware.authUser, generateInterView.generateResumePdfController)

module.exports= interviewRouter