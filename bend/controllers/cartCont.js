let cartModel = require("../models/cartModel")

let getcart=async(req,res)=>{
    try{
        let data=await cartModel.findById(req.params._id)
        let cartItems;

        cartItems = data ? data.items.map(item => item.productId):[]
        res.json({...data.toObject(),"cartItems":cartItems})
    }catch(err){
        res.json({"msg":"error in fetching cart details"})
    }
}

let addToCart=async(req,res)=>{
    let { productId, title, price, image }=req.body
    try{
        let cart=await cartModel.findById(req.body._id)
        if(!cart){
            cart = new cartModel({"_id":req.body._id,items:[],})
            console.log(cart,"cart created")
        }
        
        cart.items.push({ productId, title, price, image, quantity:1})
        await cart.save()
        res.json({"msg":"product added to cart"})
    }catch(err){
        res.json({"msg":"error in adding product to cart",err})
    }
}

let incQty=async(req,res)=>{
    try{
        console.log({...req.body})
        let cart=await cartModel.findById(req.body._id)
        let item=cart.items.find(obj=>obj.productId===req.body.productId)
        console.log('inc', item)
        item.quantity+=1
        await cart.save()
        res.json({"msg":"product quantity incremented"})
    }catch(err){
        res.json({"msg":"error in inc quantity"})
    }
}

let decQty = async (req, res) => {
    try {
        let cart = await cartModel.findById(req.body._id)
        let item = cart.items.find(obj => obj.productId === req.body.productId)
        item.quantity -= 1
        await cart.save()
        res.json({ "msg": "product quantity deccremented" })
    } catch (err) {
        res.json({ "msg": "error in inc quantity" })
    }
}

let remove=async(req,res)=>{
    try{
        let cart=await cartModel.findById(req.body._id)
        cart.items=cart.items.filter((obj)=>obj.productId!==req.body.productId)
        await cart.save()
        res.json({"msg":"product removed from cart"})
    }catch(err){
        res.json({"msg":"error in removing product from cart"})
    }
}

module.exports={getcart,addToCart,incQty,decQty,remove}