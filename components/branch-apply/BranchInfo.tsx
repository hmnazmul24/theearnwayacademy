"use client";

import React, { useState } from "react";
import { useThemeContext } from "@/context/theme";
import BranchInput from "./BranchInput";

const BranchInfo = () => {
  const { ChangeBranchInfo, branch } = useThemeContext();

  return (
    <div>
      <h1 className="branch_heading">Branch Information</h1>
      <div className="flex flex-col gap-1">
        <BranchInput
          ChangeInfo={ChangeBranchInfo}
          name="name"
          placeholder="Branch Name"
        />
        <BranchInput
          ChangeInfo={ChangeBranchInfo}
          name="phone"
          placeholder="Phone Number"
        />
        <BranchInput
          ChangeInfo={ChangeBranchInfo}
          name="email"
          placeholder="Email Address"
        />
        <BranchInput
          ChangeInfo={ChangeBranchInfo}
          name="computer"
          placeholder="Number of Computer"
        />
      </div>
    </div>
  );
};

export default BranchInfo;
