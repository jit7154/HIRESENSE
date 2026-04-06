const dotenv = require('dotenv')
dotenv.config()
const app= require("./src/app")
const connectTODB = require("./config/database")

const {resume,selfDescription,jobDescription}= require("./src/services/temp")


const startServer = async () => {
    await connectTODB(); // Execution stops here until DB is connected
    
    app.listen(3000, () => {
        console.log("server running on port 3000");
    });

    // Now this will only run after the DB line is finished
    // const report = await generateInterviewReport({ resume, selfDesc, jobDesc });
    // console.log(report);
};

startServer();



module.exports=startServer
