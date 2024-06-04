"use client";
import { useEffect, useState } from "react";
export default function Demo() {
  const [data, setData] = useState();

  async function getData() {
    try {
      const response = await fetch(`http://localhost:8080/basic`, {
        method: "GET",
      });

      if (response.ok) {
        // console.log("ok response");
        const resData = await response.json();
        setData(resData.data);
      } else {
        // console.log("response not ok");
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <ul>
        {data && data.map((curEle, id) => <li key={id}>{curEle.name}</li>)}
      </ul>
    </>
  );
}
