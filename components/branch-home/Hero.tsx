import Image from "next/image";
import { Button } from "../ui/button";

import Link from "next/link";
import { BiLogInCircle } from "react-icons/bi";
import { FaAnglesDown } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="min-h-[68vh] md:min-h-[93vh] bg-white md:rounded-md  flex items-start justify-end md:justify-center relative overflow-hidden">
      <div
        className="z-20 text-center w-full pb-5 md:pb-11 md:py-11  "
        id="hero_box"
      >
        <div className=" lg:flex items-center justify-center gap-4 ">
          {/* <span>ডিজিটাল</span> */}
          <span className="text-[2.5rem] md:text-[3rem] text-[#a82e2e] font-bold bangla_font">
            যুব উন্নয়ন
          </span>{" "}
          <span className="text-[1.3rem] lg:text-[1.5rem]  bangla_font">
            আইটি নেটওয়ার্কের
          </span>
        </div>
        <div className="lg:flex items-center justify-center gap-4  bangla_font">
          আওতাধীন{" "}
          <span className="text-[1.3rem] font-bold text-[#121212] lg:text-[2.5rem]">
            The Earn Way Academy
          </span>
          <br className="lg:hidden  bangla_font" />
          {/* প্রদান করছে কম্পিউটার প্রশিক্ষণ কেন্দ্র খোলার অনুমতি */}
        </div>
        <div className="flex items-center flex-col justify-center">
          <Link href={"#footer"}>
            {" "}
            <Button
              variant={"outline"}
              className="bg-[black] mt-5 hover:bg-[#207485] text-[white] shadow-md transition-all"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute top-[400px] z-30 self-center mx-7 animate-bounce">
        <Link href={"#owner"} className="p-3">
          <FaAnglesDown />
        </Link>
      </div>
      <Image
        src={"/digital-youth.jpg"}
        height={1000}
        width={1000}
        alt="digital-youth"
        className="w-full  absolute  opacity-40 z-0 min-w-[1000px]"
      />
    </div>
  );
};

export default Hero;
