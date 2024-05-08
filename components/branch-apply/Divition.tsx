import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { BDDivition } from "@/lib/arrayInfo/bd_state_info";

const Divition = () => {
  return (
    <Select>
      <SelectTrigger className="bg-white py-6 px-4 border-[1px] border-[#00718023]">
        <SelectValue placeholder="Divition" className="placeholder:pl-2" />
      </SelectTrigger>
      <SelectContent className="bg-[white]">
        {BDDivition.map((item) => (
          <SelectItem key={item.id} value={item.name}>
            {item.name}- <span className="bangla_font">{item.bn_name}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Divition;
