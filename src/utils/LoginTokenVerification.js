"use server";

export async function verifyLoginToken(request,token){
    const tokenVerify = await fetch(
        `${request}/api/verify-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      );
  
      const tokenVerifyData = await tokenVerify.json();
    let  role = tokenVerifyData.role;
     let status = tokenVerifyData.status;
     let user = tokenVerifyData.user
      return {role,status,user}
  
}