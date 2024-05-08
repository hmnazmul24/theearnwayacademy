"use client";

import {
  BranchDocumentInfo,
  BranchInfoType,
  BranchPersonInfoType,
  MoreBranchInfoType,
  StudentInfoType,
} from "@/types";
import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextType {
  message: string;
  setMessage: (t: string) => void;
  student: StudentInfoType;
  setStudent: (s: StudentInfoType) => void;
  branch: BranchInfoType;
  ChangeBranchInfo: (a: string, a2: string) => void;
  personal: BranchPersonInfoType;
  ChangePersonalBranchInfo: (a: string, a2: string) => void;
  moreBranchInfo: MoreBranchInfoType;
  ChangeMoreBranchInfo: (a: string, a2: string) => void;
  branchDocument: BranchDocumentInfo;
  ChangeBranchDocument: (a: string, a2: string) => void;
}

const Context = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string>("");
  const [student, setStudent] = useState<StudentInfoType>({
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    city: "",
    mobile: "",
    email: "",
    gender: "",
    password: "",
    profileImg: "",
    documentImg: "",
  });
  // branch info
  const [branch, setBranch] = useState<BranchInfoType>({
    name: "",
    phone: "",
    email: "",
    computer: "",
  });
  const ChangeBranchInfo = (value: string, name: string) => {
    setBranch((pre) => ({ ...pre, [name]: value }));
  };

  // branch personal info
  const [personal, setPersonal] = useState<BranchPersonInfoType>({
    name: "",
    father: "",
    mother: "",
    gender: "",
  });
  const ChangePersonalBranchInfo = (value: string, name: string) => {
    setPersonal((pre) => ({ ...pre, [name]: value }));
  };
  // more contact info
  const [moreBranchInfo, setMoreBranchInfo] = useState<MoreBranchInfoType>({
    address: "",
    district: "",
    divition: "",
    mobile: "",
    name: "",
    postcode: "",
    upozila: "",
  });
  const ChangeMoreBranchInfo = (value: string, name: string) => {
    setMoreBranchInfo((pre) => ({ ...pre, [name]: value }));
  };
  // document contact info
  const [branchDocument, setBranchDocument] = useState<BranchDocumentInfo>({
    id_card_img: "",
    personal_img: "",
    trade_licence_img: "",
    bank_statement_img: "",
  });
  const ChangeBranchDocument = (value: string, name: string) => {
    setBranchDocument((pre) => ({ ...pre, [name]: value }));
  };

  const value: ThemeContextType = {
    message,
    setMessage,
    student,
    setStudent,
    branch,
    ChangeBranchInfo,
    personal,
    ChangePersonalBranchInfo,
    moreBranchInfo,
    ChangeMoreBranchInfo,
    branchDocument,
    ChangeBranchDocument,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useThemeContext(): ThemeContextType {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}
