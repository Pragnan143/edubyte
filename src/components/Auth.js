import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./SignUp";
const Auth = () => {
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("token")){
      navigate('/dashboard')
    }
  },[])
  return (
    <div className="m-0 p-10 bg-color4 h-screen	w-full flex items-center justify-center ">
      <div className=" bg-white sm:w-[16rem] lg:h-[34rem] lg:w-[24rem]   rounded-xl flex flex-col overflow-hidden">
        <div className="h-[1.5rem] sm:w-[18rem] rounded-lg transform-transistion duration-75 lg:w-[21.3rem] mx-5 mt-5  flex items-center gap-12 p-5 justify-center relative bg-gray-200 ">
          <div
            onClick={() => setMode("login")}
            style={
              mode === "login"
                ? { backgroundColor: "white" }
                : { backgroundColor: "transparent" }
            }
            className="font-semibold   w-[100%] bg-white py-1 px-2 flex items-center rounded-lg    justify-center cursor-pointer text-[#4B4444]    "
          >
            Sign In
          </div>
          <div
            onClick={() => setMode("register")}
            style={
              !(mode === "login")
                ? { backgroundColor: "white" }
                : { backgroundColor: "transparent" }
            }
            className="font-semibold   w-[110%] bg-white py-1 px-2 flex items-center rounded-lg   justify-center cursor-pointer text-[#4B4444]    "
          >
            Sign Up
          </div>
        </div>
        {mode === "login" ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default Auth;
