import { Button } from "@/components/ui/button";
import Link from "next/link";

const FailedPayment = () => {
  return (
    <div className="min-h-screen flex_center w-full flex-col gap-3">
      <span className="text-[red]">Payment failed</span>{" "}
      <Link href={"/"}>
        <Button variant={"outline"}>Go Home</Button>
      </Link>
    </div>
  );
};

export default FailedPayment;
