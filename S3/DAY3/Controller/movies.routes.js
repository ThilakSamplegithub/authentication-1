const {Router}=require('express')
const { authmiddleware } = require('../Middlewares/authmiddleware')
const moviesRouter=Router()
moviesRouter.get("/",authmiddleware,(req,res)=>{
    res.send('see all movies')
})
moviesRouter.get("/movie",authmiddleware,(req,res)=>{
    res.send("see particular movie")
})
module.exports={moviesRouter}