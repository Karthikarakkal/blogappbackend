const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,required:true},
        "e-mail":{type:String,required:true},
        "password":{type:String,required:true}
    }
)

let signmodel=mongoose.model("users",schema)
module.exports={signmodel}