import React, { useActionState } from "react";
import LoginContainer from "../components/LoginWrapper";
import Input from "../components/Input";
import Button from "../components/Button";
import type { FormState } from "../types";
import { delay } from "./FormWithHooksState";
import { useNavigate } from "react-router-dom";

const FormWithUseActionState = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (
    initiaData: FormState,
    formData: FormData
  ) => {
    // delay
    await delay();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const payload = {
      email,
      password,
    };

    // api call
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((firstResponse) => firstResponse.json())
      .then((finalResponse) => {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...finalResponse, ...payload })
        );
      })
      .catch((error) => {
        console.log(error);
        // show toast message;
        // build custom toast;
      });

    // redict to profile
    navigate("/profile");
  };

  const [state, formAction, isPending] = useActionState<FormState>(
    handleFormSubmit,
    { email: "", password: "" }
  );

  return (
    <LoginContainer>
      <form action={formAction} className="w-full">
        <Input
          label="Email"
          type="email"
          placeholder="Enter Your Email"
          name="email"
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          name="password"
          required
        />
        <Button loading={isPending} />
      </form>
    </LoginContainer>
  );
};

export default FormWithUseActionState;
