import React, { useState } from "react";
import LoginContainer from "../components/LoginWrapper";
import Input from "../components/Input";
import Button from "../components/Button";
import { delay } from "./FormWithHooksState";
import { useNavigate } from "react-router-dom";

const FormWithoutHooks = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formEl = e.currentTarget; // snapshot before await
    const formdata = new FormData(formEl); // or do this line before await
    const email = String(formdata.get("email") || "");
    const password = String(formdata.get("password") || "");

    await delay(); // safe now

    try {
      const payload = { email, password };
      const res = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const finalResponse = await res.json();
      localStorage.setItem(
        "user",
        JSON.stringify({ ...finalResponse, ...payload })
      );
      navigate("/profile");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(true);
    }
  };

  return (
    <LoginContainer>
      <form onSubmit={handleFormSubmit} className="w-full" method="POST">
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
        <Button type="submit" loading={isLoading} />
      </form>
    </LoginContainer>
  );
};

export default FormWithoutHooks;
