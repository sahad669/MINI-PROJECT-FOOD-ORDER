import React from "react";
import { Link } from "react-router-dom";

const NotAuthorized = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-6">
      <div className="flex flex-col items-center">
        {/* Cartoon Characters (replace with real images if needed) */}
        <div className="text-6xl mb-2">🍔🍟🥤</div>
        <h1 className="text-2xl font-bold text-red-600 mb-1">Oops!</h1>
        <h2 className="text-2xl font-bold text-red-700 mb-4">Not Authorized</h2>
        <p className="text-gray-600 max-w-md text-center mb-6">
          Sorry, you do not have permission to access this page. Please log in with the correct credentials or go back to the home page.
        </p>

        <Link
          to="/"
          className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-200"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotAuthorized;
