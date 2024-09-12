"use client"
import React from "react";
import UserDetails from "@/components/admin/profile/UserDetails"



export default function UserDetails_main({user}) {
    
  return (
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl className="sm:divide-y sm:divide-gray-200">
      {[user].map((item, index) => (
        <div key={index}>
          {Object.entries(item).map(([key, value]) => (
            <div key={key}>
             
              <UserDetails keyVal={key} value={value} />
            </div>
          ))}
        </div>
      ))}
      </dl>
    </div>
  );
}
