"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/store/auth";

export default function updateUser({ params }) {
  const { authenticatedToken, getAllTheUsersData } = useAuth();
  const id = params.updates;
  const [editingUserData, setEditingUserData] = useState("");

  const getDataById = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/admin/users/databyid/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: authenticatedToken,
          },
        }
      );
      if (response.ok) {
        const resData = await response.json();
        setEditingUserData(resData.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getDataById();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditingUserData({
      ...editingUserData,
      [name]: value,
    });
    console.log(editingUserData)
  };
  // const handleSubmit = async()=>{
  //   try {
  //   const response = await fetch(``,{

  //   })
  //   } catch (error) {

  //   }
  // }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const response = await fetch(
        `http://localhost:8080/admin/users/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authenticatedToken,
          },
          body: JSON.stringify(editingUserData),
        }
      );
      if(response.ok){
    const resData = await response.json()
    console.log(resData.message)
    getAllTheUsersData()

      }else{
        alert("got an error")
      }
    } catch (error) {
      console.log(error)
    }
    console.log(editingUserData)
  }
  const formStyles = {
    inputs: "w-full ml-3 outline-none bg-local border-b border-black",
    labels: "mt-4 ml-3 text-lg",
  };

  return (
    <div className="text-black h-screen">
      <h1 className="text-black mt-5 mb-2 ml-10 text-xl">
        Editing {editingUserData._id}
      </h1>
      <form   className="flex flex-col w-1/3 mx-auto h-3/4">
        <label htmlFor="firstname" className={formStyles.labels}>
          First Name
        </label>
        <input
          type="text"
          name="firstname"
          value={editingUserData.firstname || ""}
          onChange={handleChange}
          className={formStyles.inputs}
        />

        <label htmlFor="lastname" className={formStyles.labels}>
          Last Name
        </label>
        <input
          type="text"
          name="lastname"
          value={editingUserData.lastname || ""}
          onChange={handleChange}
          className={formStyles.inputs}
        />

        <label htmlFor="username" className={formStyles.labels}>
          Username
        </label>
        <input
          type="text"
          name="username"
          value={editingUserData.username || ""}
          onChange={handleChange}
          className={formStyles.inputs}
        />

        <label htmlFor="contact" className={formStyles.labels}>
          Contact No.
        </label>
        <input
          type="text"
          name="contact"
          value={editingUserData.contact || ""}
          onChange={handleChange}
          className={formStyles.inputs}
        />

        <label htmlFor="email" className={formStyles.labels}>
          Email
        </label>
        <input
          type="text"
          name="email"
          value={editingUserData.email || ""}
          onChange={handleChange}
          className={formStyles.inputs}
        />

        <label htmlFor="isAdmin" className={formStyles.labels}>
          Is Admin
        </label>
        <input
          type="text"
          name="isAdmin"
          value={editingUserData.isAdmin}
          onChange={handleChange}
          className={formStyles.inputs}
        />
        <label htmlFor="bio" className={formStyles.labels}>
          Bio
        </label>
        <input
          type="text"
          name="bio"
          value={editingUserData.bio}
          onChange={handleChange}
          className={formStyles.inputs}
        />
        <button
          onClick={handleSubmit}
          className=" py-2 px-4 text-zinc-900 rounded-lg border border-gray-700 w-fit mx-auto mt-5"
          // type="submit"
        >
          <Link href="/admin/admin-users" className="w-full h-full px-3 py-2">
            Update
          </Link>
        </button>
      </form>
      <h1>{id}</h1>
    </div>
  );
}
