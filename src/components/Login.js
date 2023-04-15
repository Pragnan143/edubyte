import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 mx-10 items-center justify-center">
        <h1 className=" px-8 py-1 w-64 text-gray-500 sm:text-md font-normal">
          Hey! Welcome Back ...
        </h1>

        <input
          type="email"
          placeholder="Email..."
          className="border-b-2 font-light  w-64 p-2 outline-none "
        />
        <input
          type="password"
          placeholder="Password Dude..."
          className="  border-b-2 outline-none w-64 p-2 font-light "
        />
        <button className="rounded-full bg-color5 text-white w-40 p-2 justify-center hover:bg-lime-800">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
