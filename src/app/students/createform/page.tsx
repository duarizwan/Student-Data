"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addStud } from "@/app/students/actions/student";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { create } from "domain";
import { Student } from "@/app/generated/prisma";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const studentSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  marks: z.string().min(1, {
    message: "marks must be positive int.",
  }),
  isPassed: z.boolean(),
});

export default function CreateForm() {
  const form = useForm<z.infer<typeof studentSchema>>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      name: "",
      marks: "",
      isPassed: Math.random() > 0.5 ? true : false,
    },
  });

  async function onSubmit(values: z.infer<typeof studentSchema>) {
    await addStud(values as Student);
    console.log(values);
    form.reset();
    toast.success("Student added successfully!");
  }
  return (
    <div className=" m-auto justify-center items-center bg-red-800 h-screen w-screen">
      <div className="mx-auto max-w-2xl text-center items-center justify-center shadow-lg p-8 rounded-lg bg-white">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g ali" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="marks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>marks</FormLabel>
                  <FormControl>
                    <Input placeholder="100" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Add</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
