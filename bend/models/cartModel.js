let mongoose=require("mongoose")

let schema=new mongoose.Schema({
    "_id":String,
    "items": [
        {
            productId: String,
            title: String,
            price: Number,
            image: String,
            quantity: Number
        }
    ]
})

let cartModel=mongoose.model("cart",schema)

module.exports=cartModel