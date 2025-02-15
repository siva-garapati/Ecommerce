let express = require('express')
let mongoose = require('mongoose')
let cors=require('cors')
const userroute = require('./routes/userRoutes')
const productroute = require('./routes/productRoutes')
const cartroute = require('./routes/cartRoutes')

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce").then(()=>{
    console.log("db connected")
}).catch(()=>{
    console.log("error in db")
})

const app=express()

app.use(express.json())
app.use(cors())
app.use('/images',express.static('./productImages'))
app.use("/",userroute)
app.use('/',productroute)
app.use("/",cartroute)

app.listen(5000)