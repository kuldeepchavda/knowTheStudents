"use client";
import React, { useState } from "react";
import { useAuth } from "@/app/store/auth";
import Link from "next/link";
import { FaUser ,user} from "react-icons/fa";

export default function Navbar() {
  const { isLoggedIn, logoutUser,user} = useAuth();
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
        <div className="flex  bg-local backdrop-blur-3xl font-sans border-b justify-between pb-3 shadow-sm content-center items-center text-gray-950 font-semibold  flex-col md:flex-row  md:py-3">
          <div className="flex w-11/12 justify-between  mt-4 md:w-fit md:mt-0 ml-5">
            <h1 className="text-xl ml-8  inline-block underline md:text-3xl ">
              knowTheStudents
            </h1>
            <button
              onClick={navBurger}
              className={`${
                nav ? "z-10" : ""
              } mr-5 w-10 bg-slate-500 rounded-lg md:hidden`}
            >
              <i className={nav ? "" : "fa-solid fa-bars"}>{nav && "X"}</i>
            </button>
          </div>
          <div
            className={`${
              nav ? "fixed bg-white right-0 shadow-md h-screen w-1/2" : "hidden"
            } md:block`}
          >
            <ul
              className={`${
                nav ? "pt-20" : ""
              } flex flex-col w-full gap-3 md:flex-row md:w-fit md:ml-auto mr-3 list-none no-underline`}
            >
              <li onClick={closeNav} className={navListItems}>
                <Link href="/">Home</Link>
              </li>
              {user.isAdmin ? (
                <>
                  <li className={navListItems}>
                    <Link href="/admin">Admin</Link>
                  </li>
                </>
              ) : (
                ""
              )}
              <li onClick={closeNav} className={navListItems}>
                <Link href="/explore">Explore</Link>
              </li>{" "}
              <li onClick={closeNav} className={navListItems}>
                <Link href="/reachus">Reach us</Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li onClick={logoutUser} className={navListItems}>
                    <Link href="/logout">Log out</Link>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li onClick={closeNav} className={navListItems}>
                    <Link href="/signup">Sign Up</Link>
                  </li>{" "}
                  <li onClick={closeNav} className={navListItems}>
                    <Link href="/login">Login</Link>
                  </li>
                </>
              )}
              {isLoggedIn ? (
                <>
                  <li>
                    <Link
                      href={`/dashboard/${user._id}`}
                      className={`border-l-2 flex justify-center items-center border-black pl-4 ${navListItems}`}
                    >
                      <FaUser className="mx-2 h-10 " />
                      {user.email}
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
