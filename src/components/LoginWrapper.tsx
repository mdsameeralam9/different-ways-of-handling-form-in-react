import React from "react";

const LoginWrapper = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="bg-white w-[40%] shadow p-4 flex flex-col gap-1 justify-between items-center rounded min-h-60 h-[60%]">
      <div className="">
        <h1 className="text-2xl font-bold">Login With Your Credential</h1>
        {children}
      </div>
    </div>
  );
};

export default LoginWrapper;
