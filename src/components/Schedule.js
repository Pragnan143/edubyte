import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import LogOutIcon from "@mui/icons-material/Logout";
import data from "./data";
const CourseSchudule = () => {
  return (
    <div className=" fixed top-0 left-0  text-sm  flex flex-col text-black items-center pt-12 sm:disabled h-screen w-full  lg:w-[16rem] bg-sky-600">
      <p className="text-lg font-bold">Course Syllabus</p>
      <Accordion className="flex items-center flex-col text-white  justify-start pt-5 gap-5 px-1 cursor-pointer w-[16rem]">
        {data.map((data, index) => (
          <AccordionItem key={index}>
            {({ open }) => (
              <>
                <AccordionHeader className="border-b-2 w-full p-5 border-gray-400">
                  <h3
                    className={`font-semibold ${
                      open ? "accordion-active" : ""
                    }`}
                  >
                    {data.week}
                  </h3>
                </AccordionHeader>
                <AccordionBody>
                  <div className="flex items-center flex-col font-normal text-sm w-[95vw] lg:w-[16rem]">
                    {data.days.map((item, index) => (
                      <AccordionItem key={index}>
                        <AccordionHeader className="p-2 w-[95vw] lg:w-[16rem] hover:bg-sky-700">
                          <h3 className={`accordion-title`}>{item.day}</h3>
                        </AccordionHeader>
                        <AccordionBody>
                          <div className="accordion-body text-center p-2 w-[95vw]  lg:w-[16rem] bg-gray-200 text-black ">
                            {item.concept}
                          </div>
                        </AccordionBody>
                      </AccordionItem>
                    ))}
                  </div>
                </AccordionBody>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex items-center justify-start gap-14 pl-10 fixed bottom-0 text-xl text-red-500 font-extrabold lg:hidden w-full bg-white h-20 cursor-pointer ">
        <div className=" bg-red-500 h-12 w-12 rounded-full flex  text-white items-center justify-center">
          <LogOutIcon />
        </div>
        Logout
      </div>
    </div>
  );
};
export default CourseSchudule;
