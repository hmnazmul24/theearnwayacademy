import React, { ChangeEvent, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface ProfileImgProps {
  uploadImg: string | ArrayBuffer | null;
  setUploadImg: React.Dispatch<
    React.SetStateAction<string | ArrayBuffer | null>
  >;
}

const ProfileImg = ({ uploadImg, setUploadImg }: ProfileImgProps) => {
  const ImageBtnRef = useRef<HTMLInputElement>(null);
  // handle change image
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Use optional chaining to handle potential null or undefined

    if (file) {
      const reader = new FileReader();

      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target) {
          setUploadImg(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
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

  return (
    <div
      className={`flex items-center relative  justify-center   rounded-md min-h-[300px] my-4 p-4 mt-8 ${
        uploadImg === ("" || null)
          ? "border-[#cccccc] border-[1px] "
          : "main_border"
      }`}
    >
      <span className="absolute left-2 top-[-15px] bg-white p-1 rounded-md text-[0.9rem]">
        Profile Image
      </span>
      <div className="flex items-center justify-center gap-2 flex-col p-3 bg-[white] rounded-md">
        {uploadImg === ("" || null) ? (
          <>
            <p className="text-[0.9rem] text-center">
              Add a Passport size Image
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
            <Image
              src={uploadImg?.toString()}
              height={200}
              width={200}
              className="w-full"
              alt="image"
            />

            <Button
              variant={"outline"}
              className="text-[red]"
              onClick={(e) => {
                e.preventDefault();
                setUploadImg(null);
              }}
            >
              change
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileImg;
