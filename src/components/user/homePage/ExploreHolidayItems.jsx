import Image from 'next/image';
import React from 'react'

export default function ExploreHolidayItems() {
  let arr = new Array(3).fill("");

  
  return (
    <div className="container flex flex-wrap  md:justify-center">
      {arr.map((item,index)=>(

      <div key={index} className={`card flex flex-col items-center m-3 p-5 md:w-1/4 `}>
        <Image src="/4346990.jpg" width={100} height={100} alt="explore holiday facility icon" />
        <h5 className="text-2xl my-2">Choose</h5>
        <p className="text-center">
          Go onto the Listing section of our beautiful Luxury Vacation Homes
          at the Finest holiday destinations. Our dedicated team helps you
          to find the perfect fit, and you decide how many BRIKs you’d like
          to own.
        </p>
      </div>
      ))}
    
    </div>
  )
}
