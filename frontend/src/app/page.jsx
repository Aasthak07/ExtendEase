'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaStar, FaDownload, FaCode, FaPalette, FaTools, FaUserCog } from 'react-icons/fa';

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Sample data for extensions
  const popularExtensions = [
    { name: "Prettier", author: "Prettier", rating: 4.8, downloads: "10M+", desc: "Code formatter" },
    { name: "ESLint", author: "Microsoft", rating: 4.7, downloads: "8M+", desc: "JavaScript linter" },
    { name: "Live Server", author: "Ritwick Dey", rating: 4.5, downloads: "7M+", desc: "Launch a local dev server" },
    { name: "GitLens", author: "GitKraken", rating: 4.6, downloads: "6M+", desc: "Git supercharged" },
  ];

  const categories = [
    { icon: <FaCode className="text-white text-xl" />, label: "Programming Languages" },
    { icon: <FaPalette className="text-white text-xl" />, label: "Themes" },
    { icon: <FaTools className="text-white text-xl" />, label: "Debuggers" },
    { icon: <FaUserCog className="text-white text-xl" />, label: "Productivity" },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInLetter {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          50% {
            opacity: 0.5;
            transform: translateY(10px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      <div className="font-sans bg-gradient-to-br from-gray-50 via-blue-50 to-white min-h-screen w-full flex flex-col items-center px-6 relative overflow-hidden">

        {/* Navbar fixed
        <div className="fixed top-0 left-0 w-full z-30">
          {require('../components/Navbar').default &&
            React.createElement(require('../components/Navbar').default)}
        </div> */}

        {/* Hero Section (Your existing content) */}
        <div className="relative z-10 w-full max-w-4xl mt-32 sm:mt-40 flex flex-col items-center text-center text-gray-800 space-y-8 transition-all duration-1000 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? 'translateY(0) scale(1)'
              : 'translateY(50px) scale(0.95)'
          }}
        >
          {/* Hero Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            {isVisible && (
              <>
                <div className="mb-2">
                  {'Discover,'.split('').map((letter, index) => (
                    <span
                      key={`white-${index}`}
                      className="inline-block"
                      style={{
                        animation: `fadeInLetter 0.4s ease-out ${index * 0.06}s forwards`,
                        opacity: 0,
                        textShadow: '0 2px 4px rgba(59, 130, 246, 0.3)',
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                  <span>&nbsp;</span>
                  {'Manage'.split('').map((letter, index) => (
                    <span
                      key={`white2-${index}`}
                      className="inline-block"
                      style={{
                        animation: `fadeInLetter 0.4s ease-out ${(index + 9) * 0.06}s forwards`,
                        opacity: 0,
                        textShadow: '0 2px 4px rgba(59, 130, 246, 0.3)',
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                  <span className="mx-1 inline-block"
                    style={{
                      animation: `fadeInLetter 0.4s ease-out 0.9s forwards`,
                      opacity: 0
                    }}
                  >
                    
                  </span>
                  {'&'.split('').map((letter, index) => (
                    <span
                      key={`blue-${index}`}
                      className="inline-block text-blue-600"
                      style={{
                        animation: `fadeInLetter 0.4s ease-out ${(index + 16) * 0.06}s forwards`,
                        opacity: 0,
                        textShadow: '0 2px 8px rgba(37, 99, 235, 0.4)',
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                  <span>&nbsp;</span>
                  {'Publish'.split('').map((letter, index) => (
                    <span
                      key={`blue2-${index}`}
                      className="inline-block text-blue-600"
                      style={{
                        animation: `fadeInLetter 0.4s ease-out ${(index + 18) * 0.06}s forwards`,
                        opacity: 0,
                        textShadow: '0 2px 8px rgba(37, 99, 235, 0.4)',
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                  
                 
                    
                    
                    
        
                </div>

                <div>
                  <span className="text-blue-600">
                    {'VS'.split('').map((letter, index) => (
                      <span
                        key={`vs-${index}`}
                        className="inline-block"
                        style={{
                          animation: `fadeInLetter 0.4s ease-out ${(index + 35) * 0.06}s forwards`,
                          opacity: 0,
                          textShadow: '0 2px 8px rgba(37, 99, 235, 0.4)',
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                    <span
                      className="inline-block"
                      style={{
                        animation: `fadeInLetter 0.4s ease-out ${(37) * 0.06}s forwards`,
                        opacity: 0
                      }}
                    >
                      &nbsp;
                    </span>
                    {'Code'.split('').map((letter, index) => (
                      <span
                        key={`code-${index}`}
                        className="inline-block"
                        style={{
                          animation: `fadeInLetter 0.4s ease-out ${(index + 38) * 0.06}s forwards`,
                          opacity: 0,
                          textShadow: '0 2px 8px rgba(37, 99, 235, 0.4)',
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                    <span
                      className="inline-block"
                      style={{
                        animation: `fadeInLetter 0.4s ease-out ${(42) * 0.06}s forwards`,
                        opacity: 0
                      }}
                    >
                      &nbsp;
                    </span>
                    {'Extensions'.split('').map((letter, index) => (
                      <span
                        key={`ext-${index}`}
                        className="inline-block"
                        style={{
                          animation: `fadeInLetter 0.4s ease-out ${(index + 43) * 0.06}s forwards`,
                          opacity: 0,
                          textShadow: '0 2px 8px rgba(37, 99, 235, 0.4)',
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                </div>
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed px-4 sm:px-0">
            ExtendEase is your go-to platform for finding, reviewing, and managing the best Visual Studio Code extensions to enhance your development workflow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
            <Link
              href="/browse-extensions"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-400/50 hover:scale-105"
            >
              Browse Extensions
            </Link>
            <Link
              href="/user/request-extension"
              className="px-6 py-3 border-2 border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-400/50"
            >
              Add Extension
            </Link>
          </div>
        </div>

        {/* Additional Marketplace Sections Below */}
        <div className="w-full max-w-6xl mt-40 mb-32 px-4 space-y-20">


          {/* Categories Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
              Popular Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-white/80 hover:bg-blue-50 backdrop-blur-sm border border-gray-200 hover:border-blue-300 rounded-lg p-5 flex items-center gap-3 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                >
                  <div className="p-2 bg-blue-600 rounded-lg">
                    {React.cloneElement(category.icon, { className: "text-white text-xl" })}
                  </div>
                  <span className="font-medium text-gray-700">{category.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Extensions Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
              Trending Extensions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularExtensions.map((ext, index) => (
                <div 
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-5 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 hover:border-blue-300"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{ext.name}</h3>
                  <p className="text-sm text-blue-600 mb-3">{ext.author}</p>
                  <p className="text-gray-600 text-sm mb-4">{ext.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-yellow-500">
                      <FaStar className="text-sm" />
                      <span className="ml-1 text-sm text-gray-700">{ext.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <FaDownload className="text-sm mr-1" />
                      {ext.downloads}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Ready to Enhance Your Workflow?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of developers who have supercharged their VS Code experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/browse-extensions"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-400/50"
              >
                Browse All Extensions
              </Link>
              <Link
                href="/publisher-registration"
                className="px-6 py-3 border border-indigo-400 text-indigo-200 hover:bg-indigo-600 hover:text-white font-semibold rounded-full transition-all duration-300 shadow hover:shadow-indigo-400/50"
              >
                Create Publisher Account
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}