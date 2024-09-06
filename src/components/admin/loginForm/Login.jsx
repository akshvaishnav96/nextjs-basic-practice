import InputElem from "@/components/InputElem";
import InputLable from "@/components/InputLable";
import FormSubmitBtn from "@/components/FormSubmitBtn";
import { loginHandler } from "../../../utils/formHandler";
export default function Login() {
  const inputElem = [
    {
      lablefor: "email_or_password",
      labletext: "Enter email / username",
      inputType: "text",
      id: "email_or_password",
      name: "userdetail",
      className:
        "w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",
    },
    {
      lablefor: "password",
      labletext: "password",
      inputType: "password",
      id: "password",
      name: "password",
      className:
        "w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",
    },
  ];

  return (
    <form action={loginHandler}>
      {inputElem.map((item, index) => (
        <div className="mb-4" key={index}>
          <InputLable lablehtmlFor={item.lablefor} text={item.labletext} />
          <InputElem
            type={item.inputType}
            id={item.id}
            name={item.name}
            className={item.className}
          />
        </div>
      ))}

      <div className="mb-6 text-blue-500">
        <a href="#" className="hover:underline">
          Forgot Password?
        </a>
      </div>

      <FormSubmitBtn text={"Login"} />
    </form>
  );
}
