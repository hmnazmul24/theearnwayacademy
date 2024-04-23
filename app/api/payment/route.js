import { payment } from "@/lib/middlewares/Payment";
import { NextResponse } from "next/server";

// ...........................................................get auth user .......................
export const GET = async () => {
  try {
    await payment();
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
