import { Copy, CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StudentInfoType } from "@/types";
import { FaDownload } from "react-icons/fa6";
import Image from "next/image";
const DeatilsPage = ({
  selectedStudent: ss,
}: {
  selectedStudent: StudentInfoType | undefined;
}) => {
  const handleDownload = async (arg: string) => {
    try {
      const response = await fetch(
        arg === "profile"
          ? ss?.profileImg!
          : arg === "given_Reg"
          ? ss?.documentImg!
          : ss?.profileImg!
      );
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "image.jpg"; // Specify the filename for the downloaded image
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Release the object URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };
  return (
    <div>
      <Card
        className="overflow-hidden hidden md:block"
        x-chunk="dashboard-05-chunk-4"
      >
        {ss === (undefined || null) ? (
          <CardHeader className="my-6 px-2">
            nothing to show ! open something
          </CardHeader>
        ) : (
          <>
            <CardHeader className="flex flex-row items-start bg-muted/50">
              <div className="grid gap-0.5">
                <div className=" relative w-[90px] overflow-hidden  rounded-md mb-2 border-[1px] border-[#e0e0e0]">
                  <Image
                    src={ss?.profileImg!}
                    className="w-full"
                    alt="userImg"
                  />
                  <span
                    onClick={() => handleDownload("profile")}
                    className="absolute bottom-0 right-0 cursor-pointer bg-white  p-1 rounded-md"
                  >
                    <FaDownload />
                  </span>
                </div>
                <CardTitle className="group flex items-center gap-2 text-lg">
                  Full Name: {ss?.firstName} {ss?.lastName}
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <Copy className="h-3 w-3" />
                    <span className="sr-only">Copy Order ID</span>
                  </Button>
                </CardTitle>
                <CardDescription>
                  Registered : November 23, 2023
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 text-sm">
              <div className="grid gap-3">
                <div className="font-semibold">Student Information</div>
                <dl className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Student</dt>
                    <dd>
                      {ss?.firstName} {ss?.lastName}
                    </dd>
                  </div>

                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Phone</dt>
                    <dd>
                      <a href="tel:">{ss?.mobile}</a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Gender</dt>
                    <dd>
                      <a href="tel:">{ss?.gender}</a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Email</dt>
                    <dd>
                      <a href="mailto:">{ss?.email}</a>
                    </dd>
                  </div>
                </dl>
              </div>
              <Separator className="my-4" />
              <div className="grid gap-3">
                <div className="font-semibold">Payment Information</div>
                <dl className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <dt className="flex items-center gap-1 text-muted-foreground">
                      <CreditCard className="h-4 w-4" />
                      Status
                    </dt>
                    <dd className="">*******Paid</dd>
                  </div>
                </dl>
              </div>
            </CardContent>
            <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
              <div className="flex items-start justify-start flex-col">
                <div>
                  <h1 className="text-[0.9rem] my-4">
                    {" "}
                    Student SSC/HSC Registration Card
                  </h1>
                  <div className=" relative cursor-pointer w-[150px] overflow-hidden  rounded-md mb-2 border-[1px] border-[#e0e0e0]">
                    <Image
                      src={ss?.documentImg!}
                      className="w-full"
                      alt="userImg"
                    />
                    <span
                      onClick={() => handleDownload("given_Reg")}
                      className="absolute bottom-0 right-0 bg-white  p-1 rounded-md"
                    >
                      <FaDownload />
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="text-[0.9rem] my-4">
                    Generated Registration Card
                  </h1>
                  <div className=" relative w-[150px] overflow-hidden  rounded-md mb-2 border-[1px] border-[#e0e0e0]">
                    <Image src="/user.png" className="w-full" alt="userImg" />
                    <span className="absolute bottom-0 right-0 bg-white  p-1 rounded-md">
                      <FaDownload />
                    </span>
                  </div>
                </div>
              </div>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
};

export default DeatilsPage;
