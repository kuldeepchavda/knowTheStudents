"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/store/auth";
export default function userProfile({ params }) {
const {authenticatedToken} = useAuth()
  const [profileData, setProfileData] = useState("");
  const id = params.profileid
  const getDataById = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/explore/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: authenticatedToken,
          },
        }
      );
      if (response.ok) {
        const resData = await response.json();
        setProfileData(resData.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    getDataById();
  }, []);
  return (
    <>
      <h1>{profileData.username}</h1>
      <h1>{profileData.lastname}</h1>
      <h1>{profileData.username}</h1>
      <h1>{profileData.contact}</h1>
      <h1>{profileData.email}</h1>
      <h1>{profileData.isAdmin}</h1>
      <h1>{profileData.bio}</h1>
    </>
  );
}