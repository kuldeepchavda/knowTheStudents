"use  client";
import img from "./homeImg.png";
import Image from "next/image";
export default function Home() {
  const homeTextChild = "m-3 md:m-5";

  return (
    <>
      <div className=" w-screen h-screen flex justify-between flex-col text-black ">
        <div className=" flex w-11/12 mx-auto flex-col items-start content-center py-20  md:flex-row ">
          <div className="homeText w-5/6 flex flex-col items-start  content-start">
            <h1
              className={`${homeTextChild} text-2xl font-bold tracking-wide py-3 md:text-4xl`}
            >
              Welcome to <span className="underline">Interviewer-Student</span>{" "}
              Placement Platform.
            </h1>
            <p className={`${homeTextChild} text-xl md:text-2xl`}>
              Discover tailored profiles and resources for <br /> streamlined
              recruitment.
            </p>
            <p className={`${homeTextChild} text-xl md:text-2xl`}>
              Elevate your placement process.
            </p>
          </div>
          <div className="relative -z-10 w-full h-fit">
            <Image src={img} className="w-5/6 mx-auto" alt="searching" />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
