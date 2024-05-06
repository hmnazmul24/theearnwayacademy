"use client";

import Approve from "@/components/home/Approve";
import Courses from "@/components/home/Courses";
import Hero from "@/components/home/Hero";
import OwnderInfo from "@/components/home/OwnderInfo";

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
