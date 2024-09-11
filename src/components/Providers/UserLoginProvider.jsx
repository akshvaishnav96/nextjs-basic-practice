"use client";

import React, { useEffect, useState } from "react";
import { userLoginContext } from "../../context/userLoginContext";
import { verifyLoginToken } from "../../utils/LoginTokenVerification";

export default function UserLoginProvider({ children }) {
  const [user, setUser] = useState("");
  const pathName = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const getUserData = async () => {
      let { user } = await verifyLoginToken();
      setUser(user);
    };

    getUserData();
  }, []);

  return (
    <userLoginContext.Provider value={user}>
      {children}
    </userLoginContext.Provider>
  );
}
