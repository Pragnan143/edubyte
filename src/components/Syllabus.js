import { useState } from "react";
import Tick from "../assets/Tick.svg"


const Syllabus = (props) => {
  const FaqData = [
    {
      question: "Who Should Do this Industrial Training Program?",
      answer:
        "Everyone who wants to start and excel their Full Stack Developer or Data Analyst career, by learning all the necessary skills with work experience of building real applications in a production development environment should enroll in this program. If you want to learn all the skills by working on internship-grade projects, this program is the right fit for you. It doesn't matter if you are in your first year of college or looking for a career change.We have students from all fields from Btech CSE to BCom and even from Biotech ",
    },
    {
      question: "What jobs will this program prepare me for?",
      answer:
        "This program will prepare you to ace interviews for Full Stack Developer / Data Analyst roles as well as Software Engineer in exciting tech startups, product-based companies, and tech multi-nationals. Our in-built career assistance will help you to crack interviews with resume review sessions, mock interview sessions, curated concept-wise DS/Algo problems, Github and LinkedIn optimisation, as well as resume building and more .",
    },
    {
      question:
        "How will my doubts be solved during the program? Do I get mentored?",
      answer:
        "Learning with SKILL4U is similar to learning on-the-job as this is a proper internship. Our Expert mentors will guide you when you are stuck or have questions while working on our internship-grade projects. You can raise your questions on our Forum or Slack workspace to get help from our mentors. Every day you will have 2 hrs of LIVE doubt sessions as well where you can ask your doubts along with interactive sessions with your advisors from various companies to help you better understand how to crack them.",
    },
    {
      question: "What are the certification granted at the end?",
      answer:
        " Before the start of the program you'll get an enrolment confirmation letter from us. At the end of the training, you'll get training completion certificate, and top students from each batch will get letter of recommendation from us.",
    },
  ];

  const [active, setActive] = useState(null);
  const handleToggle = (index) => {
    active === index ? setActive(null) : setActive(index);
  };
  return (
    <div className="mt-10 flex flex-col gap-5 w-full">
      {props.data.map((item, index) => {
        return (
          <div className="cursor-pointer  transistion  duration-1000  flex flex-col gap-2.5 p-5 border-gray-200 border rounded-lg  max-h-auto bg-violet-100 w-[60vw]">
            <button
              className={
                active === index
                  ? "flex items-center font-semibold text-md w-full lg:font-bold lg:text-xl cursor-pointer"
                  : "flex items-center font-semibold text-md w-full lg:font-bold lg:text-xl font-bold "
              }
              onClick={() => handleToggle(index)}
            >
              {item.heading}
            </button>

            <p
              onClick={() => handleToggle(index)}
              className={
                active !== index
                  ? "invisible max-h-0  "
                  : "py-5 text-gray-600 flex flex-col   transistion  duration-100   leading-10  font-normal text-sm lg:text-md  overflow-hidden "
              }
            >
              {item.dis}
            </p>
            {item.concepts ? (
              <div
                onClick={() => handleToggle(index)}
                className={
                  active !== index
                    ? "invisible max-h-0"
                    : "py-1 text-gray-600 flex flex-col  gap-5 transistion  duration-100 leading-10  font-normal text-sm lg:text-md  overflow-hidden "
                }
              >
                {item.concepts.map((j) => {
                  return (
                    <div class="flex gap-4 ">
                      <img src={Tick} alt="" />
                      <p class="">{j}</p>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Syllabus;
