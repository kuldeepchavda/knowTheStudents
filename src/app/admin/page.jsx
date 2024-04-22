"use client";
import Link from "next/link";
import { useAuth } from "../store/auth";
export default function AdminHandler() {
  const { users, contacts } = useAuth();

  return (
    <>
      <div className="h-screen">
        <nav className="text-lg text-black  left-0  w-60   h-5/6 border-r">
          <ul className=" flex flex-col items-start content-center w-full  pt-6">
            <li className="flex items-center mb-5 justify-center align-text-bottom h-8 w-full  hover:bg-slate-100">
              <Link
                href="/admin/admin-users"
                className="  w-full h-full flex justify-center items-center "
              >
                users ({users.length})
              </Link>
            </li>
            <li className="flex items-center mb-5 justify-center h-10 w-full hover:bg-slate-100">
              <Link
                href="/admin/admincontacts"
                className=" w-full h-full flex justify-center items-center "
              >
                contacts ({contacts.length})
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </>
  );
}

//      <div className="w-screen h-screen bg-slate-100"></div>

//  <ul>
//    <li>
//    </li>
//    <li>
//    </li>
//  </ul>;
