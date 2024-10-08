import jwt from "jsonwebtoken"; // Node.js module, used in server-side code
import User from "@/models/user";
import dbConn from "@/database/dbconn"
import { cookies } from "next/headers";
import { headers } from "next/headers";
dbConn();

export async function POST(req) {
  try {
    

    const token = headers().get("token")
 
    
    
    
if(!token){
  throw new Error('Not Authorized');
}


    const verifyCookie =  jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
   
    

    if (!verifyCookie) {
      throw new Error("Invalid token");
    }

    const existUser = await User.findOne({ email: verifyCookie.email }).select("-password -isVarified");

    if (!existUser) {
      throw new Error("user dosnt access according to the token");
    }

    let role = existUser.role;
  
    return Response.json({ status: true, role: role,user:existUser });
  } catch (error) {
    console.log(error);
    return Response.json({ status: false, role: "",user:"" });
  }
}
