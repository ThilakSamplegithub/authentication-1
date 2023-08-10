const express=require("express")
const { connection } = require("./config/db.js")
const { userRouter } = require("./Controller/user.router")
const {moviesRouter}=require("./Controller/movies.routes.js")
require('dotenv').config()
const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("welcome")
})
app.use("/user",userRouter)
app.use("/movies",moviesRouter)
app.listen(process.env.PORT,async()=>{
    try{
       await connection
    //    console.log(connection,"is connected")
        console.log(`${process.env.PORT} is running`)
    }catch(err){
          console.log(err.message)
    }
})