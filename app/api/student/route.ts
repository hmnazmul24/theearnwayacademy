import jwt from "jsonwebtoken";
import connect_db from "@/lib/database/db";
import Student from "@/lib/database/modals/student.modal";
import { NextResponse } from "next/server";
import { authenticate } from "@/lib/middlewares/auth";
import { uploadImg } from "@/lib/middlewares/uploadImg";
import { payment } from "@/lib/middlewares/Payment";

export const POST = async (request: Request) => {
  try {
    let {
      firstName,
      lastName,
      country,
      state,
      city,
      mobile,
      email,
      gender,
      password,
      profileImg,
      documentImg,
    } = await request.json();

    // Validation
    if (
      !firstName ||
      !lastName ||
      !country ||
      !state ||
      !city ||
      !mobile ||
      !email ||
      !gender ||
      !password ||
      !profileImg ||
      !documentImg
    ) {
      return new NextResponse(
        JSON.stringify({ message: "All fields are required" }),
        {
          status: 400,
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid email address" }),
        {
          status: 400,
        }
      );
    }

    // Mobile number validation
    if (mobile.length !== 11) {
      return new NextResponse(
        JSON.stringify({ message: "Mobile number must be 11 characters" }),
        {
          status: 400,
        }
      );
    }

    await connect_db();

    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return new NextResponse(
        JSON.stringify({ message: "Email already exists" }),
        {
          status: 400,
        }
      );
    }

    // after success
    profileImg = (await uploadImg(profileImg)).secure_url;
    documentImg = (await uploadImg(documentImg)).secure_url;
    const newStudent = await Student.create({
      firstName,
      lastName,
      country,
      state,
      city,
      mobile,
      email,
      gender,
      password,
      profileImg,
      documentImg,
    });

    // Generate JWT token
    const token = jwt.sign(
      { email: newStudent.email },
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
      JSON.stringify({ message: "Student is created", student: newStudent }),
      {
        status: 201,
      }
    );

    // Add cookie to response headers
    response.headers.append("Set-Cookie", cookie);

    return response;
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error in creating user",
        error: error,
      }),
      {
        status: 500,
      }
    );
  }
};

// ...........................................................get auth user .......................
export const GET = async (request: Request) => {
  try {
    const student = await authenticate(request);
    if (student) {
      // Student is authenticated
      return new NextResponse(
        JSON.stringify({ message: "authenticated", student: student }),
        {
          status: 200,
        }
      );
    } else {
      // User is not authenticated, serve registration page
      // You can render your registration page here or redirect to it
      return new NextResponse(JSON.stringify({ message: "Please register" }), {
        status: 200,
      });
    }
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
