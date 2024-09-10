import React from 'react'
import Heading from "@/components/user/Heading"


export default function FeatureProperty({children}) {
  return (
    <div
    className="container w-full my-16 m-auto"
    style={{ background: "rgb(229 231 235 / 29%)" }}
  >
    <Heading text="Featured Property" />
   {children}

    <div className="text-center my-5">
      <button className="bg-yellow-400 hover:bg-yellow-500">
        VIEW MORE
      </button>
    </div>
  </div>
  )
}
