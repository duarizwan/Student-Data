'use client";';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllStud } from "../actions/student";
import { EyeIcon } from "lucide-react";
import Alert from "@/components/custom/alert";

export default async function TableDemo() {
  const students = await getAllStud();

  return (
    <div className="flex bg-red-800 justify-center items-center h-screen w-screen">
      <div className="justify-center items-center w-[700px] rounded-2xl shadow-lg bg-white p-8 m-auto">
        <Table>
          <TableCaption>A list of students.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Marks</TableHead>
              <TableHead>Passed</TableHead>
              <TableHead>View</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.data.map((stud) => (
              <TableRow key={stud.id}>
                <TableCell className="font-medium">{stud.id}</TableCell>
                <TableCell>{stud.name}</TableCell>
                <TableCell>{stud.marks}</TableCell>
                <TableCell className="text-center">
                  {stud.isPassed ? "Yes" : "No"}
                </TableCell>
                <TableCell>
                  <EyeIcon className="ghost" />
                </TableCell>
                <TableCell>
                  <Alert id={stud.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
