
import React from 'react'

 function Heading({moreClass ="" ,text}) {

  
  return(
    <>
    
    <h1 className={`text-5xl text-center my-6 ${moreClass}  `}>
  {text}
  </h1>


    </>
  )
}

export default (Heading)
