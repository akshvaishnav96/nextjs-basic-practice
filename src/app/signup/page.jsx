import React, { Suspense } from "react";
import SignUpForm from "@/components/SignUpFrom";
import ShowMsg from "@/components/ShowMsg";

export default function SignUp() {
  return (
   
<>
<h1>SignUp Page</h1>
<Suspense fallback="<Loading ...">
<ShowMsg />
</Suspense>
<SignUpForm />
</>
  );
}
