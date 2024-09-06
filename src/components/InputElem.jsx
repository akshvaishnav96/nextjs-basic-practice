import { memo } from "react";

function InputElem({ type, name, id, placeholder, className}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className}
      autoComplete="off"
    
    />
  );
}

export default memo(InputElem);
