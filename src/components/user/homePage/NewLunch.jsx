import React from 'react'
import homeCss from "@/css/home.module.css";


export default function NewLunch({children}) {
  return (
    <div className="container">
        {children}
    <div
      className="h-96 w-2/3 m-auto flex justify-center items-end text-white"
      style={{
        background:
          " url('/pexels-alex-staudinger-829197-1732414.jpg') no-repeat center center / cover",
      }}
    >
      <div
        className={`text-6xl py-6 my-6 w-full text-center ${homeCss.newLaunchBg}`}
      >
        NEW LAUNCH
      </div>
    </div>
  </div>

  )
}
