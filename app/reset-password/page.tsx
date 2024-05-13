"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <div className="min-h-screen flex_center bg-[#0f2141] px-3">
      <Card className="mx-auto w-full sm:max-w-sm bg-white ">
        <CardHeader>
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>
            Enter your new password and confirm password...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">New Password</Label>
              </div>
              <Input id="password" type="text" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Confirm Password</Label>
              </div>
              <Input id="password" type="text" required />
            </div>
            <Button type="submit" className="w-full bg-black text-white">
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
