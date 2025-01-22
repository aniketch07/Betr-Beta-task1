'use client'

import React, { useState } from "react";
import addData from "@/firebase/firestore/addData";  // Import the addData function

const AddDataPage = () => {
  const [name, setName] = useState('');
  const [house, setHouse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data to be added
    const userData = {
      name: name,
      house: house,
    };

    // Call the addData function to add data to Firestore
    const { result, error } = await addData("users", name, userData);

    if (error) {
      console.error("Error adding data:", error);
    } else {
      console.log("Data added successfully:", result);
    }
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Add User Data</h1>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="name">
            <p>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              type="text"
              name="name"
              id="name"
              placeholder="Enter name"
            />
          </label>
          <label htmlFor="house">
            <p>House</p>
            <input
              onChange={(e) => setHouse(e.target.value)}
              value={house}
              required
              type="text"
              name="house"
              id="house"
              placeholder="Enter house"
            />
          </label>
          <button type="submit">Add Data</button>
        </form>
      </div>
    </div>
  );
};

export default AddDataPage;
