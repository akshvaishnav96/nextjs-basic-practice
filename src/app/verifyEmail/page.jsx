import React, { Suspense } from 'react'
import ButtonComp from '../../components/ButtonComp'

export default async function page() {
    
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <ButtonComp />
</Suspense>
  )
}
