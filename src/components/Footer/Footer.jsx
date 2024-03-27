import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="  bottom-0  bg-gray-200 h-20 p-4 flex justify-center items-center top-auto absolute w-screen">
      <Link href="/">
        <h1 className="text-2xl text-gray-950">knowTheStudents.com</h1>
      </Link>
    </footer>
  );
}
