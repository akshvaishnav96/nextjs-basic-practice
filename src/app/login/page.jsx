import React, { Suspense } from 'react'
import ShowMsg from "@/components/ShowMsg"
import LoginForm from "@/components/loginForm"
export default function Login() {

  return (
    <>
      <h1>Login Page</h1>
      <Suspense fallback="<Loading ...">
      <ShowMsg />
      </Suspense>
      <LoginForm />
    </>
  )
}
