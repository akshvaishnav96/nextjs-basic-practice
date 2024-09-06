import React from "react";
import { loginHandler } from "@/utils/formHandler";

export default function loginForm() {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <form action={loginHandler} className="flex flex-col w-1/2 m-auto gap-3">
        <label htmlFor="userdetail">Please Enter username or email</label>
        <input type="text" name="userdetail" id="userdetail" />

        <label htmlFor="password">Please Enter Password</label>
        <input type="password" name="password" id="password" />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/5 m-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
