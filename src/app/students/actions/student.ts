"use server";
import prisma from "@/lib/prisma";
import { Student } from "../../generated/prisma";

export async function addStud(formData: Student) {
  await prisma?.student?.create({
    data: {
      name: formData.name,
      marks: formData.marks,
      isPassed: formData.isPassed,
    },
  });
}
export async function getAllStud() {
  const studs = await prisma.student.findMany({
    where: {
      isPassed: true,
    },
  });
  return {
    success: true,
    data: studs,
    message: "Students fetched successfully",
  };
}
export async function deleteStud(_id: number) {
  const studs = await prisma.student.delete({
    where: {
      id: _id,
    },
  });
}
