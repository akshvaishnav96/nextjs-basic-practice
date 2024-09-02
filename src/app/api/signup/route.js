import connection from "../../../database/dbconn"
import {z} from "zod";
import User from "@/models/user"
import {sendMail} from "@/utils/nodemailer"

connection();

export async function GET(){
    console.log(req.nextUrl.pathname);
   return Response.json({data:"success"})
} 


export async function POST(request){
    try {
        const {username,password,email} = await  request.json()
        const varifyData = z.object({
            username:z.string().min(3,"minimum name length is 3").max(20,"max name length is 20"),
            email:z.string().email(),
            password:z.string().min(8,"password minimum length is 8")
        })

        const varifyUserData  =  await varifyData.parseAsync({username,email,password})
        console.log(username,email,password);
        

       
      const existUser = await User.findOne({$or:[{email},{userName:username}]});

     if(existUser) return Response.json({msg:"user already exist"},{status:200})

        const user = await User.create({userName:username,email,password});

        const newuser = await User.findById(user._id).select(
            "-password -refreshToken"
        );
        await sendMail({email,emailType:"VERIFY",userId:newuser._id})

            return Response.json({msg:"user created successfully",data:newuser},{status:201});
            
       
    } catch (error) {
        console.log(error);
        
   return Response.json({msg:error.message},{status:500})
        
    }
} 