import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSectionSimpleCentred() {
  return (
    <>
      {/* Hero */}
      <div className="bg-red-800  h-screen">
        <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
          <div className="mx-auto mt-5 max-w-2xl text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-red-100 lg:text-5xl">
              Student&apos;s Record
            </h1>
          </div>
          {/* End Title */}
          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-muted-foreground text-xl text-white">
              Welcome to the Student Record Management System, where you can
              easily manage student data!!
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild className="bg-red-100 text-black" size={"lg"}>
              <Link href="/students/createform">Add Record</Link>
            </Button>
            <Button asChild size={"lg"} variant={"outline"}>
              <Link href="/students/list">See List</Link>
            </Button>
          </div>
          {/* End Buttons */}
        </div>
      </div>
    </>
  );
}
