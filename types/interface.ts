import {
  BranchDocumentInfo,
  BranchInfoType,
  BranchPersonInfoType,
  MoreBranchInfoType,
} from ".";

export interface ApplicantInfo {
  branchInfo: BranchInfoType;
  branchPersonInfo: BranchPersonInfoType;
  moreBranchInfo: MoreBranchInfoType;
  branchDocument: BranchDocumentInfo;
}
export interface SuccessApplicantInfoType {
  _id: string;
  branchInfo: BranchInfoType;
  branchPersonInfo: BranchPersonInfoType;
  moreBranchInfo: MoreBranchInfoType;
  branchDocument: BranchDocumentInfo;
  createdAt: Date;
  approved: boolean;
}
