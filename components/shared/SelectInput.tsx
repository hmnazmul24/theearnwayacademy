"use client";

import { City, State } from "country-state-city";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectInput = ({
  ChangeStudentInfo,
  selected,
}: {
  ChangeStudentInfo: (arg1: string, arg2: string) => void;
  selected: boolean;
}) => {
  const handleChange = (e: string) => {
    ChangeStudentInfo(e, "state");
  };
  return (
    <div className="w-full select_item ">
      <Select onValueChange={handleChange}>
        <SelectTrigger
          className={`w-full ${
            selected ? "main_border" : "border-[#e3e3e3] border-[1px]"
          }`}
        >
          <SelectValue placeholder="Your District" className="" />
        </SelectTrigger>
        <SelectContent className="bg-white ">
          {State.getStatesOfCountry("BD")?.map((city) => (
            <SelectItem
              key={city.name}
              className="outline-none"
              value={city.name}
            >
              {city.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectInput;
