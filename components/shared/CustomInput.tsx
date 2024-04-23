"use client";

import { ChangeEvent, useState } from "react";

interface EmailInputProps {
  placeholder: string;
  name: string;
  type: "email" | "password" | "text" | "number";
  ChangeStudentInfo: (arg: string, arg2: string) => void;
}

const CustomInput = ({
  placeholder,
  name,
  type,
  ChangeStudentInfo,
}: EmailInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    ChangeStudentInfo(e.target.value, e.target.name);
  };
  return (
    <div className="relative w-full">
      <label
        onClick={() => setIsFocused(true)}
        className={`${
          isFocused ? "top-[-11px] text-[0.8rem] " : "top-2"
        } transition-all absolute left-2 rounded-md px-2 z-[1] bg-[white]`}
      >
        {placeholder}
      </label>
      <input
        className={` ${
          isFocused ? "main_border" : "border-[1px] border-[#e5e5e5]"
        }  bg-custom-color  leading-5 p-4 z-10  rounded-md outline-none w-full`}
        onFocus={() => setIsFocused(true)}
        onBlur={() =>
          inputValue === "" ? setIsFocused(false) : setIsFocused(true)
        }
        value={inputValue}
        onChange={handleChange}
        name={name}
        type={type}
      />
    </div>
  );
};

export default CustomInput;
