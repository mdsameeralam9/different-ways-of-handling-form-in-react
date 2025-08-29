import { useState } from "react";
import type { FormState } from "../types";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import LoginContainer from "../components/LoginWrapper";

const initialFormData = {
  email: "",
  password: "",
};

export const delay = (time = 3000) =>
  new Promise((res) => setTimeout(res, time));

const FormWithHooksState = () => {
  const [formState, setFormState] = useState<FormState>({ ...initialFormData });
  const [loading, setLoading] = useState<boolean>();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // loading true
    setLoading(true);

    // validate

    // simulate delay
    await delay();

    // paload
    // const payload = new FormData();
    // payload.append('email', formState.email);
    // payload.append('password', formState.password);

    const payload = {
      email: formState.email,
      password: formState.password,
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
        // reset the form state
        setFormState({ ...initialFormData });
      })
      .catch((error) => {
        console.log(error);
        // show toast message;
        // build custom toast;
      })
      .finally(() => {
        setLoading(false);
      });

    // success redirect;
    navigate("/profile");
  };

  const { email, password } = formState;

  return (
    <LoginContainer>
      <form onSubmit={handleFormSubmit} className="w-full">
        <Input
          label="Email"
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <Button loading={loading} />
      </form>
    </LoginContainer>
  );
};

export default FormWithHooksState;
