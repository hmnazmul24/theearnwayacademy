"use client";

import { StudentInfoType } from "@/types";
import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextType {
  message: string;
  setMessage: (t: string) => void;
  student: StudentInfoType;
  setStudent: (s: StudentInfoType) => void;
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

  const value: ThemeContextType = { message, setMessage, student, setStudent };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useThemeContext(): ThemeContextType {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}
