"use client"
import { useAuth } from "@/app/store/auth";
import { useEffect, useState } from "react";

export default function UserDashboard({ params }) {
  const [dashboardData, setDashboardData] = useState();
  const [image, setImage] = useState();
  const { authenticatedToken } = useAuth();
  const id = params.dashboardId;
let img = dashboardData?"dashboardData.image":"";
  const handleChange = (e) => {
    setImage(e.target.files[0]); 
  };

  const handleSubmit =  async(e) => { 
    e.preventDefault();
    console.log(image);
    const data = new FormData()
    data.append("file",image)
    try {
      const response = await fetch(
        `http://localhost:8080/dashboard/profilepicture/6618f8cb17fd178da93ad16e`,
        {
          method: "PATCH",
          headers: {
            Authorization: authenticatedToken,
          },
          body:data
        }
      );
        const resData = await response.json()
        if(response.ok){
          console.log(resData.data);
        }
    } catch (error) {
      console.log("we got an error",error)
    }
  };

  const getDashboardData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/dashboard/${id}`, {
        method: "GET",
        headers: {
          Authorization: authenticatedToken,
        },
      });
      if (response.ok) {
        const resData = await response.json();
        setDashboardData(resData.data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("got an error", error);
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:items-start justify-around items-center h-screen w-screen bg-zinc-50">
      {/* Profile Picture Upload Section */}
      <div className="flex flex-col justify-center p-8 items-center">
        <h2 className="text-xl font-semibold mb-4">Upload Profile Picture</h2>
        <form action="" className=" flex flex-wrap gap-4">
          <input
            type="file"
            name="profilePicture"
            id="name"
            onChange={handleChange}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="py-2 px-3 bg-zinc-300 rounded-xl"
          >
            Upload
          </button>
        </form>
      </div>

      {/* User Information Section */}
      <div className="flex w-fit gap-10 flex-col justify-center items-start p-8 ">
        {dashboardData && (
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
                  <td>{dashboardData.firstname}</td>
                </tr>
                <tr>
                  <td style={{ paddingRight: "1rem" }}>Last Name:</td>
                  <td>{dashboardData.lastname}</td>
                </tr>
                <tr>
                  <td style={{ paddingRight: "1rem" }}>Username:</td>
                  <td>{dashboardData.username}</td>
                </tr>
                <tr>
                  <td style={{ paddingRight: "1rem" }}>Contact:</td>
                  <td>{dashboardData.contact}</td>
                </tr>
                <tr>
                  <td style={{ paddingRight: "1rem" }}>Email:</td>
                  <td>{dashboardData.email}</td>
                </tr>
                <tr>
                  <td style={{ paddingRight: "1rem" }}>Bio:</td>
                  <td>{dashboardData.bio}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {dashboardData && dashboardData.image && (
          <img
            src={`http://localhost:8080/Images/${dashboardData.image}`}
            alt="profile"
            className="h-28"
          />
        )}
      </div>
    </div>
  );
}
