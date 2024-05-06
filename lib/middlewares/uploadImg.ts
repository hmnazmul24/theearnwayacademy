import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const uploadImg = async (s: string) => {
  let url = await cloudinary.uploader.upload(s, { folder: "student_img" });
  return url;
};
