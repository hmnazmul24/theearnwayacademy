import { ApplicantInfo } from "@/types/interface";
import { Schema, model, models } from "mongoose";

interface ModifiedApplicantInfo extends ApplicantInfo {
  createdAt: Date;
  approved: boolean;
}

const BranchSchema = new Schema<ModifiedApplicantInfo>({
  branchInfo: {
    name: { type: String, required: [true, "Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      validate: {
        validator: (v: string) => /^\d{11}$/.test(v) && v.startsWith("01"),
        message:
          "Invalid phone number format, must be 11 digits and start with 01",
      },
    },
    computer: { type: String, required: [true, "Computer is required"] },
  },
  branchPersonInfo: {
    name: { type: String, required: [true, "Name is required"] },
    father: { type: String, required: [true, "Father name is required"] },
    mother: { type: String, required: [true, "Mother name is required"] },
    gender: { type: String, required: [true, "Gender is required"] },
  },
  moreBranchInfo: {
    name: { type: String, required: [true, "Name is required"] },
    mobile: { type: String, required: [true, "Mobile number is required"] },
    district: { type: String, required: [true, "District is required"] },
    upozila: { type: String, required: [true, "Upozila is required"] },
    address: { type: String, required: [true, "Address is required"] },
    postcode: { type: String, required: [true, "Postcode is required"] },
  },
  branchDocument: {
    personal_img: {
      type: String,
      required: [true, "Personal image is required"],
    },
    id_card_img: {
      type: String,
      required: [true, "ID card image is required"],
    },
    trade_licence_img: {
      type: String,
      required: [true, "Trade licence image is required"],
    },
    bank_statement_img: {
      type: String,
      required: [true, "Bank statement is required"],
    },
  },
  createdAt: { type: Date, default: Date.now() },
  approved: { type: Boolean, default: false },
});

const Branch = models.Branch || model("Branch", BranchSchema);

export default Branch;
