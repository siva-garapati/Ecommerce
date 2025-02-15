let express = require('express')
const { addToCart, getcart, incQty, decQty, remove } = require('../controllers/cartCont')

let cartroute = new express.Router()
cartroute.post("/addtocart", addToCart)
cartroute.get("/getcart/:_id", getcart)
cartroute.put("/cart/inc",incQty)
cartroute.put("/cart/dec",decQty)
cartroute.post("/cart/removeproduct",remove)

module.exports = cartroute