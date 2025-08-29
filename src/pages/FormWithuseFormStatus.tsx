import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import LoginContainer from "../components/LoginWrapper";
import { delay } from "./FormWithHooksState";

const FormWithuseFormStatus = () => {
  const navigate = useNavigate();
  async function handleFormSubmit(formData: FormData) {
  
    // delay
    await delay()
    
    const payload = Object.fromEntries(formData);

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

    // success redirect;
    navigate("/profile");
  }

  return (
    <LoginContainer>
      <form method="POST" action={handleFormSubmit} className="w-full">
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
        <Button handleActioninButton />
      </form>
    </LoginContainer>
  );
};

export default FormWithuseFormStatus;
