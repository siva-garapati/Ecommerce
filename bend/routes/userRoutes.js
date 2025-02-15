let express=require('express')
const { register, login } = require('../controllers/userController')

let userroute=new express.Router()

userroute.post("/register",register)
userroute.post("/login",login)

module.exports=userroute