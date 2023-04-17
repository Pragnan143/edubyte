import React from "react";

const SignUpPage = () => {
  return (
    <div className="relative h-[24rem] flex flex-col gap-10 mt-10  items-center justify-start">
      <h1 className=" py-2  w-[24rem] text-black-500 text-2xl font-semibold">
        Let's Learn Together Buddy ...
      </h1>
      <input
        type="text"
        placeholder="Your Name Buddy..."
        className="border-b-2 font-light  w-[26rem] px-4 py-2 outline-none   "
      />
      <input
        type="email"
        placeholder="Email..."
        className="border-b-2 font-light  w-[26rem] px-4 py-2 outline-none   "
      />
      <input
        type="password"
        placeholder="Password Dude..."
        className="  border-b-2 outline-none w-[26rem] p-1 font-light "
      />
      <button className="absolute  bottom-0 rounded-lg bg-lime-800 text-white h-37 w-[26rem] p-2 items-center justify-center hover:bg-color5">
        Sign Up
      </button>
    </div>
  );
};

export default SignUpPage;
