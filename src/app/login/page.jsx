"use client";
import { React, useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "../store/auth";
export default function Login() {
  const { setIsLoggedIn, setIsAdmin, user,setUser, userAuthentication } = useAuth();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/authorizations/login`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        const token = responseData.token;
        localStorage.setItem("token", `${token}`);
        setIsLoggedIn(true);
  
      }
    } catch (err) {
      console.log(err);
    }
  }

  let inputClasses =
    "rounded-sm border-b-2 w-2/3 my-3  outline-none text-black placeholder-black   pl-2 md:w-3/4 ";
  return (
    <div className=" h-fit flex justify-center">
      <form className=" mt-28 mx-auto rounded-md shadow-2xl shadow-slate-700 h-3/4 w-3/4 bg-slate-100 pt-10 flex flex-col justify-start  items-center md:w-80 md:h-96 mb-40 ">
        <h1 className=" text-3xl text-black mb-10">Login Page </h1>
        <input
          onChange={handleChange}
          name="email"
          className={inputClasses}
          type="email"
          id="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          id="password"
          name="password"
          className={inputClasses}
          // type=""
          placeholder="Password"
        />
        <button
          onClick={handleSubmit}
          className="bg-gray-400 my-20 text-black px-3 py-1 rounded hover:bg-gray-900  hover:text-white"
        >
          <Link href="/">Sign In</Link>
        </button>
      </form>
    </div>
  );
}
