import React from 'react'
import homeCss from "@/css/home.module.css";


export default function HeroSection() {
  return (
    <section
    className="flex items-center justify-center"
    style={{
      background:
        " url('/5c1cbaf96bcec-wallpaper-preview.jpg') no-repeat center center / cover",
      backgroundAttachment: "fixed",
    }}
  >
    <div className="container text-white my-36 pl-20">
      <h1 className="text-5xl my-3">Smart Way To Own A Holiday Home</h1>
      <h4 className="text-3xl my-3">Investment starts at 6 lacs only*</h4>
      <div>
        <button className={`${homeCss.button_border} ${homeCss.m2_p2}`}>
          EXPLORE
        </button>{" "}
        <button className={`${homeCss.button_border} ${homeCss.m2_p2}`}>
          GET IN TOUCH
        </button>
      </div>
      <button className={`${homeCss.button_Bg_yellow} ${homeCss.m2_p2}`}>
        BOOK YOUR STAY
      </button>
    </div>
  </section>
  )
}
