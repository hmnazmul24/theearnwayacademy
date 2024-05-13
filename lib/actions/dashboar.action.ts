"use server";

import { SuccessApplicantInfoType } from "@/types/interface";
import connect_db from "../database/db";
import Branch from "../database/modals/branch.model";

export const AllBranchApplicant = async () => {
  try {
    await connect_db();
    const data = await Branch.find();

    return data;
  } catch (error) {
    console.log("server error =>", error);

    return { message: "error" };
  }
};
