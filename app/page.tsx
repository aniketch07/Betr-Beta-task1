// 'use client'

// import React from "react";
// import Link from 'next/link';

// export default function Page() {
//   return (
//     <div className="p-4">
//       <h1 className="text-4xl font-bold text-center mb-4">Welcome to the Home Page</h1>
//       <p className="text-lg text-center mb-4">This is the home page content.</p>

//       <div className="text-center">
//         <Link href="/signup" className="text-blue-500 hover:text-blue-700">Sign Up</Link> | 
//         <Link href="/signin" className="text-blue-500 hover:text-blue-700">Sign In</Link> | 
//         <Link href="/adddatapage" className="text-blue-500 hover:text-blue-700">Add Data</Link>|
//         <Link href="/getdata" className="text-blue-500 hover:text-blue-700">Get Data</Link> {/* Add this link */}
//       </div>
//     </div>
//   );
// }

'use client'

import React from "react";
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold mb-6 text-center">Welcome to the Home Page</h1>
      <p className="text-xl text-gray-300 mb-8 text-center">Discover the power of simplicity with our features.</p>

      <div className="flex flex-wrap justify-center gap-6">
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
