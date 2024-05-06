import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useThemeContext } from "@/context/theme";
import { BDDistric, BDUpozila } from "@/lib/arrayInfo/bd_state_info";

type upozila = {
  id: string;
  district_id: string;
  name: string;
  bn_name: string;
  url: string;
};

const BranchSelectInput = ({ name }: { name: string }) => {
  const { ChangeMoreBranchInfo, moreBranchInfo } = useThemeContext();
  const [upozila, setUpozila] = useState<upozila[]>([]);

  useEffect(() => {
    if (moreBranchInfo.district) {
      let sdistric = BDDistric.filter(
        (item) => item.name === moreBranchInfo.district
      );
      let up = BDUpozila.filter((item) => item.district_id === sdistric![0].id);
      setUpozila(up);
    }
  }, [moreBranchInfo]);

  return (
    <div>
      {name === "district" ? (
        <Select
          onValueChange={(e) => {
            ChangeMoreBranchInfo(e, name);
          }}
        >
          <SelectTrigger className="bg-white py-6 px-4 border-[1px] border-[#00718023]">
            <SelectValue placeholder="District" className="placeholder:pl-2" />
          </SelectTrigger>
          <SelectContent className="bg-[white]">
            {BDDistric.map((item) => (
              <SelectItem key={item.id} value={item.name}>
                {item.name}- {item.bn_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Select onValueChange={(e) => ChangeMoreBranchInfo(e, name)}>
          <SelectTrigger className="bg-white py-6 px-4 border-[1px] border-[#00718023]">
            <SelectValue placeholder="Upozila" className="placeholder:pl-2" />
          </SelectTrigger>
          <SelectContent className="bg-[white]">
            {upozila?.map((item) => (
              <SelectItem key={item.id} value={item.name}>
                {item.name}- {item.bn_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default BranchSelectInput;
