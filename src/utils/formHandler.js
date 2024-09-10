"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import User from "@/models/user";
import { sendMail } from "@/utils/nodemailer";
import dbConn from "@/database/dbconn";
import "react-toastify/dist/ReactToastify.css";
import generateAccessTokenAndRefreshToken from "@/utils/generat_Access_Refresh_Token"
import { cookies } from "next/headers";

dbConn();
const signUphandler = async (formData) => {
  const verifyData = z.object({
    username: z
      .string()
      .min(3, "minimum name length is 3")
      .max(20, "max name length is 20"),
    email: z.string().email(),
    password: z.string().min(8, "password minimum length is 8"),
  });

  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  let errorData;
  try {
    const verifiedUserData = await verifyData.parseAsync({
      username,
      email,
      password,
    });
  } catch (error) {
    errorData = error;
  }

  if (errorData) {
    return redirect(`/signup?msg=${errorData.issues[0].message}&flag=error`);
  }

  const existingUser = await User.findOne({
    $or: [{ email }, { userName: username }],
  });

  if (existingUser) {
    return redirect("/login?msg=use already exist&flag=error");
  }

  const user = await User.create({ userName: username, email, password });

  const newUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  // await sendMail({email:newUser.email, emailType: "VERIFY", userId: newUser._id });

  // return redirect(`/login?msg=mail send to ${email} please verify account`)
  if (newUser) {
    return redirect(`/login?msg=User Added Successfully&flag=success`);
  } else {
    return redirect(`/signup?msg=Something went wrong&flag=error`);
  }
};

const loginHandler = async (formData) => {


  const userdetail = formData.get("userdetail");
  const password = formData.get("password");

  const validateData = z.object({
    userdetail: z.string().min(1),
    password: z.string().min(1),
  });

  await validateData.parseAsync({ userdetail, password });

  let errorData;
let existUser;
  try {
     existUser = await User.findOne({
      $or: [{ email: userdetail }, { userName: userdetail }],
    });

    if (!existUser) {
      throw new Error("user dosen't exist");
    }
  } catch (error) {
    errorData = error.message;
  }

  if (errorData) {
    return redirect(`/login?msg=${errorData}&flag=error`);
  }

  const verify = await existUser.verifyPassword(password);


  if (!verify) {
    return redirect(`/login?msg=Invalid User Details&flag=error`);
  }

  

  const { accessToken, refreshToken, userId } = await generateAccessTokenAndRefreshToken(existUser._id)

  const cookieStore = cookies();
  cookieStore.set('access_token', accessToken, {
    httpOnly: true,
    expires: new Date(Date.now() + 8400000), // Sets the cookie expiration time
    path: '/',
    // Ensure secure flag is set in production


  });

 return redirect(`/`);


};

export { signUphandler, loginHandler };
