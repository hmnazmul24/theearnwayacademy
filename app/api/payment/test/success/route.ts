"use server";

import { redirect } from "next/navigation";

export const GET = () => {
  console.log("this is working");
  redirect("/");
};
