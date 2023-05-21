import React from "react";
import "react-responsive-modal/styles.css";

// import CloseIcon from "@mui/icons-material/Close";
// import { Modal } from "react-responsive-modal";
// import { Password } from "@mui/icons-material";
const SignUpPage = () => {
  // const [open, setOpen] = React.useState(false);
  const [uname, setUsername] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // console.log(uname);
  // console.log(email);
  // console.log(password);

  // const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => setOpen(false);

  return (
    <form
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   setShowModal(true);
      // }}
      className="relative h-[24rem]  flex flex-col gap-10 mt-10  items-center justify-start"
    >
      <h1 className=" py-2  lg:w-[24rem] sm:w-[18rem] text-black-500 text-xl font-semibold text-center">
        Let's Learn Together Buddy ...
      </h1>
      <input
        required
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Your Name Buddy..."
        className="border-b-2 font-light   w-[18rem] lg:w-[20rem] px-4 py-2 outline-none   "
      />
      <input
        required
        type="email"
        onChange={(e) => setemail(e.target.value)}
        placeholder="Email..."
        className="border-b-2 font-light  w-[18rem] lg:w-[20rem] px-4 py-2 outline-none   "
      />
      <input
        required
        min={6}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password Dude..."
        className="  border-b-2 outline-none  w-[18rem] lg:w-[20rem] p-1 font-light "
      />
      <button
        type="button"
        className="absolute h-35  w-[130%] lg:w-[20rem] bottom-5   lg:bottom-0 rounded-lg bg-lime-800 text-white  p-2 justify-center"
      >
        {/* <Modal
          open={open}
          onClose={onCloseModal}
          className={" relative"}
          center
        >
          <div className="absolute top-4 right-4 z-50 bg-red-800 rounded-full h-6 w-6   flex  justify-center items-center">
            <CloseIcon className="text-white" />
          </div>

          <div
            className="h-[12rem] p-10 w-[20rem] lg:w-[34rem]  gap-2 rounded-lg justify-center flex-col
             items-center  flex"
          >
            <input
              type="number"
              maxLength={10}
              className="border-solid  border-b-2 w-[20rem]  border-gray-200 outline-none "
              placeholder="Phone"
            />
            <p className="-my-1"> Enter your OTP </p>
            <div className="h-[3rem] w-[100%] gap-2  justify-center  items-center flex ">
              <input
                type="number"
                className="border-solid  obox text-center    w-[2rem] h-[2rem] rounded border-green-200"
              />
              <input
                type="number"
                className="border-solid  obox text-center  w-[2rem] h-[2rem] rounded border-green-200"
              />
              <input
                type="number"
                className="border-solid  obox text-center  w-[2rem] h-[2rem] rounded border-green-200"
              />
              <input
                type="number"
                className="border-solid  obox text-center  w-[2rem] h-[2rem] rounded border-green-200"
              />
              <input
                type="number"
                className="border-solid  obox text-center  w-[2rem] h-[2rem] rounded border-green-200"
              />
              <input
                type="number"
                className="border-solid  obox text-center  w-[2rem] h-[2rem] rounded border-gray"
              />
            </div>
            <button
              type="button"
              onClick={onOpenModal}
              className="absolute h-35  w-[130%] lg:w-[20rem] bottom-5   lg:bottom-0 rounded-lg bg-lime-800 text-white  p-2 justify-center"
            >
              Verify
            </button>
          </div>
        </Modal> */}
        Sign Up
      </button>
    </form>
  );
};

export default SignUpPage;
