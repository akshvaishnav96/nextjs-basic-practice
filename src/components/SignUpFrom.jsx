
import SubmitButton from "@/components/submitButton"

import { signUphandler } from "../utils/formHandler";



export default function SignUpForm() {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <form action={signUphandler} className="flex flex-col w-1/2 m-auto gap-3">
        <label htmlFor="username">Please Enter username</label>
        <input type="text" name="username" id="username" minLength={3} maxLength={20} />

        <label htmlFor="email">Please Enter Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Please Enter Password</label>
        <input type="password" name="password" id="password" />

       <SubmitButton />
      </form>
    </div>
  );
}
