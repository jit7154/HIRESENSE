//ye kya krta hai na like when we want to logout form our user then ye uska jwt token ko blacklist me daa deta haii so that ncase kisine copy kr li haii uskoo toh woh  login nhi kr paegaaa uspeee 

const mongoose=require("mongoose")

const blacklistTokenSchema =new mongoose.Schema({
    token:{
        type:String,
        required:true,

    }
},{timestamps:true})


const tokenBlacklistModel =mongoose.model("blacklistToken",blacklistTokenSchema)

module.exports=tokenBlacklistModel