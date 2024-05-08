import Image from "next/image";
import React from "react";

const OwnderInfo = () => {
  return (
    <div
      className=" rounded-md py-14 pt-2 md:py-20 flex items-start flex-col lg:flex-row justify-start md:justify-center px-4"
      id="owner"
    >
      <div>
        <p className="md:hidden py-5 text-center  bangla_font">
          তথ্য ও প্রযুক্তির মাধ্যমে দক্ষ জনশক্তি তৈরি এবং আত্মকর্মসংস্থান সৃষ্টি
          ও বেকারত্ব দূর করাই আমাদের মূল লক্ষ্য
        </p>
      </div>
      <div className="flex_center w-full lg:w-[30%] md:justify-end relative ">
        <div>
          <div className="h-[240px] w-[300px] border-t-[5px] border-t-[#2792b5] rounded-2xl relative overflow-hidden shadow-[2px] ">
            <Image
              src={"/owner.png"}
              alt="owner"
              height={500}
              width={500}
              className="w-full bg-white "
            />
          </div>
          <div className="text-center md:text-start mb-6">
            <h1 className="font-bold my-2 text-[1.2rem]">Hm Nazmul</h1>
            <p className="text-[0.8rem] font-bold">
              <span className="text-[1.3rem]">Founder</span> and{" "}
              <span className="text-[1.3rem]">CEO</span>, The Earn Way Academy
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[50%]  md:px-8">
        <p className="hidden md:block py-5 text-start  bangla_font">
          তথ্য ও প্রযুক্তির মাধ্যমে দক্ষ জনশক্তি তৈরি এবং আত্মকর্মসংস্থান সৃষ্টি
          ও বেকারত্ব দূর করাই আমাদের মূল লক্ষ্য
        </p>

        <div>
          <p className=" text-[0.9rem] leading-5 md:leading-6 text-justify  bangla_font">
            <span className="hidden md:block bangla_font">
              ডিজিটাল যুব উন্নয়ন আই, টি নেটওয়ার্ক তথ্য ও প্রযুক্তি ভিত্তিক
              সেবামূলক একটি শিক্ষা প্রতিষ্ঠান। আমরা মানুষের পরিবর্তনের জন্য
              তৃণমুল পর্যায়ের তথ্য প্রযুক্তির উপর কাজ করে যাচ্ছি। তথ্য প্রযুক্তি
              গোটা পৃথিবীকে পরিবর্তন করে দিয়েছে যেমন- স্কুল, কলেজ, ব্যাংক, বীমা,
              ব্যবসা বাণিজ্য, ইন্ডাষ্ট্রি সহ তথ্য প্রযুক্তি দ্বারা পরিচালিত।
              আমরা ডিজিটাল বাংলাদেশ গড়ার লক্ষে বিশ্বের সাথে তাল মিলিয়ো তথ্য ও
              প্রযুক্তির উপরে আধুনিক প্রশিক্ষণের জন্য সার্বক্ষণিক কাজ করে
              যাচ্ছি। আমরা মানুষের কাছে নতুন কিছু পৌঁছে দিতে চাই।
            </span>{" "}
            <span className="text-[1.2rem] md:text-[0.9rem]">পৃথিবী</span> যখন
            প্রযুক্তির দিকে এগিয়ে যাচ্ছে সেখানে আমাদের সোনার বাংলা পিছিয়ে থাকার
            কোন সুযোগ নেই। উন্নত দেশগুলিতে মানুষ ঘরে বসেই অনলাইনে আউটসোসিং এর
            মাধ্যমে লক্ষ লক্ষ টাকা উপার্জন করে যাচ্ছে। কিন্তু আমাদের দেশে
            তৃর্ণমুল পর্যায়ে এখনও প্রত্যাশিতভাবে কম্পিউটার শিক্ষা চালু হয়নি।
            আমরা প্রতিটি জেলা ও থানা পর্যায়ে একটি করে আধুনিক কম্পিউার ট্রেনিং
            সেন্টার চালু করার উগ্যোগ গ্রহণ করেছি। দেশ থেকে বেকারত্ব দুর করা
            সকলের দায়িত্ব শুধু সরকারেরই নয়। আমরা কর্মসংস্থানের সুযোগ সৃষ্টির
            মাধ্যমে দেশের মানুষের পাশে থাকতে চাই।
            <br />
            <span className=" bangla_font">
              {" "}
              Digital Youth Development IT Network কোম্পানীর আইনের অনুকূলে (The
              Companies ACT XVIII OF 1994) অনুমোদিত একটি প্রতিষ্ঠান যাহার গভঃ
              রেজিঃ নম্বর C-135688/17
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OwnderInfo;
