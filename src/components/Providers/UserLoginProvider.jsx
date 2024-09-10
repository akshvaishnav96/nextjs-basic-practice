"use client";

import React, { useEffect, useState } from 'react'
import { userLoginContext } from '../../context/userLoginContext'
import { verifyLoginToken } from '../../utils/LoginTokenVerification';

export default function UserLoginProvider({children,token}) {
    const [user,setUser] = useState("");
    const pathName =process.env.NEXT_PUBLIC_BASE_URL;

 

      useEffect(()=>{
          const  getUserData = async ()=>{
            if(token){

              let {user} = await verifyLoginToken(pathName,token.value)            
          setUser(user)
            }
      }
  
      getUserData();
      
    },[token])
    
    
    
  return (
    <userLoginContext.Provider value={user} >
      {children}
    </userLoginContext.Provider>
  )
}
