"use client";
import logOutImg from "./logoutFinal.png";
import { useAuth } from "../store/auth";
import { link } from "./link";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
export default function LogoutUser() {
  const { logoutUser, setIsLoggedIn } = useAuth();
  useEffect(() => {
    logoutUser();
    setIsLoggedIn(false)
  }, []);
  return (
    <>
      <div className="h-full pt-20 flex flex-col bg-slate-100">
        <div className="flex w-2/3  mx-auto justify-start">
          <div className=" ml-5 w-fit mr-10">
            <h1 className="text-4xl text-gray-950 mb-5 ">Hmm...</h1>
            <h3 className="text-lg text-gray-900">
              Seems like you have logged out of the Account.
            </h3>
            <h2 className="text-lg text-gray-900">
              Instead go and Login Again.
            </h2>
            <button className="w-fit mx-auto my-10 py-1  px-4 text-black border border-black rounded-xl hover:bg-black hover:text-white">
              <Link href="../login" className="">
Login              </Link>
            </button>
          </div>
          <Image
            src={logOutImg}
            width={350}
            height={350}
            alt="logout"
            className="ml-20"
          />
        </div>
      </div>
    </>
  );
}
