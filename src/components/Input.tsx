import React from "react";
import type { FormInput } from "../types";

const Input:React.FC<FormInput> = ({
  label = "",
  type = "",
  placeholder = "",
  name = "",
  value,
  required = true,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full my-4">
      <label className="text-blue-900 font-extrabold" htmlFor={label}>{label}</label>
      <input
        className="border border-gray-300 rounded p-1 w-full pl-2 focus:border-blue-950"
        id={label}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
