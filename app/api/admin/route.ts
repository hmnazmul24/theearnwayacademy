"use server";
import connect_db from "@/lib/database/db";
import Student from "@/lib/database/modals/student.modal";
import { NextResponse } from "next/server";

// ...........................................................get auth user .......................
export const GET = async (request: Request) => {
  try {
    await connect_db();
    let students = await Student.find();

    return new NextResponse(
      JSON.stringify({
        message: "payment is successfull",
        students,
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
