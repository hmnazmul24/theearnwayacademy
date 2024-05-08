import { coursesArrType } from "@/lib/arrayInfo";
import Image from "next/image";
import React from "react";

const CourseCard = ({ item }: { item: coursesArrType }) => {
  return (
    <div className="bg-red-200 relative overflow-hidden flex-none border w-[320px] h-[200px]">
      <Image
        src={item.image!}
        className=" rounded-sm w-full"
        alt="office "
        height={500}
        width={1000}
      />
      <div
        className="absolute bottom-0 w-full h-[80px] rounded-md "
        id="card_text_box"
      >
        <div className="text-[white] font-bold text-center translate-y-[50px]">
          {item.course}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
