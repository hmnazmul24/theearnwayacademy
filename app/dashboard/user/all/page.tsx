"use client";
import { Button } from "@/components/ui/button";
import { AllBranchApplicant } from "@/lib/actions/dashboar.action";

import Branch from "@/lib/database/modals/branch.model";
import { SuccessApplicantInfoType } from "@/types/interface";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AllCandidates = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [candidates, setCandidates] = useState<SuccessApplicantInfoType[]>([]);

  const info = async () => {
    const data = await AllBranchApplicant();
    console.log(data);
  };
  useEffect(() => {
    info();
  }, []);

  console.log("candidates ->", candidates);

  return (
    <div className="page_box">
      <h1 className="d_heading">All Candidates</h1>
      <div className="flex items-center justify-between">
        <ul className="grid grid-cols-[0.5fr_0.8fr_0.5fr_0.5fr_0.3fr] w-[95%] p-2 pr-6">
          <li>Name</li>
          <li>Email</li>
          <li>Mobile</li>
          <li>Apply Date</li>
          <li>Image</li>
        </ul>
        <h1>Action</h1>
      </div>
      <div className="flex items-center justify-between">
        <ul className="grid grid-cols-[0.5fr_0.8fr_0.5fr_0.5fr_0.3fr]  w-[95%] p-2 pr-6">
          <li>shobuj Ahmed</li>
          <li>email@gmail.com</li>
          <li>01870425052</li>
          <li>15 may 2023</li>
          <li>
            {" "}
            <Image alt="/profile" src={"/user.png"} height={50} width={50} />
          </li>
        </ul>
        <Button className="bg-[blue] text-white rounded-sm">View</Button>
      </div>
      <div className="flex items-center justify-between">
        <ul className="grid grid-cols-[0.5fr_0.8fr_0.5fr_0.5fr_0.3fr]  w-[95%] p-2 pr-6">
          <li>shobuj Ahmed</li>
          <li>email@gmail.com</li>
          <li>01870425052</li>
          <li>15 may 2023</li>
          <li>
            {" "}
            <Image alt="/profile" src={"/user.png"} height={50} width={50} />
          </li>
        </ul>
        <Button className="bg-[blue] text-white rounded-sm">View</Button>
      </div>
    </div>
  );
};

export default AllCandidates;
