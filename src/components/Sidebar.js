import React from "react";
import LaptopIcon from "@mui/icons-material/Laptop";
import LogOutIcon from "@mui/icons-material/Logout";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
const Sidebar = () => {
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
        <div className="flex items-center  justify-start  gap-5 px-4 cursor-pointer h-[4rem] w-[16rem] bg-slate-200">
          <LaptopIcon /> All Programs
        </div>
        <div className="flex items-center justify-start  gap-5 px-4 cursor-pointer h-[4rem] w-[16rem] bg-slate-200 ">
          <LibraryBooksOutlinedIcon /> OneByte
        </div>
        <div className="flex items-center justify-start  gap-5 px-4 cursor-pointer h-[4rem] w-[16rem]  bg-slate-200">
          <WorkOutlineOutlinedIcon />
          Internships
        </div>
        <div className="flex items-center justify-start  gap-5 px-4 cursor-pointer h-[4rem] w-[16rem]  bg-slate-200 ">
          <LogOutIcon /> Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
