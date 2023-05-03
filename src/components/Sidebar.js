import React from "react";
import LaptopIcon from "@mui/icons-material/Laptop";
import LogOutIcon from "@mui/icons-material/Logout";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate()
  function logout(){
    localStorage.clear();
    navigate('/auth');
  }
  return (
    <div className="fixed top-0 left-0 flex flex-col  sm:disabled h-screen w-[16rem] bg-slate-400">
      <div className="flex flex-col items-center gap-4 justify-center h-[14rem] w-[15rem]">
        <image
          src=""
          alt=""
          className="h-[7rem] w-[7rem] rounded-full bg-black"
        ></image>
        <h1 className="text-2xl ">Hi, Bhanu Prakash</h1>
      </div>
      <div className="mt-[2rem]">
        <button className="flex items-center  justify-start  gap-5 px-4 cursor-pointer h-[4rem] w-[16rem] hover:bg-slate-200">
          <LaptopIcon /> All Programs
        </button>
        <button className="flex items-center justify-start  gap-5 px-4 cursor-pointer h-[4rem] w-[16rem] hover:bg-slate-200 ">
          <LibraryBooksOutlinedIcon /> OneByte
        </button>
        <button className="flex items-center justify-start  gap-5 px-4 cursor-pointer h-[4rem] w-[16rem]  hover:bg-slate-200 animate-pulse duration-75">
          <WorkOutlineOutlinedIcon />
          Internships
        </button>
        <button className="flex items-center justify-start  gap-5 px-4 cursor-pointer h-[4rem] w-[16rem] hover:bg-slate-200 ">
          <LibraryBooksOutlinedIcon /> Certificates
        </button>
        <button onClick={()=>logout()} className="flex items-center justify-start  gap-5 px-4 cursor-pointer h-[4rem] w-[16rem] hover:bg-slate-200 ">
          <LogOutIcon /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
