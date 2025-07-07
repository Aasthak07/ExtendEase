'use client';

import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from './AuthContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout, isAuthenticated } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/browse-extensions", label: "All Extensions" },
    { href: "#", label: "Featured" },
    { href: "/about-us", label: "About" },
    { href: "/help", label: "Help" },
  ];

  return (
    <div className="w-3/4 ml-auto z-50">
      <nav className="bg-gradient-to-r from-black via-indigo-900 to-blue-900 text-white shadow-lg rounded-2xl bg-opacity-95">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            {/* Logo */}

            {/* Navigation Links (centered and grow) */}
            <div className="hidden md:flex flex-1 items-center justify-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-gray-300 transition-colors duration-200 text-xs font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Search + Auth (right) */}
            <div className="flex items-center space-x-3">
              {/* Search Icon */}
              <div className="relative group">
                <button
                  type="button"
                  className="text-white hover:text-gray-300 transition-colors duration-200 p-1"
                  aria-label="Search"
                >
                  <FaSearch className="text-lg" />
                </button>
                {/* Hover Search Input */}
                <div className="absolute right-0 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                  <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-2 min-w-[200px]">
                    <div className="flex items-center">
                      <FaSearch className="text-gray-500 text-sm mr-2" />
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent focus:outline-none text-sm text-gray-800 placeholder:text-gray-500 flex-1"
                        aria-label="Search"
                      />
                    </div>
                  </form>
                </div>
              </div>

              {/* Auth Links */}
              {isAuthenticated ? (
                <>
                  <span className="text-xs font-medium mr-2">{user?.email} ({user?.type})</span>
                  <button
                    onClick={logout}
                    className="hover:text-gray-300 transition-colors duration-200 text-xs font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="hover:text-gray-300 transition-colors duration-200 text-xs font-medium"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/signup"
                    className="hover:text-gray-300 transition-colors duration-200"
                    aria-label="Sign up"
                  >
                    <FaUserCircle className="text-lg" />
                  </Link>
                </>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-md hover:bg-indigo-300 transition-colors duration-200"
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
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-black via-indigo-900 to-blue-900 rounded-2xl mt-2 bg-opacity-95">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-indigo-300 transition-colors duration-200"
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
