const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
  userName:{type:String,required:true},
  email:{type:String,require:true},
  pass:{type:String,require:true},
  gender:{type:String,require:true}
},{versionKey:false})
 const UserModel=mongoose.model("user",userSchema)
 module.exports={UserModel}