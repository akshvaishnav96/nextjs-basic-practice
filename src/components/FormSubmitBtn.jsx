"use client"
import React from "react";
import { useFormStatus } from "react-dom";
import {DotLoader} from "react-spinners";


export default function FormSubmitBtn({ text }) {
  const {pending} = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled ={pending}
      className="bg-blue-500  hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full "
    >
      {pending ?  <DotLoader 
        color="white"
        loading={pending}
        size={20}
        aria-label="beat loader"
        data-testid="loader"
        
        
      />:text}
    </button>
  );
}
