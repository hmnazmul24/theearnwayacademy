import { ApplicantInfo } from "@/types/interface";
import Joi, { ValidationResult } from "joi";

export const validateBranchInput = (data: ApplicantInfo): ValidationResult => {
  const schema = Joi.object({
    branchPersonInfo: Joi.object({
      name: Joi.string().required().messages({
        "any.required": "Name is required",
        "string.empty": "Name cannot be empty",
      }),
      father: Joi.string().required().messages({
        "any.required": "Father name is required",
        "string.empty": "Father name cannot be empty",
      }),
      mother: Joi.string().required().messages({
        "any.required": "Mother name is required",
        "string.empty": "Mother name cannot be empty",
      }),
      gender: Joi.string().required().messages({
        "any.required": "Gender is required",
        "string.empty": "Gender field cannot be empty",
      }),
    }),
    branchInfo: Joi.object({
      name: Joi.string().required().messages({
        "any.required": "Branch Name is required",
        "string.empty": "Branch Name cannot be empty",
      }),
      email: Joi.string().email().required().messages({
        "any.required": "Email is required",
        "string.email": "Invalid email format",
      }),
      phone: Joi.string()
        .pattern(/^01\d{9}$/)
        .required()
        .messages({
          "any.required": "Phone number is required",
          "string.pattern.base":
            "Phone number must start with 01 and be 11 digits long",
        }),
      computer: Joi.string().required().messages({
        "any.required": "Computer is required",
        "string.empty": "Computer field cannot be empty",
      }),
    }),

    moreBranchInfo: Joi.object({
      name: Joi.string().required().messages({
        "any.required": "Name is required",
        "string.empty": "Name cannot be empty",
      }),
      mobile: Joi.string().required().messages({
        "any.required": "Mobile number is required",
        "string.empty": "Mobile number cannot be empty",
      }),
      district: Joi.string().required().messages({
        "any.required": "District is required",
        "string.empty": "District field cannot be empty",
      }),
      upozila: Joi.string().required().messages({
        "any.required": "Upozila is required",
        "string.empty": "Upozila field cannot be empty",
      }),
      address: Joi.string().required().messages({
        "any.required": "Address is required",
        "string.empty": "Address field cannot be empty",
      }),
      postcode: Joi.string().required().messages({
        "any.required": "Postcode is required",
        "string.empty": "Postcode field cannot be empty",
      }),
    }),
    branchDocument: Joi.object({
      personal_img: Joi.string().required().messages({
        "any.required": "Passport Size Image is required",
        "string.empty": "Passport Size Image cannot be empty",
      }),
      id_card_img: Joi.string().required().messages({
        "any.required": "Id card image is required",
        "string.empty": "Id card image cannot be empty",
      }),
      trade_licence_img: Joi.string().required().messages({
        "any.required": "Trade Licence image is required",
        "string.empty": "Trade Licence image cannot be empty",
      }),
    }),
  });

  return schema.validate(data, { abortEarly: false }); // abortEarly: false returns all validation errors
};
