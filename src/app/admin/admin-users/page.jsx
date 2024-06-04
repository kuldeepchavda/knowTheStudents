"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/store/auth";
export default function AdminUserData() {
  const [showNav, setShowNav] = useState(false);
  function setNav() {
    setShowNav(!showNav);
  }
  const { authenticatedToken, contacts, getAllTheUsersData, users } = useAuth();
  //localhost:8080/admin/users
  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authenticatedToken,
          },
        }
      );
      if (response.ok) {
        const resResult = `user ${id} deleted`;
        alert(resResult);
        const rawMessage = await response.json();
        const message = rawMessage.message;
        console.log(message);
        getAllTheUsersData();
      } else {
        alert("error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const tableStyles = {
    theadTd: "px-2 py-1 text-lg text-gray-900 bg-gray-200 border border-black",
    theadtr: "py-1 px-2 bg-gray-50 border border-black text-gray-600",
  };
  return (
    <div className="flex ml-5 ">
      {/* <div className={`h-screen  ${showNav ? "" : "hidden"}`}>
        <nav className="text-lg text-black  left-0  w-60   h-5/6 border-r">
          <ul className=" flex flex-col items-start content-center w-full  pt-6">
            <li className="flex items-center mb-5 justify-center align-text-bottom h-8 w-full  hover:bg-slate-100">
              <Link
                href="/admin/admin-users"
                className="  w-full h-full flex justify-center items-center "
              >
                users ({users.length})
              </Link>
            </li>
            <li className="flex items-center mb-5 justify-center h-10 w-full hover:bg-slate-100">
              <Link
                href="/admin/admincontacts"
                className=" w-full h-full flex justify-center items-center "
              >
                contacts ({contacts.length})
              </Link>
            </li>
          </ul>
        </nav>
      </div> */}
      <div className="flex flex-col  mx-auto justify-center items-center ">
        <h1 className="text-2xl text-black mt-10 underline">
          USERS DATA ({users.length})
        </h1>
        <table className="mx-auto my-20">
          <thead>
        

            <tr>
              <td className={tableStyles.theadTd}>Id</td>
              <td className={tableStyles.theadTd}>FirstName</td>
              <td className={tableStyles.theadTd}>lastname</td>
              <td className={tableStyles.theadTd}>username</td>
              <td className={tableStyles.theadTd}>contact</td>
              <td className={tableStyles.theadTd}>email</td>
              <td
                className={` bg-green-200 text-green-600 ${tableStyles.theadTd}`}
              >
                edit
              </td>
              <td className={` bg-red-200 text-red-600 ${tableStyles.theadTd}`}>
                Delete
              </td>
            </tr>
          </thead>
          <tbody>
            {users.map((curEle, index) => (
              <tr key={index} className="">
                <td className={tableStyles.theadtr}>{curEle._id}</td>
                <td className={tableStyles.theadtr}>{curEle.firstname}</td>
                <td className={tableStyles.theadtr}>{curEle.lastname}</td>
                <td className={tableStyles.theadtr}>{curEle.username}</td>
                <td className={tableStyles.theadtr}>{curEle.contact}</td>
                <td className={tableStyles.theadtr}>{curEle.email}</td>
                <td
                  className={` bg-green-100 text-green-600 ${tableStyles.theadtr}`}
                >
                  <Link href={`http://localhost:3000/admin/edit/${curEle._id}`}>
                    Edit
                  </Link>
                </td>
                <td
                  onClick={() => {
                    deleteUser(`${curEle._id}`);
                  }}
                  className={`cursor-pointer bg-red-100 text-red-600 ${tableStyles.theadtr}`}
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
