"use client";
import { React, useState } from "react";
import { userAuthentication } from "@/store/userAuthentication";
export default function colleges() {
  const token = localStorage.getItem("token");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [fetchedData, setFetchedData] = useState({
    token: "",
    id: "",
  });
  const userAuthentication = async (req, res) => {
    try {
      const response = await fetch(`http://localhost:8080/registration/user`, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        const localStorageData = JSON.stringify(data.data);
        localStorage.removeItem("userdata")
        localStorage.setItem("userdata",localStorageData)
      }
    } catch (err) {
      console.log("error while catching userData", err);
      res.status(500).json({ error: err.message });
    }
  };

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  }
  function saveToLS(token) {
    localStorage.removeItem("token");
    localStorage.setItem("token", `Bearer ${token}`);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/registration/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      if (response.ok) {
        const responseData = await response.json();
        // console.log(responseData);

        setFetchedData({
          ...fetchedData,
          token: responseData.token,
          id: responseData.userId,
        });
        saveToLS(responseData.token);
        await userAuthentication();
      }
    } catch (err) {
      console.log("Error occured at Login , while fetching the data");
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
          type="password"
          placeholder="Password"
        />
        <button
          onClick={handleSubmit}
          className="bg-gray-400 my-20 text-black px-3 py-1 rounded hover:bg-gray-900  hover:text-white"
        >
          Sign In
        </button>
      </form>
      <div className="bg-black text-white m-20 flex flex-col w-fit overflow-scroll">
        <h1> {fetchedData.id}</h1>
        <h1> {fetchedData.token}</h1>
        <ul>
          {/* {Object.entries(userData).map((key, value) => {
            <li key={key}>
              <strong>{key}:</strong>
              {value}
            </li>;
          })} */}
        </ul>
      </div>
    </div>
  );
}
