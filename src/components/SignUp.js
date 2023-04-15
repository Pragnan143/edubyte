import React from "react";

const registerPage = () => {
  return (
    <div className="flex flex-col gap-10 mx-10 items-center justify-center">
      <input
        type="text"
        placeholder="Your Name Buddy..."
        className="border-b-2 font-light mt-2 w-64 p-1 outline-none   "
      />
      <input
        type="email"
        placeholder="Email..."
        className="border-b-2 font-light  w-64 p-1 outline-none   "
      />
      <input
        type="password"
        placeholder="Password Dude..."
        className="  border-b-2 outline-none w-64 p-0 font-light "
      />
      <button className="rounded-full bg-color5 text-white w-40 p-2 justify-center hover:bg-lime-800">
        Sign Up
      </button>
    </div>
  );
};

export default registerPage;
