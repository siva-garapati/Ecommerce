let multer=require('multer')
let {v4:uuidv4}=require('uuid')
const productModel = require('../models/productModel')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './productImages')
    },
    filename: function (req, file, cb) {
        cb(null, `product-${uuidv4()}.${file.mimetype.split('/')[1]}`)
    }
})

const upload = multer({ storage: storage})

let addproduct=async(req,res)=>{
    try{
        console.log(req.file)
        let data=new productModel({...req.body,"image":req.file.filename,"_id":uuidv4()})
        await data.save()
        res.json({'msg':'product added'})
    }catch(err){
        res.json({'msg':'error in adding in product'})
    }
}

let get=async(req,res)=>{
    try{
        let data=await productModel.find()
        res.json(data)
    }catch(err){
        res.json({"msg":"error in fetching products"})
    }
}

let product=async(req,res)=>{
    try{
        let data=await productModel.findById(req.params.id)
        if(data){
            res.json(data)
        }else{
            res.json({'msg':'not found'})
        }
    }catch(err){
        res.json({'msg':'error in fetching product'})
    }
}

module.exports={upload,addproduct,get,product}