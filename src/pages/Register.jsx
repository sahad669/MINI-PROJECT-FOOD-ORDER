import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.auth.userList);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const userExists = userList.find(
      (user) => user.email === formData.email
    );

    if (userExists) {
      toast.error("User already exists with this email.");
      return;
    }

    const newUser = {
      ...formData,
      role: "user",
    };

    dispatch(registerUser(newUser));
    toast.success("Account created successfully!");
    setTimeout(() => {
      navigate("/cart");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-sm bg-black p-8 rounded-2xl shadow-lg border border-yellow-400">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
          Create Account 🍽️
        </h2>
        <form className="space-y-4" onSubmit={handleRegister}>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-4 py-2 border border-yellow-500 rounded-lg bg-black text-yellow-300 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2 border border-yellow-500 rounded-lg bg-black text-yellow-300 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-yellow-500 rounded-lg bg-black text-yellow-300 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center text-yellow-400 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-500 hover:underline font-semibold">
            Login
          </a>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
