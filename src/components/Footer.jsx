import React from "react";
import {FaGithub, FaLinkedinIn,FaInstagram,} from "react-icons/fa";
import { useSelector } from "react-redux";
const Footer = () => {
   const { darkMode } = useSelector((state) => state.theme);
  return (
    <footer className={`bg-black  ${darkMode ? "text-yellow-500" :"text-orange-600"} py-6 mt-10`}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Tastybite. All rights reserved.
        </p>

        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/sahad669/branch.git"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sahadpottachiramajeed93"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/sahad8834?igsh=ZWxvNnQxYjJpbGtr"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500"
            title="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




// {
//   "$schema": "https://openapi.vercel.sh/vercel.json",
//   "rewrites": [
//     {
//       "source": "/(.*)",
//       "destination": "/index.html"
//     }
//   ]
// }