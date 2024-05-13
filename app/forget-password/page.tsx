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
          <CardTitle className="text-2xl">Forget Password</CardTitle>
          <CardDescription>
            Enter your email below to get varification email..
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-black text-white">
              Send Email
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
