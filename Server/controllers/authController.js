const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');
const dotenv=require('dotenv')
dotenv.config()

exports.registerAuth = async (req, res) => {
try{
    const admin =await new Admin(req.body);
    admin.save()
    res.status(200).json(admin)
}catch(err){
    res.status(400).json(err)
}
}

exports.loginAuth = async (req, res) => {
    try{
      const admin = await Admin.findOne({email:req.body.email})
      if(!admin){
       res.json("No User Exists with the given email")
      }
    else{
      const validPassword = admin.password === req.body.password 
      !validPassword && res.json("Invalid Password")

      //if password is valid
      if(validPassword){
          const token = jwt.sign({id:admin._id}, process.env.SECRET_TOKEN,{expiresIn:60*5})
          res.status(200).json({admin,token})
      } 
    }
    }catch(error){
        res.status(400).json(error)
    }
}

exports.getAdmin = async (req, res) => {
try{
const admin = await Admin.findById(req.params.adminId)
res.json(admin)
console.log(admin)
}catch(err){
res.send("Not verified")
}
}
