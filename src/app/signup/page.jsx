import React from "react";
// import img from "./signup.webp";
import Footer from "@/components/Footer/Footer";
export default function aboutus() {

  const inputStyles =
    "w-full border-b border-black mx-auto p-2 outline-none bg-transparent  text-black  font-xl  border-slate-700 ";
  return (
    <>
      <div className="my-10 p-2">
        <div className=" flex flex-col w-3/4 mx-auto rounded-lg p-4 items-center content-center bg-slate-300">
          <h1 className=" inline-block text-2xl font-bold text-black">
            Sign Up
          </h1>
          <form action="" className="w-11/12 mx-auto flex flex-col">
            <input className={inputStyles} type="text" placeholder="Name" />
            <input
              className={inputStyles}
              type="email"
              placeholder="Email Address"
            />
            <input
              className={inputStyles}
              type="number"
              placeholder="Contact No."
            />
            <input
              className={inputStyles}
              type="text"
              placeholder="College Name"
            />
            <input className={inputStyles} type="text" placeholder="Branch Name" />
            <textarea
              className={inputStyles}
              name=""
              id=""
              cols="20"
              rows="2"
              placeholder="Matter of interest"
            />
            <textarea
              className={inputStyles}
              name=""
              id=""
              cols="20"
              rows="2"
              placeholder="Describe"
            />
            <button className="px-2 py-1 rounded-md text-black font-bold mt-2 w-1/3 mx-auto border border-black" type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}


{
  /* <div>
   <Image src={img} width={300} height={300} alt="img" />
 </div> */
}
