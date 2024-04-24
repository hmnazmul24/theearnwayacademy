"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React from "react";

const testPayment = () => {
  const handlePayment = async () => {
    try {
      let response = await axios.get("/api/payment/test");
      // window.open(response.data.url, "_blank");
      console.log("first response", response);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const handlePayment2 = async () => {
    try {
      let response = await axios.get("/api/payment/test");
      // window.open(response.data.url, "_blank");
      console.log("second response", response);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="min-h-screen w-full flex_center">
      <Button variant={"destructive"} onClick={handlePayment}>
        payment
      </Button>
      <Button variant={"destructive"} onClick={handlePayment2}>
        payment2
      </Button>
    </div>
  );
};

export default testPayment;
