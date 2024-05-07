import React from "react";
import CourseCard from "../shared/CourseCard";
import { coursesInfo } from "@/lib/arrayInfo";

const Courses = () => {
  return (
    <div className=" py-5 md:pb-20 p-4 rounded-md bg-white">
      <h1 className="text-center my-3 text-[1.5rem] font-bold text-[#006680]">
        Valuable Courses
        <span className="text-[0.9rem] ml-2 text-[red]">
          See All <span className="ml-[2px]">({coursesInfo.length})</span>
        </span>
      </h1>
      <div className="flex items-start gap-5 flex-wrap justify-center  bg-white ">
        {coursesInfo.slice(0, 6).map((item) => (
          <CourseCard item={item} key={item.code} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
