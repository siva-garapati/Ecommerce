let mongoose=require("mongoose")

let schema=new mongoose.Schema({
    "_id":String,
    "title":String,
    "brand":String,
    "description":String,
    "category":String,
    "price":Number,
    "image":String,
    "reviewsRatings":[
        {"rating":Number,
         "comment":String
        }
    ]
})

let productModel=mongoose.model("products",schema)

module.exports=productModel