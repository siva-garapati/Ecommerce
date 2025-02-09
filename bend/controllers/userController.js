const userModel = require("../models/userModel")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

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
        let f=await bcrypt.compare(req.body.password,obj.password)
        if(f){
            res.json({'token':jwt.sign(req.body._id,"key"),'name':obj.name,'role':obj.role})
        }else{
            res.json({'msg':'check email or password'})
        }
    }catch(err){
        res.json({'msg':'error in server/login'})
    }
}

module.exports={register,login}