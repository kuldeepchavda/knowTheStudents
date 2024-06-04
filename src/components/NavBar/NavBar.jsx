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
      <div className="w-full  border-b  shadow-sm ">
        <div className="flex  w-11/12 mx-auto     backdrop-blur-3xl font-sans  justify-between items-center  py-3 content-center   text-gray-950 font-semibold  flex-col md:flex-row  ">
          <div className="flex   justify-between   w-full   ">
            <h1 className="text-xl   inline-block underline md:text-xl ">
              knowTheStudents
            </h1>
            <button
              onClick={navBurger}
              className={`${nav ? "z-10" : ""}  w-10  rounded-lg md:hidden`}
            >
              <i className={nav ? "" : "fa-solid fa-bars"}>{nav && "X"}</i>
            </button>
          </div>
          <div
            className={`${
              nav ? "fixed bg-white right-0 shadow-md h-screen w-1/2" : "hidden"
            } md:block flex items-start  justify-center  `}
          >
            <ul
              className={`${
                nav ? "pt-20" : ""
              } flex   flex-col w-full gap-3  md:flex-row md:w-fit md:ml-auto list-none no-underline`}
            >
              {isLoggedIn ? (
                <>
                  <li>
                    <Link
                      href={`/dashboard/${user._id}`}
                      className={`border-l flex justify-center items-center border-zinc-400 pl-4 ${navListItems}`}
                    >
                      {user && (
                        <img
                          src={`http://localhost:8080/Images/${user.image}`}
                          alt="profile"
                          className="h-10 rounded-full  "
                        />
                      )}
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
