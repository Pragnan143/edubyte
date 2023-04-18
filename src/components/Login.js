import React from "react";

const Login = () => {
  return (
    <div className="relative  h-96 mt-10 flex flex-col gap-12 mx-10 items-center justify-start">
      <h1 className=" font-poppins py-2   w-[20rem] text-black-500 text-xl font-semibold text-center">
        Hey! Welcome Back Dude...
      </h1>

      <input
        type="email"
        placeholder="Email..."
        className="border-b-2 font-light h-35  w-[18rem] lg:w-[20rem] px-4 py-2 outline-none "
      />
      <input
        type="password"
        placeholder="Password Dude..."
        className="  border-b-2 outline-none  w-[18rem] h-35  lg:w-[20rem] px-4 py-2 font-light "
      />

      <button className="absolute h-35  w-[18rem] lg:w-[20rem] bottom-5   lg:bottom-0 rounded-lg bg-lime-800 text-white  p-2 justify-center ">
        Sign In
      </button>
    </div>
  );
};

export default Login;
