import React from "react";

const Button = ({ loading=false , type="submit",  label="Submit",  }) => {
  return (
    <div className="flex w-full justify-center items-center my-4">
      <button type={type} disabled={loading} className="bg-blue-900 text-white py-1 px-12 cursor-pointer rounded w-full">
        {!loading ? label: "Loading..."}
      </button>
    </div>
  );
};

export default Button;
