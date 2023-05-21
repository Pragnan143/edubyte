import React from "react";
import LaptopIcon from "@mui/icons-material/Laptop";
import LogOutIcon from "@mui/icons-material/Logout";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/auth");
  }
  return (
    <div className=" flex flex-col fixed left-0 top-0 h-screen  w-auto lg:w-1/6 bg-[#B2A4FF]">
      <div className="flex flex-col items-center gap-4 justify-center mt-10 lg:h-[14rem] lg:w-[15rem]">
        <img
          src=""
          alt=""
          className="content-fit lg:h-[7rem] h-10 w-10 lg:w-[7rem] rounded-full bg-sky-100"
        ></img>
        <h1 className="text-2xl hidden lg:flex ">Hi, Bhanu Prakash</h1>
      </div>
      <div className=" mt-[2rem]">
        <button className="flex items-center  justify-start text-white gap-5 px-4 cursor-pointer h-[4rem] w-full hover:bg-slate-200  hover:text-black">
          <LaptopIcon /> <p className="hidden lg:flex">All Programs</p>
        </button>
        <button className="flex items-center justify-start text-white gap-5 px-4 cursor-pointer h-[4rem] w-full hover:bg-slate-200  hover:text-black">
          <LibraryBooksOutlinedIcon />
          <p className="hidden lg:flex">OneByte</p>
        </button>
        <button className="flex items-center justify-start text-white  gap-5 px-4 cursor-pointer h-[4rem] w-full  hover:bg-slate-200 animate-pulse duration-75  hover:text-black">
          <WorkOutlineOutlinedIcon />
          <p className="hidden lg:flex">Internships</p>
        </button>
        <button className="flex items-center justify-start text-white  gap-5 px-4 cursor-pointer h-[4rem] w-full hover:bg-slate-200  hover:text-black">
          <LibraryBooksOutlinedIcon />
          <p className="hidden lg:flex">Certificates</p>
        </button>
        <button
          onClick={() => logout()}
          className=" flex items-center justify-start text-white gap-5 px-4 cursor-pointer h-[4rem] w-full hover:bg-slate-200 hover:text-black "
        >
          <LogOutIcon />
          <p className="hidden lg:flex">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
