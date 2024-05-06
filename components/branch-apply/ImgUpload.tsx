"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { LuUpload } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useThemeContext } from "@/context/theme";

const ImgUpload = ({ title, name }: { title: string; name: string }) => {
  const { ChangeBranchDocument, branchDocument } = useThemeContext();

  const [uploadDocument, setUploadDocument] = useState<
    string | ArrayBuffer | null
  >(null);
  const ImageBtnRef = useRef<HTMLInputElement>(null);

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
          ChangeBranchDocument(event.target.result as string, name);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className=" mt-2 flex items-center justify-between gap-4">
      <h1 className="">{title}:</h1>
      {uploadDocument === ("" || null) ? (
        <div>
          <div className="relative">
            <input
              type="file"
              className="hidden"
              onChange={handleChangeImage}
              ref={ImageBtnRef}
            />
          </div>
          <Button
            className="bg-white"
            variant={"outline"}
            onClick={handleClickToUpload}
          >
            Add <LuUpload className="ml-2" />
          </Button>
        </div>
      ) : (
        <div className="relative">
          <Image
            src={uploadDocument as string}
            height={200}
            width={200}
            alt="uploadingImg"
          />
          <Button
            className="bg-transparent absolute top-0 text-[#ffffff] right-0"
            onClick={(e) => {
              e.preventDefault();
              setUploadDocument(null);
              ChangeBranchDocument("", name);
            }}
          >
            <RxCross2 className="bg-[#db1414] rounded-sm" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImgUpload;
