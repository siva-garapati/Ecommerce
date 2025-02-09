let mongoose=require("mongoose")

let userSchema=new mongoose.Schema({
    "_id":String,
    "name":String,
    "phoneNumber":String,
    "gender":String,
    "place":String,
    "password":String,
    "role":{
        type:String,
        default:"user"
    }
})

let userModel=mongoose.model("users",userSchema)

module.exports=userModel