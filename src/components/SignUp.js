import React from "react";

const registerPage = () => {
  return (
    <div className="flex flex-col gap-10 mx-10 items-center justify-center">
      <input
        type="text"
        placeholder="Your Name Buddy..."
        className="border-b-2 font-normal  w-64 p-1 outline-none  hover:font-medium "
      />
      <input
        type="email"
        placeholder="Email..."
        className="border-b-2 font-normal  w-64 p-1 outline-none  hover:font-medium "
      />
      <input
        type="password"
        placeholder="Password Dude..."
        className="  border-b-2 outline-none w-64 p-0 font-normal hover:font-medium"
      />
      <button className="rounded-full bg-color5 text-white w-40 p-2 justify-center hover:bg-lime-800">
        Sign In
      </button>
    </div>
  );
};

export default registerPage;
