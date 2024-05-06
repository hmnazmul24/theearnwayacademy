import Image from "next/image";
import React from "react";

function RegistrationCard() {
  return (
    <div className="w-full overflow-x-auto ">
      <div
        id="downloadImg"
        className="flex justify-center pb-[31px] md:pb-[80px] md:py-[68px] w-[450px] md:w-[700px] items-center relative border-[2px] border-[#f0f0f0]"
      >
        <Image
          alt="border"
          height={1000}
          width={1000}
          src={"/border.png"}
          className="absolute z-10 top-0 left-0 w-full "
        />
        <Image
          alt="border"
          height={1000}
          width={1000}
          src={"/main_logo.png"}
          className="absolute z-[15]  top-[150px] md:top-[300px] opacity-10 left-0 w-full "
        />
        <Image
          alt="border"
          height={120}
          width={120}
          src={"/user.png"}
          className="absolute z-[15] top-[200px] w-[70px] md:w-[120px] md:top-[295px]  right-[50px] "
        />
        <div className="w-full px-[30px] md:px-[50px] z-20 rounded-lg  p-8">
          <div className="flex justify-between flex-col items-center md:mb-4">
            <Image
              alt="main_logo"
              height={150}
              width={150}
              className="w-[130px] md:w-[150px]"
              src={"/main_logo.png"}
            />
            <h1
              className=" text-xl
             md:text-2xl font-bold text-center "
            >
              Registration Card
            </h1>
            <div className=" text-gray-500 text-center text-[0.6rem]">
              Govt. Reg: C-135688/17 (Approved by Government of the People's
              Republic of Bangladesh)
            </div>
          </div>
          <div className="flex justify-between flex-col mb-1 items-center md:mb-4">
            <h2
              className="
             font-medium text-center text-[0.8rem] md:text-[1.7rem] flex-col flex"
            >
              Microsoft Office Coumplete Live Course
              <span className="md:text-[0.7rem] text-[0.5rem]">
                (National Skill Standard Basic)
              </span>
            </h2>
          </div>
          <hr className="md:mb-4" />
          <div className="mb-4 text-[0.5rem] md:text-[0.9rem]">
            <h3 className="text-base font-bold mb-1 md:mb-2 ">
              Student Information
            </h3>
            <div className="grid grid-cols-2 gap-1  md:gap-4">
              <div className=" text-[0.7rem] md:text-sm font-medium">
                Registration No:
              </div>
              <div>1451695053</div>
              <div className=" text-[0.7rem] md:text-sm font-medium">
                Name of Student:
              </div>
              <div>Md. Israfil Hossin</div>
              <div className=" text-[0.7rem] md:text-sm font-medium">
                Father's Name:
              </div>
              <div>Md. Nazrul Islam</div>
              <div className=" text-[0.7rem] md:text-sm font-medium">
                Mother's Name:
              </div>
              <div>Mst. Lipi Khatun</div>
              <div className=" text-[0.7rem] md:text-sm font-medium">Sex:</div>
              <div>Male</div>
              <div className=" text-[0.7rem] md:text-sm font-medium">
                Date of Birth:
              </div>
              <div>22/07/2004</div>
              <div className=" text-[0.7rem] md:text-sm font-medium">
                Institution Name And Code:
              </div>
              <div>Crown Computer(145)</div>

              <div className="text-sm font-medium">Admission Year:</div>
              <div>(2023)</div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-6 mt-8">
            <div className=" text-[0.6rem] md:text-sm font-medium border-t-2">
              Signature of the Student
            </div>
            <div className=" text-[0.6rem] md:text-sm font-medium border-t-2">
              Signature of the Head of the Institute
            </div>
          </div>
          <div className="text-sm font-medium ">
            <span className="text-red-500 text-[0.5rem] md:text-[0.9rem]">
              Directions:
            </span>
            <ul className="list-disc ml-4 pl-4 leading-3 text-[0.6rem]">
              <li>
                The examinee must show the Registration Card before attend the
                online exam.
              </li>
              <li>This Registration Card is valid for six months.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationCard;
