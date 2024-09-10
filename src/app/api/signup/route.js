import connection from "../../../database/dbconn"
import {z} from "zod";
import User from "@/models/user"
import {sendMail} from "@/utils/nodemailer"
import { NextResponse } from "next/server";

connection();



export async function POST(request){
    
    
    
    try {
        
        const varifyData = z.object({
            username:z.string().min(3,"minimum name length is 3").max(20,"max name length is 20"),
            email:z.string().email(),
            password:z.string().min(8,"password minimum length is 8")
        })

        const varifyUserData  =  await varifyData.parseAsync({username,email,password})
        
        

       
      const existUser = await User.findOne({$or:[{email},{userName:username}]});

     if(existUser) return NextResponse.json({msg:"user already exist",flag:false},{status:200})

        const user = await User.create({userName:username,email,password});

        const newuser = await User.findById(user._id).select(
            "-password -refreshToken"
        );
        await sendMail({email,emailType:"VERIFY",userId:newuser._id})

            return NextResponse.json({msg:`mail send successfully to : ${email} please verify `,data:newuser,flag:"true"},{status:201});
            
       
    } catch (error) {
        console.log(error);
        
   return NextResponse.json({msg:error.message,flag:false},{status:500})
        
    }
} 