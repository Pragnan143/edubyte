import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Content from "./Content";
import Syllabus from "./Syllabus";
import Book_duotone from "../assets/Book_duotone.svg";
import Head_phone from "../assets/head_phone.svg";
import Key from "../assets/key.svg";
import Lamp_duotone_line from "../assets/Lamp_duotone_line.svg";
import Time_duotone from "../assets/Time_duotone.svg";
import Tick from "../assets/Tick.svg"
import { useLocation } from 'react-router-dom'
import Projects from "./Projects";


function Coursepage() {
  // const router = useRouter();

  var dsa_c = {
    _id: "644e174ccf914bb8916e832b",
    name: "Data Structures and Algorithms from Scratch using C++",
    img: "dsa.png",
    dis: "Master essential data structures and algorithms for software engineering in our comprehensive DSA course, covering topics such as sorting algorithms, trees, and graphs. Enroll today to gain the skills and knowledge to succeed in technical interviews and build efficient software solution",
    batch: "Summer",
    started: false,
    timing: "evening 6pm",
    cost: 1000,
    duration: "2 months",
    projects: [
      {
        heading: "Solving the Interview Questions",
        dis: "Develop proficiency in data structures and algorithms by solving interview questions, and increase your chances of succeeding in technical interviews.",
        img: "ques.jpg",
        _id: "644e174ccf914bb8916e832c",
      },
      {
        heading: "Implementing a game AI using minimax algorithm",
        dis: "The minimax algorithm is used in game development to create challenging opponents.",
        img: "game.jpg",
        _id: "644e174ccf914bb8916e832d",
      },
      {
        heading: "Designing a job scheduling algorithm",
        dis: "Create a website that enables the efficient management of diverse books in a library, offering features such as search and browsing functionalities, user registration and login, as well as book reservation and checkout.",
        img: "job.png",
        _id: "644e174ccf914bb8916e832e",
      },
    ],
    no_students: 0,
    atc: "Our comprehensive DSA (Data Structures and Algorithms) course teaches you essential concepts in computer science, including data structures like arrays, linked lists, trees, and graphs, and algorithms like sorting and searching. With hands-on practice, you will gain the skills and knowledge to develop efficient software solutions and succeed in technical interviews. Enroll today to take your programming skills to the next level.",
    technolgies: ["C++"],
    learn: [
      "Introduction to algorithms and data structures.",
      "Time and space complexity analysis.",
      "Arrays, linked lists, trees, and graphs.",
      "Searching and sorting algorithms.",
      "Hash tables and their applications.",
      "Greedy algorithms and dynamic programming.",
      "Graph algorithms and their applications.",
      "String algorithms and their applications.",
      "Practical implementation of algorithms and data structures using a programming language like C and C++",
    ],
    syllabus: [
      {
        heading: "Mastering C++ Programming ",
        dis: "Gain expertise in C++ programming with our comprehensive course covering fundamental concepts, data structures, algorithms, and practical implementation",
        concepts: [
          "Basic syntax, variables, and data types.",
          "Control structures and loops.",
          "Arrays and pointers.",
          "Functions ",
          "Oops concepts ",
        ],
        _id: "644e174ccf914bb8916e832f",
      },
      {
        heading: "Introduction to algorithms and data structures.",
        dis: "Learn the fundamental concepts of algorithms and data structures to design efficient solutions to complex programming problems in our introductory course.",
        concepts: [],
        _id: "644e174ccf914bb8916e8330",
      },
      {
        heading: "Time and space complexity analysis.",
        dis: "Time and space complexity analysis involves analyzing the efficiency of algorithms in terms of time and space usage to determine their scalability and effectiveness.",
        concepts: [],
        _id: "644e174ccf914bb8916e8331",
      },
      {
        heading: "Arrays, linked lists, trees, and graphs.",
        dis: "Arrays, linked lists, trees, and graphs are common data structures used to organize and store data in a variety of applications.",
        concepts: [],
        _id: "644e174ccf914bb8916e8332",
      },
      {
        heading: "Searching and sorting algorithms.",
        dis: "Searching and sorting algorithms involve finding and arranging data in a specific order to optimize search and retrieval processes for various applications.",
        concepts: [],
        _id: "644e174ccf914bb8916e8333",
      },
      {
        heading: "Solving the Interview Questions",
        dis: "Solving interview questions involves applying data structures and algorithms to effectively solve technical problems and demonstrate proficiency in software engineering concepts.",
        concepts: [],
        _id: "644e174ccf914bb8916e8334",
      },
    ],
    __v: 0,
  };

  var full_c = {
    _id: "644e173dcf914bb8916e8320",
    name: "Full Stack Web Dev Industrial Training Program",
    img: "fswd.jpg",
    dis: "Join us for the intensive industrial training program on full-stack web dev and get yourself placed as a Web Developer or SDE in your dream company. Batches starting Soon.",
    batch: "Summer",
    started: false,
    timing: "evening 4pm",
    cost: 1000,
    duration: "2 months",
    projects: [
      {
        heading: "Task Management App",
        dis: "Develop a Task Management Application using JavaScript and Tailwind CSS, and deploy it to the web by leveraging Amazon Web Services (AWS) cloud computing platform",
        img: "task.jpg",
        _id: "644e173dcf914bb8916e8321",
      },
      {
        heading: "Book Management API",
        dis: "Create a website that enables the efficient management of diverse books in a library, offering features such as search and browsing functionalities, user registration and login, as well as book reservation and checkout capabilities.",
        img: "book.png",
        _id: "644e173dcf914bb8916e8322",
      },
      {
        heading: "Netflix Frontend Clone",
        dis: "Develop the user interface (UI) for the Netflix Clone master project and implement Redux actions to establish communication with the backend.",
        img: "netflix.png",
        _id: "644e173dcf914bb8916e8323",
      },
      {
        heading: "Netflix Backend Clone",
        dis: "Create and construct APIs for the master project, specifically the Netflix Clone, utilizing Node.js, Express, and MongoDB.",
        img: "netflix.png",
        _id: "644e173dcf914bb8916e8324",
      },
      {
        heading: "Netlfix Deployment and DevOps",
        dis: "Utilizing Docker and Kubernetes, orchestrate the deployment of the Netflix Website to AWS.",
        img: "netflix.png",
        _id: "644e173dcf914bb8916e8325",
      },
    ],
    no_students: 0,
    atc: "The goal of this industrial training program is to equip interns with the unique skills they need to build database-backed APIs and web applications with the proper industry level front-end as well as scale up the deployment for the millions. A graduate of this program will be able to design and build databases for software applications, create and deploy database-backed web APIs, and secure and manage user authentication and access control for an application backend. They will be able to build production level frontend according to the industrial standards. Students will also learn how to deploy an entire web application to the cloud using Docker and Kubernetes and how to maintain and scale them.",
    technolgies: ["HTML", "CSS", "JS", "node js"],
    learn: [
      "HTML, CSS, and JavaScript",
      "Front-end frameworks like React.js and Redux",
      "Server-side programming with Node.js and Express.js",
      "Database management with MongoDB",
      "RESTful API design and implementation",
      "Deployment using AWS, Docker, and Kubernetes",
      "Authentication and security measures",
      "Performance optimization techniques",
    ],
    syllabus: [
      {
        heading: "Web Development fundamentals ",
        dis: "We will start with the fundamentals that are essential to become a web developer, such as",
        concepts: ["HTML", "CSS", "Java Script"],
        _id: "644e173dcf914bb8916e8326",
      },
      {
        heading: "Front End Development with React",
        dis: "We will learn how about analyzing and deciding on components with state that can be reused to build a scalable UI.",
        concepts: [
          "JSX syntax,",
          "class and function components",
          "unidirectional data flow",
          "virtual DOM",
          "Hooks",
        ],
        _id: "644e173dcf914bb8916e8327",
      },
      {
        heading: "Backend development with node, express & MongoDB",
        dis: "We will learn about architecting & building a scalable and secure backend for an application of any size",
        concepts: ["Express", "Node js", "Mongodb"],
        _id: "644e173dcf914bb8916e8328",
      },
      {
        heading: "Deploy to Cloud with Docker and CICD",
        dis: "By leveraging the power of containers & CICD, learn how to securely move your app to cloud and learn how to use Docker to manage your application in production.",
        concepts: ["Docker", "AWS basics", "CI/CD"],
        _id: "644e173dcf914bb8916e8329",
      },
    ],
    __v: 0,
  };

  // const [course, setCourse] = useState({});
  var course={}
  const location = useLocation();
  console.log();
  // useEffect(() => {
    if (location.pathname.split("/")[2] === "644e174ccf914bb8916e832b") {
      course=dsa_c
    } else {
      course=full_c;
    }
  // }, []);
  console.log(course);

  function enroller(){
    alert(localStorage.getItem("token"))
    alert(course._id)
    axios.post(`/enrollement/${course._id}`)
  }

  return (
    <div className="w-[100vw] flex justify-center items-center flex-col">
      <section className=" flex lg:h-[60rem] lg:w-[81.5rem]   rounded-lg  lg:my-16 bg-violet-100">
        <div className="flex flex-col">
          <div className="flex flex-col-reverse mt-16 lg:flex-row lg: lg:mt-6">
            <div className="flex flex-col lg:w-[45rem] p-7 gap-[4rem]">
              <h1
                className="font-semibold  text-center lg:text-4xl text-3xl lg:mt-10"
                id="course_heading"
              >
                {course.name}
              </h1>
              <p
                className="font-normal text-md lg:text-2xl p-5 leading-8 "
                id="course_dis"
              >
                {course.dis}
              </p>
              <div className="flex flex-col lg:flex-row gap-[2rem] ml-8 lg:ml-4">
                {/* <div className="flex items-center cursor-pointer justify-center h-[3.5rem] w-[90%] lg:w-[12rem] border-solid rounded-full border-2 border-black">
                  Download Syllubus
                </div> */}
                <div onClick={()=>enroller()} className="flex items-center cursor-pointer justify-center h-[3.5rem] w-[90%] lg:w-[8rem] font-bold rounded-full text-white bg-violet-900">
                  Enroll Now
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center h-full w-full  lg:px-10 lg:w-[35rem] lg:h-[45rem]">
              <img
                className="lg:h-[25rem]  h-[90%] w-[90%] object-fit rounded-lg"
                src={require("../assets/"+course.img)}
                alt={course.name}

              />
            </div>
          </div>
          <div className="flex flex-col lg:justify-center lg:flex-row  bg-white h-auto lg:h-[15rem] lg:w-[81.5rem] w-[100vw] border-2 border-violet-200">
            <div className="flex flex-col gap-5 lg:h-[0rem] w-1/2 p-10">
              <h1 className="font-bold text-2xl w-[15rem] ">
                Available Batches
              </h1>
              <div className="flex flex-col p-0 lg:flex-row gap-10">
                <div className="flex items-center font-bold justify-center h-[3.5rem] w-[10rem] text-normal border-2 border-violet-900 rounded-full text-violet-900 hover:shadow-xl">
                  June 5,2023
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-wrap h-full lg:h-[6rem] lg:w-[38rem] mt-0 lg:mt-10 border-l-2 pl-3 py-5 border-gray-300">
              <div className="flex h-[3rem]  w-full lg:w-[12rem] flex gap-2 items-center font-light">
                <img src={Book_duotone} alt="" className="h-5 w-5" />
                <p className="text-violet-900">No Prerequisites</p>
              </div>
              <div className="flex gap-4 h-[3rem] w-full lg:w-[12rem] flex gap-2 items-center font-light">
                <img src={Time_duotone} alt="" className="h-5 w-5" />
                <p className="text-vioet-900" id="duration">
                  {course.duration}
                </p>
              </div>
              {/* <div className="flex gap-4 h-[3rem] w-full lg:w-[12rem] flex gap-2 items-center font-light">
                <img
                  src="Video_file_duotone.svg"
                  alt=""
                  className="h-5 w-5"
                />
                <p className="text-violet-900">250 videos</p>
              </div> */}
              <div className="flex gap-4 h-[3rem] w-full lg:w-[12rem] flex gap-2 items-center font-light">
                <img src={Lamp_duotone_line} alt="" className="h-5 w-5" />
                <p className="text-violet-900" id="projects">
                  {course.projects.length + 1} projects
                </p>
              </div>
              <div className="flex gap-4 h-[3rem] w-full lg:w-[12rem] w-full flex gap-2 items-center font-light">
                <img src={Book_duotone} alt="" className="h-5 w-5" />
                <p className="text-violet-900 w-full">
                  Certificate of Completion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-20 lg:mx-32 my-20  rounded-lg lg:p-10 w-[90vw] bg-violet-100  p-2">
        <h1 className="font-bold lg:text-4xl lg:text-left text-violet-900 text-center text-2xl mt-10 lg:mt-0">
          About the Course
        </h1>
        <div className=" ">
          <p
            className="lg:text-left font-normal text-gray-600 text-md leading-8 lg:leading-10 pt-5 px-2 text-justify text-center"
            id="abtcourse"
          >
            {course.atc}
          </p>
          <br />
          <p className="text-center lg:text-left">
            There are <strong>No Prerequisites </strong>for the entire program
            we will teach everything from scratch to the advanced level.
          </p>
        </div>
        <div className="flex flex-col gap-10 text-gray-600">
          <h2 className="mt-10 text-2xl font-semibold">What you will Learn</h2>
          <div
            className="flex flex-wrap  h-auto w-[100%] lg:w-[50rem] "
            id="learnsec"
          >
            {course.learn.map((i) => {
              return <div className="flex mx-4 gap-5 h-[5.8rem] w-[23rem] ">
              <img src={Tick} className="h-6 w-6" alt="" />
              <p className="font-light text-md leading-6 ">
                {i}
              </p>
            </div>;
            })}
          </div>
        </div>
      </section>
      <section className=" lg:mx-32 flex flex-col  lg:justify-none w-[100vw] lg:w-[75rem] ">
        <div className=" flex items-center lg:items-baseline lg:justify-between w-full lg:w-[48rem]">
          <h1 className="font-bold text-4xl   px-9 text-violet-900">
            Course Syllubus
          </h1>
        </div>
        <div className="my-12 flex w flex-col gap-10 lg:flex-row justify-between ">
          <div
            className="flex flex-col gap-4 min-h-[42rem] lg:w-[50vw] "
            id="coursecontainer"
          >
            <Syllabus data={course.syllabus}/>
          </div>
          <div className="flex flex-col items-center mx-7 p-6 gap-4 lg:h-[45rem] border-2 border-gray-200 rounded-lg w-[85vw] lg:w-[26rem]">
            <div className="price">
              <div className="flex gap-4 mt-2 items-baseline">
                <h1
                  className="font-bold lg:text-3xl text-2xl text-violet-700"
                  id="cost"
                >
                  ₹ {course.cost}
                </h1>
                <h2 className="lg:text-xl text-lg text-violet-700">
                  <s>₹ 8,000</s>
                </h2>
              </div>
              <p className="flex justify-center text-gray-700">with gst</p>
            </div>
            <hr className="w-72 border-2 border-gray-100" />
            <div className="flex gap-4 mt-7">
              <img src="Tick.svg" alt="" />
              <p className="">
                Get taught by industry experts having years of experience in
                their respective fields.
              </p>
            </div>
            <div className="flex gap-4 mt-7">
              <img src="Tick.svg" alt="" />
              <p className="">
                Real world industry level projects and reviews.
              </p>
            </div>
            <div className="flex gap-4 mt-7">
              <img src="Tick.svg" alt="" />
              <p className="">Mentor support and doubt clearing sessions.</p>
            </div>
            <div className="flex gap-4 my-7">
              <img src="Tick.svg" alt="" />
              <p>Resume building and more career support.</p>
            </div>
            <div className="flex items-center justify-center h-[3.5rem]  w-[95%] lg:w-[24rem] rounded-full bg-violet-700 font-bold cursor-pointer text-white">
              Enroll Now
            </div>
          </div>
        </div>
      </section>
      <section className=" lg:mx-32 p-5  lg:p-10  rounded-xl mb-20  flex flex-col gap-4 w-[90vw] bg-violet-100">
        <h1 className="font-semibold lg:text-4xl text-violet-900 lg:text-left lg:pb-10 text-center text-2xl">
          Industrial Projects
        </h1>
        <p className="font-normal lg:font-light text-gray-600 lg:text-lg text-sm">
          Existing ways of learning through video-based courses and expensive
          boot camps aren't as effective when it comes to solving real-world
          tech problems.
        </p>
        <br />
        <p className="lg:font-light font-normal text-gray-600 lg:text-lg lg:mb-8 text-sm">
          Recruiters too, look for real-project experience when hiring
          developers and here at DevTown, we strive to provide just that. We
          empower developers with high quality applied learning opportunities
          and build skills that translate into career growth and success.
        </p>
        <div className="container_project flex flex-wrap gap-5 ">
        {course.projects.map((i) => {
            return (<Projects project={i}/>);
          })}
        </div>
      </section>
      <section className=" lg:p-[4rem] p-3 lg:mt-15 lg:mx-32 w-[90vw] ">
        <h1 className="font-bold lg:text-5xl text-2xl text-center w-auto text-violet-900">
          Frequently Asked Questions
        </h1>
        <div>
          <Content />
        </div>
      </section>
    </div>
  );
}
export default Coursepage;
