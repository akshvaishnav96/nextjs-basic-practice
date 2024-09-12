"use client"
import InputElem from "@/components/InputElem";
import InputLable from "@/components/InputLable";
import FormSubmitBtn from "@/components/FormSubmitBtn";
import { loginHandler } from "../../../utils/formHandler";
import { useActionState, useContext } from "react";
import {  useRouter } from "next/navigation";
import { userLoginContext } from "@/context/userLoginContext";
import { verifyLoginToken } from "@/utils/LoginTokenVerification";



export default function Login() {
  const router = useRouter()
  const {setUser} = useContext(userLoginContext);

  const inputElem = [
    {
      lablefor: "email_or_password",
      labletext: "Enter email / username",
      inputType: "text",
      id: "email_or_password",
      name: "userdetail",
      className:
        "w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",
    },
    {
      lablefor: "password",
      labletext: "password",
      inputType: "password",
      id: "password",
      name: "password",
      className:
        "w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",
    },
  ];






async function formhandler(formData){

  const response = await loginHandler(formData);
if(response.success){
  let { user } = await verifyLoginToken();

  setUser(user)

  router.replace(`/?msg=${response.message}&flag=success`);
}else{
  router.push(`/login?msg=${response.message}&flag=error`);

}

}


  return (

    <form action={formhandler} >
      {inputElem.map((item, index) => (
        <div className="mb-4" key={index}>
          <InputLable lablehtmlFor={item.lablefor} text={item.labletext} />
          <InputElem
            type={item.inputType}
            id={item.id}
            name={item.name}
            className={item.className}
          />
        </div>
      ))}

      <div className="mb-6 text-blue-500">
        <a href="#" className="hover:underline">
          Forgot Password?
        </a>
      </div>

      <FormSubmitBtn text={"Login"}/>
    </form>
  );
}
