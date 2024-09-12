import React from 'react'

export default function PageWrapper({children}) {
  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
    <div className="px-3 md:lg:xl:px-40  py-20 bg-opacity-10">
      {children}
    </div>
    </div>
  )
}
