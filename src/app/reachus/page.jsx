"use client"
import React,{useState , useEffect} from 'react'

export default function reachus() {
  const [formData, setFormData] = useState({
    email:"",
    message: "",
  });
  useEffect(() => {
    const localData = localStorage.getItem("userdata"); //
    if (localData) {
      //
      const parsedData = JSON.parse(localData); //
      setFormData({
        ...formData,
        email:parsedData.email,

      }); //
    } //
  }, []); // Empty dependency array ensures the effect runs only once after mount


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // You can add your logic to submit the form data to your backend or API
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded-md">
      <h2 className="text-2xl mt-20 relative text-gray-900 font-semibold mb-6">
        Contact Us
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
            type="email"
            id="email"
            name="email"
            value={formData.email}
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
            value={formData.message}
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
