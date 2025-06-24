import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import React from "react";

const navbar = () => {
  return (
    <div className="bg-red-900 text-white sticky top-0 left-0 w-full z-50 shadow-4xl shadow-md">
      {" "}
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="text-red-800 bg-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          You are signed in
          <UserButton />
        </SignedIn>
      </header>
    </div>
  );
};

export default navbar;
