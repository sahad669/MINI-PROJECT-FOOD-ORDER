import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.auth.userList);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      dispatch(loginUser(matchedUser));
      toast.success(
        matchedUser.role === "admin"
          ? "Admin login successful"
          : `Welcome, ${matchedUser.name}`
      );
      navigate(matchedUser.role === "admin" ? "/admin" : "/cart");
    } else {
      toast.error("You don't have an Account. Register Now");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-sm bg-black p-8 rounded-2xl shadow-lg border border-yellow-400">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
          Welcome Back 👋
        </h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded border border-yellow-500 bg-black text-yellow-300 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded border border-yellow-500 bg-black text-yellow-300 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-yellow-400 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-yellow-500 hover:underline font-semibold">
            Register
          </a>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;

