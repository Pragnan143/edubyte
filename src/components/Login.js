import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://edubite-course-backend.vercel.app/user/login",
        { email: uname, password: pass }
      );
      console.log(res.data)
    } catch {
      console.log("Login Failed");
    }
    setLoading(false);
  };
  return (
    <form
      className="relative  h-96 mt-10 flex flex-col gap-12 mx-10 items-center justify-start"
      onSubmit={submit}
    >
      <h1 className=" font-poppins py-2   w-[20rem] text-black-500 text-xl font-semibold text-center">
        Hey! Welcome Back Dude...
      </h1>

      <input
        required
        type="email"
        onChange={(e) => setUname(e.target.value)}
        placeholder="Email..."
        className="border-b-2 font-light h-35  w-[130%] lg:w-[20rem] px-4 py-2 outline-none "
      />
      <input
        required
        min={6}
        onChange={(e) => setPass(e.target.value)}
        type="password"
        placeholder="Password Dude..."
        className="  border-b-2 outline-none  w-[130%] h-35  lg:w-[20rem] px-4 py-2 font-light "
      />

      <button
        type="submit"
        disabled={loading ? true : false}
        className="absolute h-35  w-[130%] lg:w-[20rem] bottom-5   lg:bottom-0 rounded-lg bg-lime-800 text-white  p-2 justify-center "
      >
        Sign In
      </button>
    </form>
  );
};

export default Login;
