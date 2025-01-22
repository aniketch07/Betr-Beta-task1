// 'use client';

// import React, { useState, useEffect } from "react";
// import getAllData from "@/firebase/firestore/getData"; // Import the function to fetch all users

// const AllUsersPage = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch all user data when the component mounts
//     const fetchUsers = async () => {
//       const { users, error } = await getAllData();

//       if (error) {
//         setError(error);
//         console.error("Error fetching data:", error);
//       } else {
//         setUsers(users);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-4xl font-bold text-center mb-4">All Users</h1>
//       {error && <p className="text-red-500">{error}</p>}
//       {users.length > 0 ? (
//         <ul>
//           {users.map((user) => (
//             <li key={user.id} className="border-b py-2">
//               <h3>{user.name}</h3>
//               <p>House: {user.house}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No users found.</p>
//       )}
//     </div>
//   );
// };

// export default AllUsersPage;

//get a sinle user data 

'use client';

import React, { useState, useEffect } from 'react';
import getData from '@/firebase/firestore/getData';

export default function GetDataPage() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // Example: Use the collection name 'users' and document id 'user-id'
    const collection = 'users';
    const documentId = 'aniket'; // Replace with the actual document ID you want to fetch

    useEffect(() => {
        const fetchData = async () => {
            const { result, error } = await getData(collection, documentId);
            if (error) {
                setError(error);
                console.log('Error fetching data:', error);
            } else {
                if (result.exists()) {
                    setData(result.data()); // Access the document data
                } else {
                    setError('No such document!');
                }
            }
        };

        fetchData();
    }, [collection, documentId]);

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold text-center mb-4">Get Data from Firestore</h1>
            {error && <p className="text-red-500">{error}</p>}
            {data ? (
                <div>
                    <h2 className="text-2xl font-semibold">User Data:</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}
