import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/authSlice";
import { toggleTheme } from "../features/themeSlice";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth.currentUser);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartQuantity = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <nav className={`fixed top-0 w-full z-50 shadow-md ${darkMode ? "bg-gray-900" : "bg-black"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <h1
          className={`text-2xl sm:text-3xl font-extrabold tracking-wide ${
            darkMode ? "text-yellow-500" : "text-orange-600"
          }`}
        >
          TastyBite
        </h1>

        {/* Theme Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-yellow-400">☀️</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => dispatch(toggleTheme())}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-focus:ring-4 peer-focus:ring-yellow-500 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
          </label>
          <span className="text-xs text-yellow-400">🌙</span>
        </div>

        {/* Links */}
        <div
          className={`flex items-center gap-6 text-lg font-medium ${
            darkMode ? "text-yellow-500" : "text-orange-600"
          }`}
        >
          <Link to="/" className="hover:text-blue-500 transition duration-200">
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-blue-500 transition duration-200"
          >
            Menu
          </Link>

          {!user ? (
            <Link
              to="/login"
              className="hover:text-blue-500 transition duration-200"
            >
              Login
            </Link>
          ) : (
            <>
              <span className="text-yellow-400">
                Hi, <span className="font-semibold">{user?.name}</span>
              </span>
              <button
                onClick={() => {
                  dispatch(logoutUser());
                  navigate("/");
                }}
                className="text-red-500 hover:text-red-600 underline transition duration-200"
              >
                Logout
              </button>
            </>
          )}

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative flex items-center hover:text-blue-600 transition"
          >
            <FaCartArrowDown className="h-5 w-5" />
            {cartQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5 py-0.5 leading-none">
                {cartQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import { FaCartArrowDown, FaBars, FaTimes } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const cart = useSelector((state) => state.cart.item);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Brand */}
//         <Link
//           to="/"
//           className="text-2xl font-bold text-blue-600 dark:text-white tracking-wide"
//         >
//           FoodieCart
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-300">
//           <Link to="/" className="hover:text-blue-500 transition">Home</Link>
//           <Link to="/products" className="hover:text-blue-500 transition">Menu</Link>
//           <Link to="/login" className="hover:text-blue-500 transition">Login</Link>
//           <Link to="/cart" className="relative flex items-center hover:text-blue-600">
//             <FaCartArrowDown className="h-6 w-6" />
//             <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1.5">
//               {cart.length}
//             </span>
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700 dark:text-white text-2xl"
//           onClick={toggleMenu}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-4 text-gray-700 dark:text-gray-300">
//           <Link to="/" onClick={closeMenu} className="block hover:text-blue-500">Home</Link>
//           <Link to="/products" onClick={closeMenu} className="block hover:text-blue-500">Menu</Link>
//           <Link to="/login" onClick={closeMenu} className="block hover:text-blue-500">Login</Link>
//           <Link
//             to="/cart"
//             onClick={closeMenu}
//             className="relative flex items-center hover:text-blue-500"
//           >
//             <FaCartArrowDown className="h-5 w-5 mr-1" />
//             Cart
//             <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-1.5">
//               {cart.length}
//             </span>
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
