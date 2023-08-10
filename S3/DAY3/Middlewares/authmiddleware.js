const jwt=require("jsonwebtoken")
const authmiddleware=(req,res,next)=>{
    const token=req.headers.authorization
    console.log(token)
  jwt.verify(token,"masai",(err,decode)=>{
    if(err){
        res.status(400).send(`you are not authorized`)
    }else{
        console.log(decode)
        next()
    }
  })
}
module.exports={authmiddleware}