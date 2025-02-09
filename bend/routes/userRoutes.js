let express=require('express')
const { register, login } = require('../controllers/userController')

let route=new express.Router()

route.post("/register",register)
route.post("/login",login)

module.exports=route