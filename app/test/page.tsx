"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import React from "react";

const TestPage = () => {
  const clickapihandler = async () => {
    try {
      const responst = await axios.get("/api/payment/test");

      window.open(responst.data.url, "_self");
      console.log(responst);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={clickapihandler}>click api</Button>
    </div>
  );
};

export default TestPage;
