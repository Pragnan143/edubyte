import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import CourseCard from "./CourseCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Dashbord = () => {
  const [courses,setCourses]=useState([]);
  const [ecourses,setEcourses]=useState([]);
  const [mode, setMode] = useState("enrolled");
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get("https://edubite-course-backend.vercel.app/courses/all_courses")
      .then((r)=>setCourses(r.data))
    const token = localStorage.getItem('token')
    if(!token){
      navigate("/auth")
    }else{
      axios.get("https://edubite-course-backend.vercel.app/user/course/enrolled",{headers:{"x-access-token":token}})
      .then((r)=>setEcourses(r.data))
      .catch((e)=>console.log(e))
    }
  },[])
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
              {
                (mode === "avaliable" ? 
                courses.map((i)=>{
                  return(
                    <CourseCard props={i} c="normal"/>
                  )
                }) : ecourses.map((i)=>{
                  return(
                    <CourseCard props={i} c="enrolled"/>
                  )
                }))
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
