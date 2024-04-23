"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React from "react";

const testPayment = () => {
  const handlePayment = async () => {
    try {
      let data = await axios.get("/api/payment");
      console.log(data, "data");
    } catch (error) {
      console.log("client error", error);
    }
  };
  return (
    <div className="min-h-screen w-full flex_center">
      <Button variant={"destructive"} onClick={handlePayment}>
        payment
      </Button>
    </div>
  );
};

export default testPayment;
