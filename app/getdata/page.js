'use client';

import React, { useState, useEffect } from "react";
import getAllData from "@/firebase/firestore/getData"; // Import the function to fetch all users

const AllUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all user data when the component mounts
    const fetchUsers = async () => {
      const { users, error } = await getAllData();

      if (error) {
        setError(error);
        console.error("Error fetching data:", error);
      } else {
        setUsers(users);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-6 text-green-400">All Users</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {users.length > 0 ? (
          <ul className="divide-y divide-gray-700">
            {users.map((user) => (
              <li key={user.id} className="py-4">
                <h3 className="text-2xl font-semibold text-green-200">{user.name}</h3>
                <p className="text-lg text-gray-400">House: {user.house}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-lg">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default AllUsersPage;

//get a sinle user data 

// 'use client';

// import React, { useState, useEffect } from 'react';
// import getData from '@/firebase/firestore/getData';

// export default function GetDataPage() {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);

//     // Example: Use the collection name 'users' and document id 'user-id'
//     const collection = 'users';
//     const documentId = 'aniket'; // Replace with the actual document ID you want to fetch

//     useEffect(() => {
//         const fetchData = async () => {
//             const { result, error } = await getData(collection, documentId);
//             if (error) {
//                 setError(error);
//                 console.log('Error fetching data:', error);
//             } else {
//                 if (result.exists()) {
//                     setData(result.data()); // Access the document data
//                 } else {
//                     setError('No such document!');
//                 }
//             }
//         };

//         fetchData();
//     }, [collection, documentId]);

//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
//             <div className="max-w-2xl w-full bg-gray-800 rounded-lg shadow-lg p-6">
//                 <h1 className="text-4xl font-bold text-center mb-6 text-green-400">Get Data from Firestore</h1>
//                 {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//                 {data ? (
//                     <div className="bg-gray-700 p-4 rounded-lg">
//                         <h2 className="text-2xl font-semibold mb-4 text-green-200">User Data:</h2>
//                         <pre className="bg-gray-800 p-4 rounded-lg overflow-auto">
//                             {JSON.stringify(data, null, 2)}
//                         </pre>
//                     </div>
//                 ) : (
//                     <p className="text-center text-lg">Loading data...</p>
//                 )}
//             </div>
//         </div>
//     );
// }