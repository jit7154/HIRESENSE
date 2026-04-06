const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:[true,"username already taken"],
        minlength:[5,"username must of length of 5 letter"]
    },
    password:{
        type:String,
        required:true,
        trim:true,
        //lowercase:true,
        minlength:[8,"password must of length of 8 letter"],
        select:false

    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:[true,"email already taken"]
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports= userModel;