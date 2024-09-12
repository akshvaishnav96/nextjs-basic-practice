"use client"
import React from "react";

export default function UserDetails({ keyVal, value }) {

  
  typeof value == "boolean" ? value = String(value) : ""

    
  
  return (
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500"><strong>{keyVal.toUpperCase()}</strong></dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
       {value}
      </dd>
    </div>
  );
}
