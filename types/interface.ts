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
