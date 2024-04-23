import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import PaginationPage from "./Pagination";
import { StudentInfoType } from "@/types";
const StudentList = ({
  students,
}: {
  students: StudentInfoType[] | undefined;
}) => {
  return (
    <Tabs defaultValue="week">
      <TabsContent value="week">
        <Card x-chunk="dashboard-05-chunk-3 ">
          <CardHeader className="px-7 flex items-center justify-between md:flex-row">
            <div className="hidden md:block">
              {" "}
              <CardTitle>Students</CardTitle>
              <CardDescription>
                Recently subscribed to your coures
              </CardDescription>
            </div>
            <form className="flex items-center justify-center gap-2">
              <Input placeholder="Search here.." />
              <Button type="submit" variant={"outline"} className="">
                <Search className="p-[3px]" />
              </Button>
            </form>
          </CardHeader>

          <CardContent className="p-2 md:p-6">
            <Table className="p-0">
              <TableHeader>
                <TableRow>
                  <TableHead>Students</TableHead>
                  <TableHead className="hidden sm:table-cell">Gender</TableHead>
                  <TableHead className="hidden sm:table-cell">Date</TableHead>
                  <TableHead className="hidden md:table-cell">Number</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students === undefined ? (
                  <TableRow>
                    <TableCell>No students yet !</TableCell>
                  </TableRow>
                ) : (
                  students?.map((student, i) => (
                    <TableRow className="bg-accent" key={i}>
                      <TableCell>
                        <div className="font-medium">
                          <span className="mr-1">{student.firstName}</span>
                          {student.lastName}
                        </div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          {student.email}
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {student.gender}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="secondary">
                          2023-06-23
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {student.mobile}
                      </TableCell>
                      <TableCell className="text-right pr-0">
                        <Button variant={"outline"}>
                          <span className="hidden md:block">Open</span>
                          <CgArrowsExpandUpRight className="md:ml-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>

            {/* pagination  */}
            <div className="flex items-center justify-end ">
              <div>
                <PaginationPage />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default StudentList;
