import Student from "@/lib/database/modals/student.modal";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  let student = await Student.findByIdAndUpdate(id, { status: "paid" });

  if (!student) {
    return new NextResponse(JSON.stringify({ message: "Student not found" }), {
      status: 201,
    });
  }
  // Generate JWT token
  const token = jwt.sign(
    { email: student.email },
    process.env.SECRET_KEY as string,
    { expiresIn: "7d" }
  );

  // Set cookie with JWT token
  const cookieOptions = {
    httpOnly: true, // Prevent client-side JavaScript access to the cookie
    sameSite: "strict", // Restrict cookie to same site requests
    maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time in milliseconds (e.g., 7 days)
    path: "/", // Restrict cookie to the root path
  };

  const cookie = `student_token=${token}; ${Object.entries(cookieOptions)
    .map(([key, value]) => `${key}=${value}`)
    .join("; ")}`;

  const response = new NextResponse(
    JSON.stringify({
      message: "Student is paid successfully",
      student: student,
      success: true,
    }),
    {
      status: 201,
    }
  );

  console.log(response);

  // Add cookie to response headers
  response.headers.append("Set-Cookie", cookie);

  return response;
}
