import React from 'react'
import Heading from '@/components/user/Heading'

export default function ExploreYourHoliday({children}) {
  return (
    <div>
    <Heading text="EXPLORE YOUR HOLIDAY HOME WITH BRIK itt" />
   {children}

    <div className="text-center">
      <button className="bg-yellow-400 hover:bg-yellow-500">
        Get Started
      </button>
    </div>
  </div>
  )
}
