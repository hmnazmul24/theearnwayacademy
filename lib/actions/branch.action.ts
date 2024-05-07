"use server";

import connect_db from "../database/db";
import { ApplicantInfo } from "@/types/interface";
import { validateBranchInput } from "../middlewares/validate-branch";
import { uploadImg } from "../middlewares/uploadImg";
import Branch from "../database/modals/branch.model";

export const CreateBranch = async (info: ApplicantInfo) => {
  await connect_db();
  try {
    let { error } = validateBranchInput(info);
    if (error?.details) {
      return { error: error.details[0].message };
    }
    console.log("before upload url", info);

    let personal_img = (await uploadImg(info.branchDocument.personal_img))
      .secure_url;
    let id_card_img = (await uploadImg(info.branchDocument.id_card_img))
      .secure_url;
    let trade_licence_img = (
      await uploadImg(info.branchDocument.trade_licence_img)
    ).secure_url;
    info.branchDocument.personal_img = personal_img;
    info.branchDocument.id_card_img = id_card_img;
    info.branchDocument.trade_licence_img = trade_licence_img;

    console.log("after upload url", info);

    await Branch.create(info);
    return { success: true };
  } catch (error) {
    console.log("server error =>", error);

    return { message: "error" };
  }
};
