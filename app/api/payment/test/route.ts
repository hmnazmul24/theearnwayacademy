import { get_token } from "@/lib/middlewares/get_token";
import { makePayment } from "@/lib/middlewares/make_payment";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const token = await get_token();

    const url = await makePayment({
      name: "sladf",
      email: "email@gmail.com",
      address: "slad",
      given_token: token,
      phone: "sldfk",
      state: "sdlfk",
      student_id: "studentId",
    });
    return new NextResponse(
      JSON.stringify({ message: "Please register", url }),
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
