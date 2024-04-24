import { StudentInfoType } from "@/types";
import { Schema, model, models } from "mongoose";

const StudentSchema = new Schema({
  firstName: { type: String, required: [true, "First name is required"] },
  lastName: { type: String, required: [true, "Last name is required"] },
  country: { type: String, required: [true, "Country is required"] },
  state: { type: String, required: [true, "State is required"] },
  city: { type: String, required: [true, "City is required"] },
  email: { type: String, required: [true, "Email is required"], unique: true },
  password: { type: String, required: [true, "Password is required"] },
  mobile: { type: String, required: [true, "Mobile is required"] },
  gender: { type: String, required: [true, "Gender is required"] },

  profileImg: { type: String, required: [true, "Profile image is required"] },
  documentImg: { type: String, required: [true, "Document image is required"] },
  status: { type: String, default: "unpaid" },
  createdAt: { type: Date, default: Date.now() },
});

const Student =
  models.Student || model<StudentInfoType>("Student", StudentSchema);

export default Student;
