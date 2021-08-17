const jwt = require('jsonwebtoken');
const dotenv=require('dotenv')
dotenv.config()

module.exports = (req,res,next) => {
    const token = req.header("auth-token")
    try{
    if(!token){
        return res.status(401).json({
            message: "Token is missing"
        })
    }
    
    const verified = jwt.verify(token, process.env.SECRET_TOKEN)
    req.admin = verified
    next()

}
catch(err){
    res.status(400).json("Invalid Token")
}
}
