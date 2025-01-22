'use client';
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (!user) router.push("/");
  }, [user]);

  if (!user) return null; // Prevent rendering before redirect

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="max-w-3xl w-full p-6 bg-gray-800 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Admin Page</h1>
        <p className="text-lg text-gray-300 mb-6">
          Hello <span className="font-semibold text-green-400">{user?.email}</span>, you have successfully logged in to the admin panel. Here you can manage the application and view insights.
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
