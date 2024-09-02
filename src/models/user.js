import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
       
    },
    isVarified:{
        type:Boolean,
        default:false       
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpire:Date,
    verifyToken:String,
    verifyTokenExpire:Date

})

userSchema.pre("save",async function(next){
if(this.isModified("password")){
    this.password =await bcrypt.hash(this.password,10)
}
next();
})

const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;

