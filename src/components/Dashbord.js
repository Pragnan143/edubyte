import React, { useState } from "react";
import Sidebar from "./Sidebar";
import CourseCard from "./CourseCard";
const Dashbord = () => {
  const [mode, setMode] = useState("enrolled");

  return (
    <div>
      <Sidebar />
      <div className="bg-color4 flex flex-col ml-[16rem]">
        <div className="flex flex-col items-center justify-center mt-12  h-max ">
          <h1 className="text-bold text-4xl my-6">ALL PROGRAMS</h1>
          <div className="h-[4rem] rounded-lg w-[70rem] mt-10  flex items-center gap-12 p-5 justify-center relative bg-gray-200 ">
            <div
              onClick={() => setMode("enrolled")}
              style={
                mode === "enrolled"
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "transparent" }
              }
              className="font-semibold h-[3rem]  w-[32rem] bg-white py-1 px-2 flex items-center rounded-lg   justify-center cursor-pointer text-[#4B4444]    "
            >
              Enrolled Programs
            </div>
            <div
              onClick={() => setMode("avaliable")}
              style={
                mode === "avaliable"
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "transparent" }
              }
              className="font-semibold h-[3rem] w-[32rem] bg-white py-1 px-2 flex items-center rounded-lg   justify-center cursor-pointer text-[#4B4444]    "
            >
              Avaliable
            </div>
          </div>
          <div className="h-full flex flex-wrap gap-[4rem] justify-center py-20 ">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
