"use client";
import React, { useEffect, useState } from "react";
import { logoutHandler } from "@/utils/logoutHandler";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useContext } from "react";
import { userLoginContext } from "@/context/userLoginContext";
import { DotLoader } from "react-spinners";
import Image from "next/image";

export default function ProfileLogo() {
  const router = useRouter();
  const user = useContext(userLoginContext);
  const [userData, setUserData] = useState("");
  const [LogoutLoading, setLogOutLoading] = useState(false);

 
  

  useEffect(() => {
    if (window !=="undefined" && user ) {
      setUserData(user);
  
    }
  }, [user]);

  function logout() {
    async function logoutData() {
      try {
        setLogOutLoading(true);
        const data = await logoutHandler(router);
      } catch (error) {
        console.log(error);
      } finally {
        setLogOutLoading(false);
      }
    }
    logoutData();
  }

  const [menuDisplay, setMenuDisplay] = useState(false);
  return (
    <>
      {userData ? (
        <div className="relative ml-3">
          <div>
            <button
              type="button"
              className="relative flex rounded-full bg-gray-800 text-sm hover:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              onClick={() => setMenuDisplay((prev) => !prev)}
            >
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
          </div>

          {menuDisplay && (
            <div
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
            >
              <Link
                href={`/admin/profile/${user._id}`}
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-0"
              >
                Your Profile
              </Link>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-1"
              >
                Settings
              </a>
              <button
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-2"
                onClick={() => logout()}
              >
                {LogoutLoading ? (
                  <DotLoader
                    color="blue"
                    loading={LogoutLoading}
                    size={20}
                    aria-label="beat loader"
                    data-testid="loader"
                  />
                ) : (
                  "Sign out"
                )}
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link
          href={"/login"}
          type="button"
          className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
         <Image src='/svg/profile-user-avatar-man-person-svgrepo-com.svg' alt="profile logo" width={30} height={30} className="invert" />
        </Link>
      )}
    </>
  );
}
