import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dlqndcdqm",
  api_key: "612162359362262",
  api_secret: "szTV9CmxGF2sXYHPQbffOuhnvP4",
});

export const uploadImg = async (s: string) => {
  let url = await cloudinary.uploader.upload(s, { folder: "student_img" });
  return url;
};
