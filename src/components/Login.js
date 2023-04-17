import React from "react";

const Login = () => {
  return (
    <div className="relative  h-96 mt-10 flex flex-col gap-12 mx-10 items-center justify-start">
      <h1 className=" font-poppins py-2   w-[24rem] text-black-500 text-2xl font-semibold">
        Hey! Welcome Back Dude...
      </h1>

      <input
        type="email"
        placeholder="Email..."
        className="border-b-2 font-light h-37  w-[26rem] px-4 py-2 outline-none "
      />
      <input
        type="password"
        placeholder="Password Dude..."
        className="  border-b-2 outline-none h-37  w-[26rem] px-4 py-2 font-light "
      />

      <button className="absolute h-35  w-[26rem] bottom-0 rounded-lg bg-lime-800 text-white  p-2 justify-center hover:bg-color5">
        Sign In
      </button>
    </div>
  );
};

export default Login;
