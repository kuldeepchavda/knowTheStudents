import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="bg-gray-200 text h-20  bottoom-2 flex justify-center items-center top-auto  bottom-0 w-screen">
      <Link href="/">
        <h1 className="text-2xl tracking-wide font-sans text-gray-950">knowTheStudents.com</h1>
      </Link>
    </footer>
  );
}
