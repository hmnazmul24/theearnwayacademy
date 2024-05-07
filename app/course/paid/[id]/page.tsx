"use client";

import Loading from "@/components/Loading";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SuccessPayment = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  //   let data = false;

  // useEffect(() => {
  //   let savePaidInfo = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `/api/payment/success?id=${params.id}`
  //       );
  //       if (data.success) {
  //         await axios.get("/api/student");
  //         router.push("/course/paid");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   savePaidInfo();
  // }, []);
  return (
    <div>
      <Loading text={"Saving your info...."} />
    </div>
  );
};

export default SuccessPayment;
