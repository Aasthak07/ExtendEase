// // Navbar.jsx
// import React from "react";
// import Link from "next/link";
// import { FaSearch, FaUserCircle } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="bg-purple-600 text-white flex items-center justify-between px-6 py-4">
//       {/* Left: Logo and Visual Studio */}
//       <div className="flex items-center space-x-4">
//         <Link href="/" className="flex items-center space-x-4">
//           <img
//             src="ExtendEaseLogo.png "
//             alt=" Logo"
//             className="h-6 w- auto" />
//           <span className="font-semibold text-lg">ExtendEase</span>
//         </Link>
//       </div>

//       {/* Center: Links */}
//       <div className="flex items-center space-x-6">
//         <a href="#" className="hover:text-gray-300 transition-colors duration-200">Developer Tools</a>
//         <a href="#" className="hover:text-gray-300 transition-colors duration-200">Downloads</a>
//         <a href="#" className="hover:text-gray-300 transition-colors duration-200">Buy</a>
//         <a href="#" className="hover:text-gray-300 transition-colors duration-200">About</a>
//         <a href="#" className="hover:text-gray-300 transition-colors duration-200">Help</a>
//         <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded transition-colors duration-200">
//           Free Visual Studio
//         </button>
//       </div>

//       {/* Right: Search, Sign in, and User */}
//       <div className="flex items-center space-x-4">
//         <a href="#" className="hover:text-gray-300 transition-colors duration-200">All Microsoft</a>
//         <FaSearch className="cursor-pointer hover:text-gray-300 transition-colors duration-200" />
//         <Link href="/login" className="hover:text-gray-300 transition-colors duration-200">
//           Sign in
//         </Link>
//         <Link href="/signup" className="hover:text-gray-300 transition-colors duration-200">
//           <FaUserCircle className="text-2xl hover:text-gray-300 transition-colors duration-200" />
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// Navbar.jsx
import React from "react";
import Link from "next/link";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-purple-600 text-white flex items-center justify-between px-6 py-4">
      {/* Left: Logo */}
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="./ExtendEase logo.png"
            alt="Logo"
            className="h-25 w-auto"
          />
          {/* <span className="font-semibold text-lg">ExtendEase</span> */}
        </Link>
      </div>

      {/* Center: Links */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="hover:text-gray-300">Developer Tools</a>
        <a href="#" className="hover:text-gray-300">Downloads</a>
        <a href="#" className="hover:text-gray-300">Buy</a>
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Help</a>
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded">
          Free Visual Studio
        </button>
      </div>

      {/* Right: Search + Auth */}
      <div className="flex items-center space-x-4">
        {/* <a href="#" className="hover:text-gray-300">All Microsoft</a> */}

        {/* 🔍 Search Bar */}
        <div className="hidden md:flex items-center bg-white rounded-full px-3 py-1">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 bg-transparent focus:outline-none text-sm text-gray-800 placeholder:text-gray-500"
          />
        </div>

        <Link href="/login" className="hover:text-gray-300">Sign in</Link>
        <Link href="/signup" className="hover:text-gray-300">
          <FaUserCircle className="text-2xl" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
