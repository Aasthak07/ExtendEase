// src/app/page.jsx
import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 text-center">
        <img
          src="/Final remove.png"
          alt="ExtendEase Logo"
          className="h-20 w-20 mx-auto mb-4"
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Discover, Manage & Publish <span className="text-indigo-600">VS Code Extensions</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          ExtendEase is your go-to platform for finding, reviewing, and managing the best Visual Studio Code extensions for your workflow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/browse-extensions" className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">Browse Extensions</Link>
          <Link href="/admin/BrowseExtension" className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">🚀 Browser Extension Guide</Link>
          <Link href="/add-extension" className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition">For Publishers</Link>
        </div>
      </section>

      {/* What is ExtendEase Section */}
      <section className="w-full bg-white flex flex-col items-center justify-center px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">What is ExtendEase?</h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-6 text-center">
          ExtendEase bridges the gap between extension publishers and developers by providing a dedicated, community-driven marketplace for VS Code extensions. Discover curated tools, share your own, and join a thriving ecosystem.
        </p>
        <Link href="/about-us" className="text-indigo-600 font-semibold hover:underline flex items-center">
          Learn more <span className="ml-2">→</span>
        </Link>
      </section>

      {/* Quick Links to Core Features */}
      <section className="w-full bg-indigo-50 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <Link href="/browse-extensions" className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-2">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Search</h3>
            <p className="text-gray-600">Find extensions by category, tech, or keyword.</p>
          </Link>
          <Link href="/browse-by-category" className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-2">📂</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Categories</h3>
            <p className="text-gray-600">Browse by domain: Web, AI/ML, UI/UX, and more.</p>
          </Link>
          <Link href="/admin/BrowseExtension" className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Browser Extension Guide</h3>
            <p className="text-gray-600">Learn to create and deploy browser extensions.</p>
          </Link>
          <Link href="/add-extension" className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-2">👤</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">For Publishers</h3>
            <p className="text-gray-600">Upload, manage, and track your extensions.</p>
          </Link>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl mb-2">💻</div>
            <h4 className="text-lg font-bold text-indigo-600 mb-1">Developers/Users</h4>
            <p className="text-gray-700">Browse, search, and review extensions.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🚀</div>
            <h4 className="text-lg font-bold text-indigo-600 mb-1">Publishers</h4>
            <p className="text-gray-700">Upload, manage, and track your extensions.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🛡️</div>
            <h4 className="text-lg font-bold text-indigo-600 mb-1">Admins</h4>
            <p className="text-gray-700">Moderate the marketplace and oversee activity.</p>
          </div>
        </div>
      </section>
    </div>
  );
}