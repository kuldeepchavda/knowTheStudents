"use client"
import React,{useState , useEffect} from 'react'
import { useAuth } from '../store/auth';
export default function reachus() {
   const defaultContactFormData = {
     email: "",
     message: "",
   };
   const [contact, setContact] = useState(defaultContactFormData);

   function handleChange(e) {
     let name = e.target.name;
     let value = e.target.value;

     setContact({
       ...contact,
       [name]: value,
     });
   }
   const [userData, setUserData] = useState(true);
   const { user,authenticatedToken } = useAuth();
   if (userData && user) {
     setContact({
       email: user.email,
       message: "",
     });
     setUserData(false);
   }
  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    const response = await fetch(`http://localhost:8080/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authenticatedToken,
      },
      body: JSON.stringify(contact),
    });
    if(response.ok){
      alert("message sent successfully")
    }
    } catch (error) {
    alert("failed")
  }
      };

  return (
    <div className="max-w-md mx-auto p-6  my-16 bg-gray-100 shadow-md rounded-md">
      <h2 className="text-2xl mx-auto relative text-gray-900 font-semibold mb-6">
       Reach Us
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block  text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
          onChange={handleChange}
            type="email"
            id="email"
            name="email"
            value={contact.email}
            required
            className="mt-1 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-slate-200 outline-none h-8 border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={contact.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm bg-slate-200 outline-none sm:text-sm border-gray-300 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
