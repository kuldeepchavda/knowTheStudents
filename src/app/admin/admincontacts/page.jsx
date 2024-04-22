"use client";
import { useAuth } from "@/app/store/auth";
import { useEffect, useState } from "react";

export default function AdminContactData() {
  const { contacts } = useAuth();


  const tableStyles = {
    headTd: "px-4 py-2 text-gray-950 border border-gray-900",
    tbodyTd: "border px-2 py-2 text-gray-600 border-gray-900",
  };

  return (
    <div className="overflow-x-auto">
      <table className="bg-gray-300 text-slate-900 mx-auto my-4">
        <thead>
          <tr>
            <th className={tableStyles.headTd}>Sr. No</th>
            <th className={tableStyles.headTd}>Id</th>
            <th className={tableStyles.headTd}>Email</th>
            <th className={tableStyles.headTd}>Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((curEle, index) => (
            <tr key={index} className="bg-gray-50 hover:bg-gray-200">
              <td className={tableStyles.tbodyTd}>{index + 1}</td>
              <td className={tableStyles.tbodyTd}>{curEle._id}</td>
              <td className={tableStyles.tbodyTd}>{curEle.email}</td>
              <td className={tableStyles.tbodyTd}>{curEle.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
