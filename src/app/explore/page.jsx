"use client";
import { useState } from "react";
import React from "react";

export default function explore() {
  const [main,setMain]  = useState("")
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/registration/`, {
        method: "GET"
      });
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        setMain(data)
      }
    } catch (error) {
      console.log("an error occured while fetching the data");
      console.log(error);
    }
  };
  getData();
  return (
    <div className=" flex justify-center items-center text-5xl  underline">
this
    </div>
  );
}
