'use client'

import React from "react";
import Link from 'next/link';

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to the Home Page</h1>
      <p className="text-lg text-center mb-4">This is the home page content.</p>

      <div className="text-center">
        <Link href="/signup" className="text-blue-500 hover:text-blue-700">Sign Up</Link> | 
        <Link href="/signin" className="text-blue-500 hover:text-blue-700">Sign In</Link> | 
        <Link href="/adddatapage" className="text-blue-500 hover:text-blue-700">Add Data</Link>|
        <Link href="/getdata" className="text-blue-500 hover:text-blue-700">Get Data</Link> {/* Add this link */}
      </div>
    </div>
  );
}
