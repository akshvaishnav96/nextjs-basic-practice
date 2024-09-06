
import InputElem from "@/components/InputElem";
import InputLable from "@/components/InputLable";
import FormSubmitBtn from "@/components/FormSubmitBtn";
import { signUphandler } from "../../../utils/formHandler";



  const inputElem = [
    {
      lablefor: "username",
      labletext: "username",
      inputType: "text",
      id: "username",
      name: "username",
      className:
        "w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",
    
    },
    {
      lablefor: "email",
      labletext: "email",
      inputType: "email",
      id: "email",
      name: "email",
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


export default function Register() {

  return (
    
      <form
      action={signUphandler}
       
      >
        {inputElem.map((item, index) => (
          <div className="mb-4" key={index}>
            <InputLable lablehtmlFor={item.lablefor} text={item.labletext} />

            <InputElem
              type={item.inputType}
              id={item.id}
              name={item.name}
              className={item.className}
              value={item.value}
              func={item.func}
            />
          </div>
        ))}

        <div className="mb-6 text-blue-500">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>
        <FormSubmitBtn text={"Register"} />
      </form>
  );
}
