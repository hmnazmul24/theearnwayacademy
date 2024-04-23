"use client";

import Loading from "@/components/Loading";
import DeatilsPage from "@/components/dashboard/Card";
import StudentList from "@/components/dashboard/StudentList";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { StudentInfoType } from "@/types";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";

export default function Dashboard() {
  let [students, setStudents] = useState<StudentInfoType[]>();
  let [selectedStudent, setSelectedStudent] = useState<StudentInfoType>();
  let [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getStudents = async () => {
      try {
        setLoading(true);
        let { data } = await axios.get("/api/admin");
        setLoading(false);
        setStudents(data.students);
        setSelectedStudent(data.students[0]);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getStudents();
  }, []);

  console.log(students);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex min-h-screen w-full  m-auto flex-col bg-muted/40">
          <div className="flex flex-col sm:gap-4 sm:py-4 ">
            <main className="grid flex-1 items-start gap-4 p-1 md:p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
              <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  <Card
                    className="sm:col-span-2"
                    x-chunk="dashboard-05-chunk-0"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle>Dashboard</CardTitle>
                      <CardDescription className="max-w-lg text-balance leading-relaxed text-[0.6rem] md:text-[1rem]">
                        Introducing Our Dynamic Orders Dashboard for Seamless
                        Management and Insightful Analysis.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card x-chunk="dashboard-05-chunk-1">
                    <CardHeader className="pb-2">
                      <CardDescription>This Week</CardDescription>
                      <CardTitle className="text-4xl">$1,329</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        +25% from last week
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Progress value={25} aria-label="25% increase" />
                    </CardFooter>
                  </Card>
                  <Card x-chunk="dashboard-05-chunk-2">
                    <CardHeader className="pb-2">
                      <CardDescription>This Month</CardDescription>
                      <CardTitle className="text-4xl">$5,329</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        +10% from last month
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Progress value={12} aria-label="12% increase" />
                    </CardFooter>
                  </Card>
                </div>
                <StudentList students={students} />
              </div>
              <DeatilsPage selectedStudent={selectedStudent} />
            </main>
          </div>
        </div>
      )}
    </Fragment>
  );
}