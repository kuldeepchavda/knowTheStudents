"use client";
import { useEffect, useState } from "react";
import img from "./homeImg.png";
import Image from "next/image";
import { useAuth } from "./store/auth";
export default function Home() {
  const homeTextChild = "";
  const { user, authenticatedToken } = useAuth();

  return (
    <>
      <div className="   mx-auto w-full mt-10 lg:w-11/12   h-screen flex justify-between flex-col text-black ">
        <div className="flex gap-4   mx-auto flex-col items-start    md:flex-row ">
          <div className="flex mx-auto gap-4 flex-col items-start justify-start">
            <h1
             
             className={`${homeTextChild} text-2xl font-bold tracking-wide py-3 md:text-4xl`}
            >
              Welcome to <span className="underline">Interviewer-Student</span>{" "}
              Placement Platform.
            </h1>
            <p className={`${homeTextChild} text-lg  `}>
              Discover tailored profiles and resources for <br /> streamlined
              recruitment.
            </p>
            <p  className={`${homeTextChild} text-lg`}>
              Elevate your placement process.
            </p>
          </div>
          <div className="relative -z-10 w-full h-fit">
            <Image src={img} className="w-5/6 mx-auto" alt="searching" />
          </div>
        </div>
      </div>
    </>
  );
}
