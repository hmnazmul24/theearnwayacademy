"use client";

import { ChangeEvent, useState } from "react";

interface EmailInputProps {
  placeholder: string;
  name: string;
  ChangeInfo: (arg: string, arg2: string) => void;
}

const BranchInput = ({ placeholder, name, ChangeInfo }: EmailInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    ChangeInfo(e.target.value, e.target.name);
  };
  return (
    <div className="relative w-full">
      <label
        className={`${
          isFocused ? "top-[0px] text-[0.6rem] " : "top-[13px]"
        } transition-all absolute left-2 rounded-md px-2 z-[1] bg-[transparent]`}
      >
        {placeholder}
      </label>
      <input
        className={` ${
          isFocused
            ? "border-[1px] border-[#2989927d]"
            : "border-[1px] border-[#e5e5e5]"
        }  bg-custom-color  leading-5 p-4 z-10  rounded-md outline-none w-full`}
        onFocus={() => setIsFocused(true)}
        onBlur={() =>
          inputValue === "" ? setIsFocused(false) : setIsFocused(true)
        }
        value={inputValue}
        onChange={handleChange}
        name={name}
        type="text"
      />
    </div>
  );
};

export default BranchInput;
