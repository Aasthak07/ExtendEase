// src/app/page.jsx
import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="font-sans">
      <h1>IDE</h1>

      {/* Hero Section */}
      {/* <section className="relative w-full h-[60vh] flex items-center justify-center bg-gray-900"> */}
        {/* Background Image */}
        {/* <img
          src="/work-environment.jpg"
          alt="Work Environment"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        /> */}
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-10" /> */}
        {/* Content */}
        {/* <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-lg">
            Extend Visual Studio IDE
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto drop-shadow">
            Create the perfect tool for you and your team by using and building extensions. Over 700,000 are downloaded per month.
          </p>
          <Link
            href="#"
            className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded shadow hover:bg-gray-200 transition"
          >
            Marketplace
          </Link>
        </div>
      </section> */}

      {/* What are extensions Section */}
      {/* <section className="w-full bg-white flex flex-col md:flex-row items-center justify-between px-8 py-20">
        <div className="flex-shrink-0 mb-10 md:mb-0 md:mr-12"> */}
          {/* Simple purple illustration SVG */}
          {/* <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="40" width="80" height="60" rx="12" fill="#a78bfa" fillOpacity="0.3" />
            <rect x="60" y="20" width="80" height="60" rx="12" fill="#a78bfa" fillOpacity="0.5" />
            <rect x="110" y="60" width="80" height="60" rx="12" fill="#a78bfa" fillOpacity="0.7" />
            <circle cx="80" cy="80" r="24" fill="#a78bfa" fillOpacity="0.7" />
            <rect x="120" y="90" width="40" height="16" rx="8" fill="#a78bfa" fillOpacity="0.9" />
          </svg>
        </div>
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">What are extensions?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Extensions are add-ons that allow you to customize and enhance your experience in Visual Studio by adding new features or integrating existing tools. An extension can range in all levels of complexity, but its main purpose is to increase your productivity and cater to your workflow.
          </p>
          <Link href="#" className="text-purple-600 font-semibold hover:underline flex items-center">
            Learn more <span className="ml-2">→</span>
          </Link>
        </div>
      </section> */}
    </div>
  );
}