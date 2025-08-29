import { useState } from "react";
import type { FormState } from "../types";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import LoginWrapper from "../components/LoginWrapper";

const initialFormData = {
  email: "",
  password: "",
};

const delay = () => new Promise((res) => setTimeout(res, 3000));

const FormWithHooksState = () => {
  const [formState, setFormState] = useState<FormState>({ ...initialFormData });
  const [loading, setLoading] = useState<boolean>();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // loading true
    setLoading(true);

    // valid

    // simulate delay
    await delay();

    // api call
    const payload = {
      email: formState.email,
      password: formState.password,
    };

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
    <LoginWrapper>
      <form onSubmit={handleFormSubmit} className="w-full">
        <Input
          label="Email"
          type="email"
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
        <Button loading={loading} />
      </form>
    </LoginWrapper>
  );
};

export default FormWithHooksState;
