"use client"
import React from 'react'
import {NextUIProvider} from '@nextui-org/react'


export default function NextUiProviderComp({children}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
