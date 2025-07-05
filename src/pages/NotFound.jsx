import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-yellow-300 flex flex-col items-center justify-center px-4">
      <div className="text-6xl mb-2">🍔🍟🥤</div>
      <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-yellow-400 mb-6">Page Not Found 🚫</p>
      <button
        onClick={() => navigate("/")}
        className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded text-lg font-semibold"
      >
        🏠 Go to Home
      </button>
    </div>
  );
};

export default NotFound;