import { cookies } from "next/headers";
import connect_db from "../database/db";
import Student from "../database/modals/student.modal";
import jwt from "jsonwebtoken";

// Middleware to check authentication
export const authenticate = async (
  request: Request
): Promise<typeof Student | null> => {
  try {
    // console.log(request);
    let token = cookies().get("student_token")?.value;

    if (!token) {
      return null; // No token found
    }

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.SECRET_KEY as string) as {
      email: string;
    };

    // Check if the student exists in the database
    await connect_db();
    const student = await Student.findOne({ email: decoded.email });
    return student;
  } catch (error) {
    return null; // Invalid token or other errors
  }
};
