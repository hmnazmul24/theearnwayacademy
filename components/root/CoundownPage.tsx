import Countdown from "./Coundown";
import { TbFileCertificate } from "react-icons/tb";
import { RiLiveLine } from "react-icons/ri";
import { BsFiletypePdf } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";

const Coundownpage: React.FC = () => {
  const targetDate = new Date("2024-04-30T00:00:00");

  let achieve = [
    {
      icon: <TbFileCertificate />,
      title: "Government Certificate",
      color: "red",
    },
    {
      icon: <RiLiveLine />,
      title: "Interactive Live class",
      color: "purple",
    },
    {
      icon: <BsFiletypePdf />,
      title: "PDF notes of Each Class",
      color: "aqua",
    },
  ];
  let details = [
    {
      icon: <FaCircleCheck />,
      title: "60 live class via Zoom",
    },
    {
      icon: <FaCircleCheck />,
      title: "Each class will be 1.30 hours",
    },
    {
      icon: <FaCircleCheck />,
      title: "7pm to 8.30pm each day",
    },
    {
      icon: <FaCircleCheck />,
      title: "5 class in a week ",
    },
    {
      icon: <FaCircleCheck />,
      title: "Ask question during live",
    },
  ];

  return (
    <div className="flex  items-center  flex-col md:flex-row justify-center md:py-[50px]">
      <div className="md:w-1/2 md:min-h-[80vh] py-10 md:p-0 md:rounded-md  w-full bg-[#dc8d26a5] flex items-center justify-center flex-col">
        {/* <img
          src="/register-now.png"
          className="w-[80%] md:w-[50%]"
          alt="register-now"
        /> */}
        <h1 className="border-b-[1px] border-b-[white] w-[250px] md:w-[280px] mb-3 text-white text-[1.4rem] font-bold md:text-[2rem]">
          Course Details
        </h1>
        <ul className="flex items-start md:translate-x-[-20px] flex-col gap-1">
          {details.map((item) => (
            <li className="flex gap-3 items-center justify-center rounded-[50px] shadow-[#070707] shadow-sm bg-[#ffffffb8] md:p- p-2 px-4">
              <span style={{ color: "green" }}>{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className=" w-full md:w-1/2 md:p-4 flex items-center md:items-start  justify-center flex-col gap-3">
        <div className="bg-[#24a2c8] w-full p-5 md:rounded-md md:px-10 md:translate-x-[-130px]">
          <h1 className=" text-[1.5rem] md:text-[2rem] my-4">
            You will be provided
          </h1>
          <ul>
            {achieve.map((item) => (
              <li className="my-1 flex items-center justify-start gap-3 text-[1.2rem] md:text-[1.5rem]">
                <span style={{ color: item.color }}>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="mb-2 text-[1.3rem]">Last Date : 30 april</h1>
        <p className="px-4 text-[0.8rem]">
          NOTE: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          maxime illum magni minima laborum ipsum voluptate rerum velit delectus
          corrupti quam odit magnam officia facere commodi fugiat, nesciunt,
          amet autem.
        </p>
        <Countdown targetDate={targetDate} />
      </div>
    </div>
  );
};

export default Coundownpage;
