"use client";

import BranchInfo from "@/components/branch-apply/BranchInfo";
import BranchLoading from "@/components/branch-apply/BranchLoading";
import Document from "@/components/branch-apply/Document";
import MoreInfo from "@/components/branch-apply/MoreInfo";
import PendingPage from "@/components/branch-apply/Pending";
import PersonalInfo from "@/components/branch-apply/PersonalInfo";
import { Button } from "@/components/ui/button";
import { useThemeContext } from "@/context/theme";
import { CreateBranch } from "@/lib/actions/branch.action";
import { ApplicantInfo } from "@/types/interface";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";

const BranchApply = () => {
  const router = useRouter();
  const [applied, setApplied] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const { personal, branch, moreBranchInfo, branchDocument } =
    useThemeContext();
  const handleSubmit = async () => {
    try {
      let ApplicantInfo: ApplicantInfo = {
        branchPersonInfo: personal,
        branchInfo: branch,
        moreBranchInfo,
        branchDocument,
      };
      setLoading(true);
      const data = await CreateBranch(ApplicantInfo);
      setLoading(false);
      console.log(data);

      if (data?.error) {
        return toast.error(data.error);
      }
      localStorage.setItem("branch_applicant", "applicant");
      router.push("/branch-apply/pending");
    } catch (error) {
      console.log("error -->", error);
    }
  };

  useEffect(() => {
    let info = localStorage.getItem("branch_applicant");
    if (info) {
      setApplied(true);
    } else {
      setApplied(false);
    }
  }, []);

  return (
    <Fragment>
      {applied ? (
        <PendingPage />
      ) : (
        <div className="min-h-screen md:rounded-md w-full my-2 m-auto bg-white md:w-[90%]">
          {loading && <BranchLoading />}
          <h1 className="text-center p-4 md:my-3 text-[1.2rem] font-bold text-[#29809d]">
            Branch Apply
          </h1>
          <div className="w-full pb-11">
            <div className="flex items-center flex-col md:flex-row justify-center">
              <div className="w-full md:w-1/2 p-3 m-2 branchInfoGredientBg min-h-[200px] rounded-md">
                <PersonalInfo />
              </div>
              <div className="w-full md:w-1/2 p-3 m-2 branchInfoGredientBg min-h-[200px] rounded-md">
                <BranchInfo />
              </div>
            </div>
            <div className="flex items-start flex-col md:flex-row justify-start">
              <div className="w-full md:w-1/2 p-3 m-2 branchInfoGredientBg min-h-[200px] rounded-md">
                <MoreInfo />
              </div>
              <div className="w-full md:w-1/2 p-3 m-2 branchInfoGredientBg min-h-[200px] rounded-md">
                <Document />
              </div>
            </div>
            <div className="flex justify-end p-5">
              <Button
                className="p-3 bg-[#1a7183] text-white"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default BranchApply;
