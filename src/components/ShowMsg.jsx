"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import ToastContainerComp from "@/components/ToastContainerComp"

import 'react-toastify/dist/ReactToastify.css';
export default function ShowMsg() {
  const search = useSearchParams();
  const msg = search.get("msg");
  const flag = search.get("flag");

 
  

  useEffect(() => {
    if (msg) {
      if(flag){
        toast[flag](msg);
      }else{
        toast(msg);
      }
    }
  }, [msg,flag]);

  return (
    <>
     
<ToastContainerComp />

    </>
  );
}
