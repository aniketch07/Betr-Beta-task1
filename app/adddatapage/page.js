'use client'

import React, { useState } from "react";
import addData from "@/firebase/firestore/addData";

const AddDataPage = () => {
  const [name, setName] = useState('');
  const [house, setHouse] = useState('');
  const [alert, setAlert] = useState({ message: '', type: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      name: name,
      house: house,
    };

    const { result, error } = await addData("users", name, userData);

    if (error) {
      setAlert({ message: "Error adding data: " + error, type: 'error' });
    } else {
      setAlert({ message: "Data added successfully!", type: 'success' });
      setName('');
      setHouse('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="max-w-lg w-full bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-400">Add User Data</h1>
        {alert.message && (
          <div className={`mb-4 p-4 rounded-lg ${alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
            {alert.message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-1">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              type="text"
              name="name"
              id="name"
              placeholder="Enter name"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label htmlFor="house" className="block text-lg font-medium mb-1">House</label>
            <input
              onChange={(e) => setHouse(e.target.value)}
              value={house}
              required
              type="text"
              name="house"
              id="house"
              placeholder="Enter house"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Add Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDataPage;