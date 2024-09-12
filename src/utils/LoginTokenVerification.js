"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function verifyLoginToken(){
  const tokenData = cookies().get("access_token")
 const token = tokenData?.value

 if(!token){
return {role:"",status:"",user:""}
 }

 
  
    const tokenVerify = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
           token:token
          },
        cache:"no-cache"
        }
      );
  
      const tokenVerifyData = await tokenVerify.json();
    let  role = tokenVerifyData.role;
     let status = tokenVerifyData.status;
     let user = tokenVerifyData.user
     
  
      return {role,status,user}
      
}
