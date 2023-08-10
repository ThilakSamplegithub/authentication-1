const {Router}=require("express")
const jwt=require("jsonwebtoken")

const { UserModel } = require("../Models/user.model")
const userRouter=Router()
userRouter.post("/register",async(req,res)=>{
    try{
        const data=req.body
        console.log(data)
        const user= new UserModel(data)
        await user.save()
        console.log(user)
        res.status(200).json(user)
    }catch(err){
        console.log(err.message)
        res.status(400).send(err.message)
    }
})
userRouter.post("/login",async(req,res)=>{
    try{
  const {email,pass}=req.body
  console.log(email,pass)
  const user=await UserModel.findOne({email})
  if(user){
    if(user.pass===pass){
   const token= jwt.sign({course:"backend"},"masai",{ expiresIn: '1h' })
        res.status(200).send({message:"You are logged in",token})
    }else{
        res.status(200).send({message:"wrong password"})
    }
  }else{
    res.status(200).send(`wrong credentials`)
  }
    }catch(err){
  res.status(400).send(err)
    }
})

module.exports={userRouter}