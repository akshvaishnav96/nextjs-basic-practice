import React, { Suspense } from "react";
import User from "@/models/user";
import PageWrapper from "@/components/admin/PageWrapper";
import UserDetailsMain from "@/components/admin/profile/UserDetails_main"

export default async function page({ params }) {
  const id = params.id;

  const user = await User.findById(id).select("-password -__v");

  const userData = {
    "User Name" : user.userName,
    email:user.email,
    isVarified:user.isVarified,
    role:user.role
  }

  

  return (
    <>
      {user ? (
        <Suspense fallback="Loading">

          <div className=" text-center w-[80%] m-auto my-5 aspect-[3.5/1.5]  bg-white overflow-hidden shadow rounded-lg border">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                User Profile
              </h3>
              <p className="mt-1 m-auto max-w-2xl text-sm text-gray-500">
                This is some information about the user.
              </p>
            </div>
           <UserDetailsMain user={userData}/>
          </div>
        </Suspense>

      ) : (
        ""
      )}
    </>
  );
}
