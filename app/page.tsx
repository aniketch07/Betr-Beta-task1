'use client'

import React from "react";
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold mb-6 text-center">Welcome to the Home Page</h1>
      <p className="text-xl text-gray-300 mb-8 text-center">Betr Beta task1----Aniket Chaudhary</p>
      <div className="flex flex-wrap justify-center gap-6">
        <Link href="https://www.linkedin.com/in/aniket-chaudhary-a8b261264/" className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-800 transition">
          LinkedIn
        </Link>
        <Link href="https://github.com/aniketch07" className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-800 transition">
          GitHub
        </Link>
      </div><br />
      <p className="text-xl text-gray-300 mb-8 text-center">Task : create full stack app with nextjs13 and firebase</p>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <Link href="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
          Sign Up
        </Link>
        <Link href="/signin" className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition">
          Sign In
        </Link>
        <Link href="/adddatapage" className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition">
          Add Data
        </Link>
        <Link href="/getdata" className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-600 transition">
          Get Data
        </Link>
      </div>

      
    </div>
  );
}