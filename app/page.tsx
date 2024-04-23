"use client";

import Achievement from "@/components/root/Achievement";
import Coundownpage from "@/components/root/CoundownPage";
import Hero from "@/components/root/Hero";
import { useThemeContext } from "@/context/theme";
import { Fragment } from "react";

const Home = () => {
  const { message, student } = useThemeContext();
  console.log(student);

  return (
    <div className="md:w-[90%] m-auto w-full">
      <Hero />
      <Coundownpage />
    </div>
  );
};

export default Home;
