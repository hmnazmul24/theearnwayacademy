import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Approve = () => {
  return (
    <div className="min-h-screen bg-white p-4 relative rounded-md flex_center">
      <div className="z-10">
        <h1 className="text-[#257d8d] text-[2rem] text-center bangla_font">
          উদ্যোক্তা হয়....
        </h1>
        <p className="text-center my-8 bangla_font">
          উদ্যোক্তা হয়ে কম্পিউটার প্রশিক্ষণ কেন্দ্র দ্বারা আত্মকর্মসংস্থান
          সৃষ্টি করুন বেকারত্বের অভিশাপ থেকে নিজেকে ও দেশকে মুক্ত রাখতে ভূমিকা
          রাখুন |
        </p>
        <div className="flex_center">
          <Link href={"/branch-apply"}>
            {" "}
            <Button className="bg-[#257d8d] rounded-[50px] text-white">
              Apply for Branch
            </Button>
          </Link>
        </div>
      </div>
      <div id="approve" className="w-full h-[40%] absolute bottom-0"></div>
    </div>
  );
};

export default Approve;
