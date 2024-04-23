import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const PaginationPage = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      <Button variant={"outline"}>
        <MdKeyboardArrowLeft />
      </Button>
      <Button className="p-3" variant={"outline"}>
        1
      </Button>
      <Button className="p-3" variant={"outline"}>
        2
      </Button>
      <Button className="p-3" variant={"outline"}>
        ...
      </Button>
      <Button className="p-3" variant={"outline"}>
        10
      </Button>
      <Button variant={"outline"}>
        <MdKeyboardArrowRight />
      </Button>
    </div>
  );
};

export default PaginationPage;
