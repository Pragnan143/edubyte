import React, { useState } from "react";
import Login from "./Login";
import Signup from "./SignUp";
const RegisterPage = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="m-0 p-0 bg-color4 h-screen	w-full flex  items-center justify-center ">
      <div className=" bg-white sm:w-[16rem] lg:h-[35rem] lg:w-[30rem]    rounded-xl flex flex-col overflow-hidden">
        <div className=" h-50  w-[25rem]  mt-8 mx-10 flex items-center gap-12 pb-5 justify-center relative">
          <div
            onClick={() => setMode("login")}
            className="font-semibold   w-[10rem]  flex items-center justify-center cursor-pointer text-[#4B4444]    "
          >
            Sign In
          </div>
          <div
            onClick={() => setMode("register")}
            className="font-semibold  w-[10rem]  flex items-center justify-center cursor-pointer text-[#4B4444] "
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
