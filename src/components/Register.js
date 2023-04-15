import React, { useState } from "react";
import Login from "./Login";
import Signup from "./SignUp";
const RegisterPage = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="m-0 p-0 bg-color4 h-screen	w-full flex  items-center justify-center ">
      <div className=" bg-white h-96  lg:w-96 sm: w-76 rounded-xl flex flex-col">
        <span className="flex gap-12 p-8 justify-center  ">
          <button
            onClick={() => setMode("login")}
            className="font-semibold  h-9 w-24 bg-gray-200 outline-hidden text-[#4B4444] hover:outline outline-gray-200 rounded-lg"
          >
            Sign In
          </button>
          <button
            onClick={() => setMode("register")}
            className="font-semibold h-9 w-24   bg-gray-200 outline-hidden text-[#4B4444] hover:outline outline-gray-200 rounded-lg"
          >
            Sign Up
          </button>
        </span>
        {mode === "login" ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default RegisterPage;
