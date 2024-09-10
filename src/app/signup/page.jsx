import React, { Suspense } from "react";
import ShowMsg from "@/components/ShowMsg";
import Register from "@/components/admin/registerForm/Register";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "SignUp  Page",
  description: "Sign up to become the part of ourr family",
  keywords: 'home, awesome, site, example',
  
};


export default function SignUp() {
  return (
    <>
    <Suspense>

      <ShowMsg />
    </Suspense>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="w-1/2 h-screen hidden lg:block">
          <Image
            src="/4346990.jpg"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Register</h1>

            <Register />
          <div className="mt-6 text-blue-500 text-center">
            <Link href="/login" className="hover:underline">
              Go to Login Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
