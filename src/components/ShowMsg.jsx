"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import ToastContainerComp from "@/components/ToastContainerComp"

import 'react-toastify/dist/ReactToastify.css';
export default function ShowMsg({ color }) {
  const search = useSearchParams();
  const msg = search.get("msg");
  const flag = search.get("flag");

 
  

  useEffect(() => {
    if (msg) {
      toast[flag](msg);
    }
  }, [msg,flag]);

  return (
    <div className={`text-${color}-500 text-center`}>
     
<ToastContainerComp />

    </div>
  );
}
