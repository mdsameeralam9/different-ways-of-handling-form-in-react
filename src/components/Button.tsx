import { useFormStatus } from "react-dom";
import type { ButtonProps } from "../types";
import CircleLoader from "./CircleLoader";


const Button:React.FC<ButtonProps> = ({ loading, type = "submit", label = "Submit" }) => {
  const { pending } = useFormStatus();
  const isLoading = loading ?? pending;
  console.log("isLoading", loading);

  return (
    <div className="flex w-full justify-center items-center my-4">
      <button
        type={type}
        disabled={isLoading}
        className="bg-blue-900 h-8 flex justify-center text-white py-1 px-12 cursor-pointer rounded w-full disabled:opacity-80"
      >
        {!isLoading ? label : <CircleLoader />}
      </button>
    </div>
  );
};

export default Button;
