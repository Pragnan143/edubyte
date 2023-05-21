import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CourseCard = (props, c) => {
  const navigate = useNavigate();

  function reshit(id) {
    if (c === "enrolled") {
      // axios.get(`https://edubite-course-backend.vercel.app/user/login`);
      alert("THIS COURSE WILL STARTED AFTER JUNE 15")
    
    } else {
        navigate('/course/'+id)
        // console.log(id)
    }
  }
  console.log(props)
  return (
    <div
      onClick={() => reshit(props.props._id)}
      className="flex cursor-pointer flex-col mb-0 h-[15rem] w-[18rem] lg:w-[20rem] rounded-lg overflow-hidden bg-gray-500"
    >
      <image className=" h-3/4 lg:w-[24rem] bg-black"></image>
      <h3 className="flex justify-center py-5 text-center">
        {props.props.name}
      </h3>
    </div>
  );
};

export default CourseCard;
