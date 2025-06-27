'use client';

import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "#", label: "Developer Tools" },
    { href: "#", label: "Downloads" },
    { href: "#", label: "Buy" },
    { href: "/about-us", label: "About" },
    { href: "#", label: "Help" },
  ];

  return (
    <div className="bg-[#8661C1]">
  

    <nav className=" text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img
                src="white logo.png"
                alt="ExtendEase Logo"
                className="h-8 w-auto"
              />
              <div className="hidden sm:flex flex-col font-semibold text-lg leading-tight">
                <span>Extend</span>
                <span>Ease</span>
              </div>
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
              key={link.label}
                href={link.href}
                className="hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            
          </div>

          {/* Right: Search + Auth */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center bg-white rounded-full px-3 py-2">
              <FaSearch className="text-gray-500 text-sm" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ml-2 bg-transparent focus:outline-none text-sm text-gray-800 placeholder:text-gray-500 w-32 lg:w-48"
                aria-label="Search"
                />
            </form>

            {/* Auth Links */}
            <Link 
              href="/login" 
              className="hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
              >
              Sign in
            </Link>
            <Link 
              href="/signup" 
              className="hover:text-gray-300 transition-colors duration-200"
              aria-label="Sign up"
              >
              <FaUserCircle className="text-2xl" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md hover:bg-purple-700 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-purple-700 rounded-lg mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-purple-600 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
                Free Visual Studio
              </button>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="px-3 py-2">
                <div className="flex items-center bg-white rounded-full px-3 py-2">
                  <FaSearch className="text-gray-500 text-sm" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="ml-2 bg-transparent focus:outline-none text-sm text-gray-800 placeholder:text-gray-500 flex-1"
                    aria-label="Search"
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
        </div>
  );
};

export default Navbar;
