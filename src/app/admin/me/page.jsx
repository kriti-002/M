"use client";
import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Testing Team",
    email: "test3@gmail.com",
    mobile: "6988431291",
    role: "ADMIN",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("User details saved:", user);
    alert("Profile details updated successfully!");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Profile Details
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 border ${
                isEditing ? "border-gray-300" : "border-transparent"
              } rounded-md focus:outline-none focus:ring ${
                isEditing ? "focus:ring-blue-500" : ""
              }`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 border ${
                isEditing ? "border-gray-300" : "border-transparent"
              } rounded-md focus:outline-none focus:ring ${
                isEditing ? "focus:ring-blue-500" : ""
              }`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="mobile">
              Mobile
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={user.mobile}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 border ${
                isEditing ? "border-gray-300" : "border-transparent"
              } rounded-md focus:outline-none focus:ring ${
                isEditing ? "focus:ring-blue-500" : ""
              }`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="role">
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={user.role}
              disabled
              className="w-full px-4 py-2 border border-transparent bg-gray-200 rounded-md cursor-not-allowed"
            />
          </div>
          <div className="flex justify-end">
            {!isEditing ? (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Save
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
