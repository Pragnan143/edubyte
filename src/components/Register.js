import React, { useState } from "react";
import Login from "./Login";
import Signup from "./SignUp";
const RegisterPage = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="m-0 p-0 bg-color4 h-screen	w-full flex  items-center justify-center ">
      <div className=" bg-white h-96  lg:w-96 sm: w-76 rounded-xl flex flex-col overflow-hidden">
        <div className="flex items-center h-14 w-72  gap-12  mx-12 my-5 relative justify-center ">
          {mode === "login" ? (
            <div className="absolute border-b-2   border-lime-950 h-9 w-24 left-6 -z-1"></div>
          ) : (
            <div className="absolute border-b-2 border-lime-950 h-9 w-24 right-6 -z-1"></div>
          )}
          <div
            onClick={() => setMode("login")}
            className="font-semibold  h-9 w-24  flex items-center justify-center cursor-pointer text-[#4B4444]    "
          >
            Sign In
          </div>

          <div
            onClick={() => setMode("register")}
            className="font-semibold h-9 w-24  flex items-center justify-center cursor-pointer text-[#4B4444] "
          >
            Sign Up
          </div>
        </div>
        {mode === "login" ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default RegisterPage;
