import React from "react";

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
        placeholder="Email..."
        className="border-b-2 font-light h-35  w-[18rem] lg:w-[20rem] px-4 py-2 outline-none "
      />
      <input
        required
        min={6}
        type="password"
        placeholder="Password Dude..."
        className="  border-b-2 outline-none  w-[18rem] h-35  lg:w-[20rem] px-4 py-2 font-light "
      />

      <button
        type="submit"
        disabled={loading ? true : false}
        className="absolute h-35  w-[18rem] lg:w-[20rem] bottom-5   lg:bottom-0 rounded-lg bg-lime-800 text-white  p-2 justify-center "
      >
        Sign In
      </button>
    </form>
  );
};

export default Login;
