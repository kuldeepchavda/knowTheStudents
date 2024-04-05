"use client";
import React, { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const navListItems = "mx-auto text-xl hover:underline text-gray-950 md:m-1 ";
  function navBurger() {
    setNav(!nav);
  }
  function closeNav(){
    setNav(false);
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <div>
        <div className="flex w-screen fixed bg-local backdrop-blur-3xl font-sans border-b justify-between pb-3 shadow-sm content-center items-center text-gray-950 font-semibold  flex-col md:flex-row  md:py-3">
          <div className="flex w-11/12 justify-between  mt-4 md:w-fit md:mt-0 ml-5">
            <h1 className="text-xl ml-8  inline-block underline md:text-3xl ">
              knowTheStudents
            </h1>
            <button
              onClick={navBurger}
              className={`${nav? "z-10": ""} mr-5 w-10 bg-slate-500 rounded-lg md:hidden`}
            >
              <i className={nav? "": "fa-solid fa-bars"}>{nav && "X"}</i>
            </button>

          </div>
          <div className={`${nav ? "fixed bg-white right-0 shadow-md h-screen w-1/2" : "hidden"} md:block`}>
            <ul className={`${nav? "pt-20": ""} flex flex-col w-full gap-3 md:flex-row md:w-fit md:ml-auto mr-3`}>
              <li onClick={closeNav} className={navListItems}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={closeNav} className={navListItems}>
                <Link href="/signup">Sign Up</Link>
              </li>{" "}
              <li onClick={closeNav} className={navListItems}>
                <Link href="/login">Login</Link>
              </li>{" "}
              <li onClick={closeNav} className={navListItems}>
                <Link href="/explore">Explore</Link>
              </li>{" "}
              <li onClick={closeNav} className={navListItems}>
                <Link href="/reachus">Reach Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
