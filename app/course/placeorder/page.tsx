"use client";

import React, { ChangeEvent, Fragment, useRef, useState } from "react";
import CustomInput from "../../../components/shared/CustomInput";
import { Button } from "@/components/ui/button";
import SelectInput from "@/components/shared/SelectInput";
import { StudentInfoType } from "@/types";
import axios, { AxiosError } from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProfileImg from "@/components/shared/ProfileImg";
import toast from "react-hot-toast";
import Loading from "@/components/Loading";

function PlaceOrderPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [studentInfo, setStudentInfo] = useState<StudentInfoType>({
    firstName: "",
    lastName: "",
    country: "BD",
    state: "",
    city: "",
    mobile: "",
    email: "",
    gender: "",
    password: "",
    profileImg: "",
    documentImg: "",
  });
  const [uploadDocument, setUploadDocument] = useState<
    string | ArrayBuffer | null
  >(null);

  const [uploadImg, setUploadImg] = useState<string | ArrayBuffer | null>(null);

  const ImageBtnRef = useRef<HTMLInputElement>(null);

  //   change event
  const ChangeStudentInfo = (value: string, name: string) => {
    setStudentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /// click image
  const handleClickToUpload = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (ImageBtnRef.current) {
      ImageBtnRef.current.click();
    }
  };

  // handle change image
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Use optional chaining to handle potential null or undefined

    if (file) {
      const reader = new FileReader();

      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target) {
          setUploadDocument(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    studentInfo.profileImg = uploadImg?.toString() as string;
    studentInfo.documentImg = uploadDocument?.toString() as string;
    console.log(studentInfo);

    try {
      setLoading(true);
      const { data } = await axios.post(
        "/api/student",
        JSON.stringify(studentInfo)
      );
      setLoading(false);
      window.open(data.payment_url, "_self");
    } catch (error) {
      console.log(error, "error");
      setLoading(false);

      if ((error as AxiosError).response) {
        const axiosError = error as AxiosError;
        const info = axiosError.response?.data as { message: string };
        toast.error(info.message ? info.message : "error occurs");
      }
    }
  };
  return (
    <Fragment>
      {loading ? (
        <Loading text="processing..." />
      ) : (
        <div className="flex flex-col md:flex-row items-start md:items-start md:justify-center justify-start w-[95%] xl:w-[85%] m-auto">
          <div className="md:w-1/2 w-full flex items-center justify-center my-5">
            <form className="md:w-[80%] w-[99%] m-auto">
              <h1 className="mb-4 text-[1.2rem]">Student details</h1>
              <div className="flex w-full items-center mb-4 md:flex-row flex-col gap-4">
                <CustomInput
                  placeholder="first name"
                  name="firstName"
                  type="text"
                  ChangeStudentInfo={ChangeStudentInfo}
                />
                <CustomInput
                  placeholder="last name"
                  name="lastName"
                  type="text"
                  ChangeStudentInfo={ChangeStudentInfo}
                />
              </div>
              <div className="mb-4">
                <CustomInput
                  placeholder="Email address"
                  name="email"
                  type="email"
                  ChangeStudentInfo={ChangeStudentInfo}
                />
              </div>
              <div className="flex items-center mb-3 md:flex-row flex-col gap-4">
                <CustomInput
                  placeholder="mobile number"
                  name="mobile"
                  type="number"
                  ChangeStudentInfo={ChangeStudentInfo}
                />
                <CustomInput
                  placeholder="Create new password"
                  name="password"
                  type="password"
                  ChangeStudentInfo={ChangeStudentInfo}
                />
              </div>
              <div
                className={` px-2 md:px-4 flex-col gap-4 md:flex-row rounded-md my-7 py-6 relative flex items-center justify-evenly ${
                  studentInfo.state !== "" && studentInfo.city !== ""
                    ? "main_border"
                    : "border-[1px] border-[#cdcdcd] "
                }`}
              >
                <span className="absolute left-3 top-[-15px] text-[0.8rem] p-2 bg-white">
                  Bangladesh
                </span>
                <SelectInput
                  ChangeStudentInfo={ChangeStudentInfo}
                  selected={studentInfo.state ? true : false}
                />
                <CustomInput
                  placeholder="Village or City"
                  name="city"
                  type="text"
                  ChangeStudentInfo={ChangeStudentInfo}
                />
              </div>
              {/* gender  */}
              <div className="select_item">
                <Select
                  onValueChange={(e: string) => ChangeStudentInfo(e, "gender")}
                >
                  <SelectTrigger
                    className={`${
                      studentInfo.gender !== ""
                        ? "main_border"
                        : "border-[#e3e3e3] border-[1px]"
                    } w-full `}
                  >
                    <SelectValue placeholder="Gender" className="" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* profileImage */}
              <ProfileImg uploadImg={uploadImg} setUploadImg={setUploadImg} />
              {/* image  */}
              <div
                className={` flex items-center relative  justify-center  rounded-md min-h-[300px] my-4 p-4 mt-8 ${
                  studentInfo.profileImg === ""
                    ? "border-[#cccccc] border-[1px] "
                    : "main_border"
                }`}
              >
                <span className="absolute left-2 top-[-15px] bg-white p-1 rounded-md text-[0.9rem]">
                  Document
                </span>
                <div className="flex items-center  justify-center gap-2 flex-col p-3 bg-[white] rounded-md">
                  {uploadDocument === ("" || null) ? (
                    <>
                      <p className="text-[0.9rem] text-center">
                        Add a Image of your SSC/HSC registration card
                      </p>

                      <div className="relative">
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleChangeImage}
                          ref={ImageBtnRef}
                        />
                      </div>
                      <Button variant={"outline"} onClick={handleClickToUpload}>
                        Add Image
                      </Button>
                    </>
                  ) : (
                    <>
                      <img
                        src={uploadDocument?.toString()}
                        className="w-full"
                        alt="image"
                      />

                      <Button
                        variant={"outline"}
                        className="text-[red]"
                        onClick={(e) => {
                          e.preventDefault();
                          setUploadDocument(null);
                        }}
                      >
                        change
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 w-full p-1 md:p-[20px]">
            <div className="w-full">
              <h1 className="mb-4 text-[1.2rem]">Payment info</h1>

              <div className="border-[1px] border-[#ebebeb] w-full md:w-[80%]  left-0 rounded-md p-3">
                <div className="flex items-center justify-between">
                  <span>Course Fee</span>
                  <span className="text-[1.2rem]">1999 &#2547;</span>
                </div>
                <span className="text-[0.8rem] mt-6">
                  We accept any online payment method
                </span>
                <img
                  src={"/sslcommerz2.jpg"}
                  className="w-full py-4"
                  alt="paymentImage"
                />
                <Button
                  variant={"outline"}
                  className="w-full mt-4 py-6 main_bg_color text-white"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default PlaceOrderPage;
