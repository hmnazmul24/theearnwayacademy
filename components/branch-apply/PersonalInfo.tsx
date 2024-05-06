"use client";

import React from "react";
import BranchInput from "./BranchInput";
import { useThemeContext } from "@/context/theme";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const PersonalInfo = () => {
  const { ChangePersonalBranchInfo, personal } = useThemeContext();

  return (
    <div className="w-full">
      {" "}
      <h1 className="branch_heading">Personal Information</h1>
      <div className="flex flex-col gap-1">
        <BranchInput
          ChangeInfo={ChangePersonalBranchInfo}
          name="name"
          placeholder="Full Name"
        />
        <BranchInput
          ChangeInfo={ChangePersonalBranchInfo}
          name="father"
          placeholder="Father's Number"
        />
        <BranchInput
          ChangeInfo={ChangePersonalBranchInfo}
          name="mother"
          placeholder="Mother's Name"
        />
        <Select onValueChange={(e) => ChangePersonalBranchInfo(e, "gender")}>
          <SelectTrigger className="bg-white py-6 px-4 border-[1px] border-[#00718023]">
            <SelectValue placeholder="Gender" className="placeholder:pl-2" />
          </SelectTrigger>
          <SelectContent className="bg-[white]">
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PersonalInfo;
