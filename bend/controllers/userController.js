const userModel = require("../models/userModel")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const cartModel = require("../models/cartModel")

const register=async(req,res)=>{
    try{
        let obj=await userModel.findById(req.body._id)
        if(!obj){
            let hashcode=await bcrypt.hash(req.body.password,10)
            let data=new userModel({...req.body,"password":hashcode})
            await data.save()
            res.json({'msg':'registration done'})
        }else{
            res.json({'msg':'email already exists'})
        }
    }catch(err){
        res.json({'msg':'error in server/register'})
    }
}

const login=async(req,res)=>{
    try{
        let obj=await userModel.findById(req.body._id)

        if(!obj){
            res.json({ 'msg': 'check email or password' })
        }

        let f = await bcrypt.compare(req.body.password, obj.password)
        if(!f){
            res.json({ 'msg': 'check email or password' })
        }

        let cart=await cartModel.findById(req.body._id)
        let cartItems;

        if(!cart){
            cartItems=[]
        }

        cartItems = cart.items.map(item => item.productId);

        res.json({
            'token': jwt.sign(req.body._id, "key"),
            'name': obj.name,
            'role': obj.role,
            "_id": obj._id,
            "cartItems": cartItems})
    }catch(err){
        res.json({'msg':'error in server/login','err':err})
    }
}

module.exports={register,login}