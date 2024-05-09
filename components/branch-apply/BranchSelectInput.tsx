import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useThemeContext } from "@/context/theme";
import {
  BDDistric,
  BDDivition,
  BDUpozila,
} from "@/lib/arrayInfo/bd_state_info";

type UpozilaType = {
  id: string;
  district_id: string;
  name: string;
  bn_name: string;
  url: string;
};
type DistrictType = {
  id: string;
  division_id: string;
  name: string;
  bn_name: string;
  url: string;
};

const BranchSelectInput = ({ name }: { name: string }) => {
  const { ChangeMoreBranchInfo, moreBranchInfo } = useThemeContext();
  const [district, setDistrict] = useState<DistrictType[]>([]);
  const [upozila, setUpozila] = useState<UpozilaType[]>([]);

  useEffect(() => {
    if (moreBranchInfo.division) {
      let sdivition = BDDivition.filter(
        (item) => item.name === moreBranchInfo.division
      );
      let ds = BDDistric.filter(
        (item) => item.division_id === sdivition![0].id
      );
      setDistrict(ds);
    }
    if (moreBranchInfo.district) {
      let sdistric = BDDistric.filter(
        (item) => item.name === moreBranchInfo.district
      );
      let up = BDUpozila.filter((item) => item.district_id === sdistric![0].id);
      setUpozila(up);
    }
  }, [moreBranchInfo.division, moreBranchInfo.district]);

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
            {moreBranchInfo.division &&
              district.map((item) => (
                <SelectItem key={item.id} value={item.name}>
                  {item.name}-{" "}
                  <span className="bangla_font">{item.bn_name}</span>
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
            {moreBranchInfo.district &&
              upozila?.map((item) => (
                <SelectItem key={item.id} value={item.name}>
                  {item.name}-{" "}
                  <span className="bangla_font">{item.bn_name}</span>
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default BranchSelectInput;
