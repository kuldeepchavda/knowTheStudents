"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import React from "react";
import Link from "next/link";
// import { useAuth } from "../store/auth";
export default function explore() {
  // const { users } = useAuth();
  const { authenticatedToken } = useAuth();
  const [users, setUsers] = useState();
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/explore`, {
        method: "GET",
        headers: {
          Authorization: authenticatedToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUsers(data.data);
      }
    } catch (error) {
      console.log("an error occured while fetching the data");
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    console.log(users);
  }, []);
  return (
    <>
      <div className="flex flex-col  justify-between items-between">
        <h1 className=" w-fit mx-auto my-5 text-3xl font-normal">
          Explore People
        </h1>
        {/* <div className=""> */}
        <ul>
          {users
            ? users.map((curEle, index) => (
                <>
                  <li className="  ">
                    <div className="flex mx-auto w-4/5 h-20  bg-slate-100 hover:bg-slate-200 rounded-xl mb-4 justify-between items-center">
                      <div className=" ml-6   flex  justify-between  ">
                        <h4 className="ml-2 mr-5 flex justify-center items-center text-lg">
                          {index + 1}
                        </h4>
                        <div className="">
                          <h3 className="">
                            {curEle.firstname} {curEle.lastname}
                          </h3>
                          <h4 className="text-xs">@{curEle.username}</h4>
                        </div>
                      </div>
                      <div className=" text-lg cursor-pointer mr-24  text-gray-600 font-semibold hover:text-black">
                      <Link href={`/explore/${curEle._id}`} className="h-full w-full  py-2 px-4">explore</Link>
                      </div>
                    </div>
                  </li>
                </>
              ))
            : "not found"}
        </ul>
      </div>
      {/* </div> */}
    </>
  );
}

{
  /* 
{users.map((curEle,index)=>(
  <h6 key={index}>{curEle._id}</h6>
))} */
}
