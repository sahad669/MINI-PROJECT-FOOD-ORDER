import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { Store } from "./app/Store.js"; 
import { BrowserRouter } from "react-router-dom";
import './App.css';

const presetAdmin = () => {
  const users = JSON.parse(localStorage.getItem("userList")) || [];

  const adminExists = users.find((user) => user.role === "admin");

  if (!adminExists) {
    const admin = {
      name: "Admin",
      email: "admin@tastybite.com",
      password: "admin@123",
      role: "admin",
    };
    const updatedUsers = [...users, admin];
    localStorage.setItem("userList", JSON.stringify(updatedUsers));
  }
};

presetAdmin();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

