"use client";

import React, { Suspense, useContext,useState,useEffect } from "react";
import HeadingListItem from "./HeadingListItem";
import ListItemName from "./ListItemName";
import { v4 as uuidv4 } from "uuid";
import {userLoginContext} from "../../../../context/userLoginContext"

export default function SIdeBarMenuItems() {

  const {user} = useContext(userLoginContext);
  const [userData, setUserData] = useState("");
  useEffect(() => {
    if (window !=="undefined" && user ) {
      setUserData(user);
    }
  }, [user]);

let profilehref = `/profile/${userData._id}`
  const mainList = [
    { href: "/admin", name: "Dashboard", src: "/svg/Dashboard.svg" },
    { href: "/admin/board", name: "Board", src: "/svg/Board.svg" },
    { href: "/admin/message", name: "Message", src: "/svg/Message.svg" },
    {
      href: "notification",
      name: "Notification",
      src: "/svg/Notification.svg",
    },
  ];
  const settingList = [
    {
      href: profilehref,
      name: "Profile",
      src: "/svg/Profile.svg",
    },
    {
      href: "/admin/settings",
      name: "Settings",
      src: "/svg/Settings.svg",
    },
  ];

  return (
    <ul className="flex flex-col py-4 space-y-1">
      <HeadingListItem text={"Main"} key={uuidv4()} />

      {mainList.map((item) => (
        <ListItemName
          key={uuidv4()}
          href={item.href}
          name={item.name}
          src={item.src}
        />
      ))}

      <HeadingListItem text={"Settings"} />
      {settingList.map((item) => (
        <ListItemName
          key={uuidv4()}
          href={item.href}
          name={item.name}
          src={item.src}
        />
      ))}
    </ul>
  );
}
