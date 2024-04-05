"use client"
import React, { useState } from "react";
// import img from "./signup.webp";
export default function aboutus() {
  const [registration, setRegistration] = useState({
    firstname: "",
    lastname: "",
    username: "",
    contact: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setRegistration({
      ...registration,
      [name]: value,
    });
  }

 async function  handleSubmit(e){
    e.preventDefault();
    try {

      const response = await fetch(`http://localhost:8080/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registration),
      });
     alert("message sent successfully")
    } catch (error) {
      console.log("there was an error")
    }
    console.log(registration)
  }
  const inputStyles =
    "w-full border-b border-white mx-auto p-2 outline-none bg-transparent my-2  text-black  font-xl hover:shadow-xl border-slate-700 hover:bg-slate-100 hover:rounded-lg ";
  return (
    <div className=" border-2  border-s-white     h-full">
      <div className=" mt-32 shadow-xl  shadow-gray-300 flex flex-col w-3/4 mx-auto rounded-lg p-4 items-center content-center bg-slate-200  md:w-1/3">
        <h1 className=" inline-block text-2xl font-bold text-black">Sign Up</h1>
        <form action="" className=" w-11/12 mx-auto flex flex-col">
          <input
            onChange={handleChange}
            className={inputStyles}
            name="firstname"
            id="firstName"
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={handleChange}
            className={inputStyles}
            name="lastname"
            id="lastname"
            type="text"
            placeholder="Name"
          />
          <input
            onChange={handleChange}
            className={inputStyles}
            name="username"
            id="username"
            type="text"
            placeholder="userName"
          />
          <input
            onChange={handleChange}
            name="contact"
            id="contact"
            className={inputStyles}
            type="number"
            placeholder="Contact No."
          />
          <input
            onChange={handleChange}
            className={inputStyles}
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <input
            onChange={handleChange}
            className={inputStyles}
            name="password"
            id="password"
            placeholder="password"
          />
          <button
            onClick={handleSubmit}
            className="px-2 py-1 rounded-md text-black font-bold mt-2 w-1/3 mx-auto border border-black hover:text-white hover:bg-gray-900"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

{
  /* <div>
   <Image src={img} width={300} height={300} alt="img" />
 </div> */
}
