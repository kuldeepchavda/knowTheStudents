"use client";
import React, { useState } from "react";
import Link from "next/link";
export default function Navbar() {

  const isPhone = window.innerWidth <= 768 ? true:false;
  const [visibleNav,setVisibleNav] = useState(isPhone)
  const navListItems = "mx-auto text-xl hover:underline text-gray-950 md:m-1 ";

  function navBurger(){
    setVisibleNav(!visibleNav)
  }

    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        <div>
          <div className="flex font-sans content-center items-center text-gray-950 font-semibold  flex-col md:flex-row  md:py-3">
            <div className="flex w-11/12 justify-between  mt-4 md:w-fit md:mt-0 ml-5">
              <h1 className="text-xl  inline-block underline md:text-3xl ">
                knowTheStudents
              </h1>
              <button
                onClick={navBurger}
                className="mr-5 w-10 bg-slate-500 rounded-lg md:hidden"
              >
                <i className="fa-solid fa-bars "></i>
              </button>
            </div>
            <div className={`${visibleNav ? "hidden" : "absolute z-10"} w-screen`}>
              <ul className=" flex flex-col relative top-10  w-full gap-3 md:top-0 md:flex-row md:w-fit md:ml-auto mr-3">
                <li className={navListItems}>
                  <Link href="/">Home</Link>
                </li>
                <li className={navListItems}>
                  <Link href="/signup">Sign Up</Link>
                </li>{" "}
                <li className={navListItems}>
                  <Link href="/colleges">Colleges</Link>
                </li>{" "}
                <li className={navListItems}>
                  <Link href="/explore">Explore</Link>
                </li>{" "}
                <li className={navListItems}>
                  <Link href="/reachus">Reach Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}
