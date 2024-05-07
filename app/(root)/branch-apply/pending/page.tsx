"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PendingPage = () => {
  const router = useRouter();
  useEffect(() => {
    let data = localStorage.getItem("branch_applicant");
    if (!data) {
      router.push("/");
    }
  }, []);
  return (
    <div className="min-h-[60vh] flex_center ">
      <div className="text-center w-[90%] m-auto bg-white rounded-md py-7 px-3 md:w-[50%]">
        Your Application is pending. After reviewed your given information we
        will send you
        <span className="text-[green] font-bold">
          Branch UserName, Branch Password
        </span>
        . Reviewing your info takes 7 day to 1 months. after that you will be
        able to access your branch{" "}
        <span className="text-red-500 font-bold ">Dashboard</span>
      </div>
    </div>
  );
};

export default PendingPage;
