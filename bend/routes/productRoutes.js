let express = require('express')
const { addproduct, upload, get, product } = require('../controllers/productCont')

let productroute = new express.Router()
productroute.post("/addproduct",upload.single('image'),addproduct)
productroute.get("/getproducts",get)
productroute.get("/product/:id",product)

module.exports = productroute