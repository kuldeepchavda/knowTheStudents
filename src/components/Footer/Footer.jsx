import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="bg-gray-200 absolute text h-20  top-auto flex justify-center items-center  w-screen">
      <Link href="/">
        <h1 className="text-2xl tracking-wide font-sans text-gray-950">knowTheStudents.com</h1>
      </Link>
    </footer>
  );
}
