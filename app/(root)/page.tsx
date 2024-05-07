"use client";

import Approve from "@/components/branch-home/Approve";
import Courses from "@/components/branch-home/Courses";
import Hero from "@/components/branch-home/Hero";
import OwnderInfo from "@/components/branch-home/OwnderInfo";

const Home = () => {
  return (
    <>
      <div className="md:w-[90%]  md:p-0 md:my-3 m-auto w-full">
        <Hero />
      </div>
      <div className="md:w-[90%]  md:p-0 md:my-3 m-auto w-full">
        <OwnderInfo />
      </div>
      <div className="md:w-[90%]  md:p-0 md:my-3 m-auto w-full">
        <Courses />
      </div>
      <div className="md:w-[90%]  md:p-0 md:my-3 m-auto w-full">
        <Approve />
      </div>
    </>
  );
};

export default Home;
