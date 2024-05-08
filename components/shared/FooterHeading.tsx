import React from "react";

const FooterHeading = ({ heading }: { heading: string }) => {
  return (
    <div className="relative translate-x-[5px]">
      <span className="absolute rounded-md -left-[1px] top-[10px]  h-[31px] border-[1px] border-[#286291] z-0 w-[80px]"></span>
      <h1 className="my-3 rounded-md relative p-2 z-20 font-bold  main_bg_color">
        {heading}
      </h1>
    </div>
  );
};

export default FooterHeading;
