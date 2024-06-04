"use client"
import { useEffect, useState } from "react";
import { useAuth } from "@/app/store/auth";

export default function UserProfile({ params }) {
  const { authenticatedToken } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const id = params.profileid;

  const getDataById = async () => {
    try {
      const response = await fetch(`http://localhost:8080/explore/${id}`, {
        method: "GET",
        headers: {
          Authorization: authenticatedToken,
        },
      });
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
    <div className="flex flex-col md:flex-row   justify-around items-start pt-10 h-screen w-screen bg-zinc-50">
      {profileData && (
        <div className="md:col-span-1 ">
          <img
            src={`http://localhost:8080/Images/${profileData.image}`}
            alt="profile"
            className="h-64 rounded-full"
          />
        </div>
      )}
      <div className="md:col-span-2  ">
        {profileData && (
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-4">User Information</h1>
            <table>
              <tbody>
                <tr>
                  <td style={{ paddingRight: "1rem" }}>ID:</td>
                  <td>{id}</td>
                </tr>
                <tr>
                  <td style={{ paddingRight: "1rem" }}>First Name:</td>
                  <td>{profileData.firstname}</td>
                </tr>
                <tr>
                  <td style={{ paddingRight: "1rem" }}>Last Name:</td>
                  <td>{profileData.lastname}</td>
                </tr>
                <tr>
                  <td style={{ paddingRight: "1rem" }}>Username:</td>
                  <td>{profileData.username}</td>
                </tr>
                <tr>
                  <td style={{ paddingRight: "1rem" }}>Contact:</td>
                  <td>{profileData.contact}</td>
                </tr>
                <tr>
                  <td style={{ paddingRight: "1rem" }}>Email:</td>
                  <td>{profileData.email}</td>
                </tr>
                <tr>
                  <td style={{ paddingRight: "1rem" }}>Bio:</td>
                  <td>{profileData.bio}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
