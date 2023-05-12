import { useState } from "react";




const Content = () => {
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
      
          <div className='mt-10 flex flex-col gap-5'>
            {FaqData.map((item, index) => {
              return (
                <div className='cursor-pointer flex flex-col justify-center rounded-lg p-2  w-[85vw] bg-violet-100' >
                      <button
                        className={
                          active === index
                          ?"w-full lg:text-xl  flex items-center p-5 outline-none  text-violet-900 lg:h-[5rem] h-6 lg:font-bold text-sm font-bold cursor-pointer"
                          :"w-full lg:text-xl  flex items-center p-5 outline-none  text-violet-900 lg:h-[5rem] h-6 lg:font-bold text-sm font-bold "

                        }
                        onClick={() => handleToggle(index)}>
                        {item.question}
                      </button>
                    
                    <div  
                     onClick={() => handleToggle(index)}
                    className={
                      active != index
                        ? "invisible max-h-0" 
                        : " overflow-hidden "}
                        > 
                  <p className=" lg:p-6 lg:text-lg text-gray-600 text-sm leading-12">
                    {item.answer}
                  </p></div>
                </div>
              );
            })}
          </div>
    );
  };
  
  export default Content;