import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import CourseCard from "./CourseCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Dashbord = () => {
  // const [courses,setCourses]=useState([]);
  const [ecourses, setEcourses] = useState([]);
  const [mode, setMode] = useState("enrolled");
  const navigate = useNavigate();
  var courses = [
    {
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
    },
    {
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
    },
  ];
  useEffect(() => {
    //   axios.get("https://edubite-course-backend.vercel.app/courses/all_courses")
    //     .then((r)=>setCourses(r.data))
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth");
    } else {
      axios
        .get("https://edubite-course-backend.vercel.app/user/course/enrolled", {
          headers: { "x-access-token": token },
        })
        .then((r) => setEcourses(r.data))
        .catch((e) => console.log(e));
    }
  }, []);
  return (
    <div>
      <Sidebar />
      <div className="bg-color4 flex flex-col ml-[16rem] min-h-[100vh]">
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
              {mode !== "enrolled" ? courses.map((i) => {
                  return <CourseCard props={i} c="normal" />;
                }):
                ecourses.map((i) => {
                  return (i ? <CourseCard props={i} c="enrolled" />:null)
                })
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
