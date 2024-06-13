const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const bcrypt=require("bcryptjs") //import bcrypt

const{signmodel}=require("./model/blog")// import model

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://karthi:Karthikarakkal@cluster0.xi3nlpm.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0")


const generateHashPassword=async(password)=>{ //pass hash geneartor
        const salt=await bcrypt.genSalt(10) //assign salt
        return bcrypt.hash(password,salt)  
}



app.post("/signup",async(req,res)=>{
    let input=req.body   //input read
    let hashedPassword=await generateHashPassword(input.password)
    console.log(hashedPassword)
    input.password=hashedPassword
    let sign=new signmodel(input)
        sign.save()
        res.json({status:"success"})
})

app.listen(8006,()=>{
    console.log("server started")
})