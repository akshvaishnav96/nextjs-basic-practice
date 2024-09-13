import React from 'react'
import Heading from '../Heading'
import Image from 'next/image';

export default function WhyBrikitt() {
  const arr = new Array(8).fill("");
  return (
    <div className="container text-center">
    <Heading text="Why brik itt" />
    <p>
      BRIKitt is a new-age PropTech company dedicated to fractional
      investment of the real estate industry with it’s Integrated PropTech
      ecosystem that combines tech expertise with a real estate domain
      journey. Your owned properties can be turned it into a source of
      income on the score of money investment ideas. BRIKitt simplifies
      fractional real estate investments. We will take care of all the
      maintenance requirements while you enjoy the benefits hassle-free. Our
      goal is to make Owning Holiday Home in a Smart Way an easy and
      stress-free experience. Our cutting-edge technology and strong
      platform will provide you with solutions of fractional ownership real
      estate in India that are handled by professionals with years of
      experience and management skills.
    </p>
    <div className="flex flex-wrap m-auto justify-center">
      {arr.map((item,index)=>(

      <div key={index} className="card flex flex-col items-center m-3 p-5 w-1/5">
        <Image src="/4346990.jpg" width={100} height={100} alt="why brikitt logo"/>
        <span className="text-gray-400 my-2">Choose</span>
      </div>
      ))}
      
      {/* Repeat the above <div> for each card */}
    </div>
  </div>
  )
}
