const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRouter = require('./routes/authRoute')
const userRouter = require('./routes/userRoute')
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use('/api/admin', authRouter);
app.use('/api/users', userRouter);
mongoose.connect("mongodb+srv://Srijan-admin:Srijan12345@cluster0.7giwj.mongodb.net/jwtDB",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify: false,useCreateIndex: true},()=>{
    console.log("MongoDB CONNECTED")
})
app.get("/",async(req,res)=>{
    res.send("Hello World!")
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port,() => {
    console.log('Server is running on port 5000')
})