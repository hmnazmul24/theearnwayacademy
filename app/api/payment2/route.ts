"use server";

import { payment } from "@/lib/middlewares/Payment";
import { surjopayPayment } from "@/lib/middlewares/payment2";
import { NextResponse } from "next/server";

// ...........................................................get auth user .......................
export const GET = async (request: Request) => {
  try {
    await surjopayPayment();
    return new NextResponse(
      JSON.stringify({
        message: "payment is successfull",
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error processing request",
        error: error,
      }),
      {
        status: 500,
      }
    );
  }
};
