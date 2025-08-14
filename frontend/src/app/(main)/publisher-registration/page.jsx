'use client';
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function PublisherSignup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/publisher/register', form);
      toast.success('Registration submitted! Await admin approval.');
      setForm({ name: '', email: '', password: '' });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 animate-gradient-bg opacity-90"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      {/* Form Container */}
      <div className="relative max-w-md w-full bg-white/95 rounded-2xl shadow-2xl p-8 transform hover:shadow-3xl transition-all duration-500">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Publisher Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
            <input
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Register
          </button>
        </form>
        <p className="mt six text-center text-sm text-gray-500">
          Already have an account?{' '}
          <a href="/admin-login" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
            Log in here
          </a>
        </p>
      </div>

      {/* Custom CSS for Animated Background */}
      <style jsx>{`
        @keyframes gradient-bg {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-bg {
          background-size: 200% 200%;
          animation: gradient-bg 15s ease infinite;
        }
      `}</style>
    </div>
  );
}