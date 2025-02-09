let express = require('express')
let mongoose = require('mongoose')
const route = require('./routes/userRoutes')
let cors=require('cors')

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce").then(()=>{
    console.log("db connected")
}).catch(()=>{
    console.log("error in db")
})

const app=express()

app.use(express.json())
app.use(cors())
app.use("/",route)

app.listen(5000)