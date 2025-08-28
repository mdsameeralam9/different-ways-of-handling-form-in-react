import React, { useState } from "react";
import type { FormState } from "../types";
import Input from "../components/Input";
import Button from "../components/Button";

const FormWithHooksState = () => {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // valid

    // api call
    // simulate delay

    // success redirect

    // reset the state

    // failure - show toast
  };

  const { email, password } = formState;

  return (
    <div className="bg-white w-[40%] shadow p-4 flex flex-col gap-1 justify-between items-center rounded min-h-60 h-[60%]">
        <div className="">
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="text-sm text-gray-500">Enter your email and password to login</p>
        </div>
      <form onSubmit={handleFormSubmit} className="w-full">
        <Input
          label="Email"
          type="text"
          placeholder="Enter Your Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Button />
      </form>
    </div>
  );
};

export default FormWithHooksState;
