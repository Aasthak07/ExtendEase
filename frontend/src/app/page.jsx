// src/app/page.jsx
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Threads from '../components/Threads';

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
      <div className="font-sans bg-gradient-to-br from-black via-indigo-900 to-blue-900 min-h-screen w-full flex items-start justify-start relative overflow-hidden">

      {/* Navbar always visible at the top */}
      <div className="fixed top-0 left-0 w-full z-30">
        {/* Import and use your Navbar component here. Adjust the import if needed. */}
        {require('../components/Navbar').default && React.createElement(require('../components/Navbar').default)}
      </div>
      {/* Animated Background (Threads) */}
      <div className="absolute inset-0 z-0">   
        <Threads
          color={[0.388, 0.408, 0.945]}
          amplitude={1.2}
          distance={0.1}
          enableMouseInteraction={true}
        />
      </div>

      {/* Left-aligned Content */}
      <div className="relative z-10 flex flex-col items-start text-left px-6 py-12 w-full max-w-2xl mx-0 mt-24">
        <h1 
          className="text-3xl sm:text-4xl font-extrabold text-white mb-4 drop-shadow-lg transition-all duration-1000 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible 
              ? 'translateY(0) translateX(0) scale(1)' 
              : 'translateY(50px) translateX(-30px) scale(0.8)',
            transition: 'all 1s ease-out'
          }}
        >
          {isVisible && (
            <>
              {/* First line: Discover, Manage & Publish */}
              <div className="block">
                {'Discover,'.split('').map((letter, index) => (
                  <span
                    key={`white-${index}`}
                    className="inline-block"
                    style={{
                      animation: `fadeInLetter 0.4s ease-out ${index * 0.06}s forwards`,
                      opacity: 0,
                      textShadow: letter === ' ' ? 'none' : '0 0 10px rgba(255,255,255,0.8)'
                    }}
                  >
                    {letter}
                  </span>
                ))}
                <span 
                  className="inline-block"
                  style={{
                    animation: `fadeInLetter 0.4s ease-out 0.54s forwards`,
                    opacity: 0,
                                          marginRight: '0.001em'
                  }}
                >
                  &nbsp;
                </span>
                {' Manage '.split('').map((letter, index) => (
                  <span
                    key={`white2-${index}`}
                    className="inline-block"
                    style={{
                      animation: `fadeInLetter 0.4s ease-out ${(index + 9) * 0.06}s forwards`,
                      opacity: 0,
                      textShadow: letter === ' ' ? 'none' : '0 0 10px rgba(255,255,255,0.8)'
                    }}
                  >
                    {letter}
                  </span>
                ))}
                <span 
                  className="inline-block"
                  style={{
                    animation: `fadeInLetter 0.4s ease-out 0.9s forwards`,
                    opacity: 0,
                                         marginLeft: '0.2em',
                     marginRight: '0.2em'
                  }}
                >
                  &
                </span>
                <span className="text-indigo-200 inline-block">
                  {'Publish'.split('').map((letter, index) => (
                    <span
                      key={`indigo-${index}`}
                      className="inline-block"
                      style={{
                        animation: `fadeInLetter 0.4s ease-out ${(index + 18) * 0.06}s forwards`,
                        opacity: 0,
                        textShadow: letter === ' ' ? 'none' : '0 0 10px rgba(147,51,234,0.8)'
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </div>
              
              {/* Second line: VS Code Extensions */}
              <div className="block mt-2">
                <span className="text-indigo-200 inline-block">
                  {'VS'.split('').map((letter, index) => (
                    <span
                      key={`indigo2-${index}`}
                      className="inline-block"
                      style={{
                        animation: `fadeInLetter 0.4s ease-out ${(index + 25) * 0.06}s forwards`,
                        opacity: 0,
                        textShadow: letter === ' ' ? 'none' : '0 0 10px rgba(147,51,234,0.8)'
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
                <span 
                  className="inline-block"
                  style={{
                    marginLeft: '0.01em',
                    marginRight: '0.01em'
                  }}
                >
                  &nbsp;
                </span>
                <span className="text-indigo-200 inline-block">
                  {'Code'.split('').map((letter, index) => (
                    <span
                      key={`indigo3-${index}`}
                      className="inline-block"
                      style={{
                        animation: `fadeInLetter 0.4s ease-out ${(index + 27) * 0.06}s forwards`,
                        opacity: 0,
                        textShadow: letter === ' ' ? 'none' : '0 0 10px rgba(147,51,234,0.8)'
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
                <span 
                  className="inline-block"
                  style={{
                    marginLeft: '0.01em',
                    marginRight: '0.01em'
                  }}
                >
                  &nbsp;
                </span>
                <span className="text-indigo-200 inline-block">
                  {'Extensions'.split('').map((letter, index) => (
                    <span
                      key={`indigo4-${index}`}
                      className="inline-block"
                      style={{
                        animation: `fadeInLetter 0.4s ease-out ${(index + 31) * 0.06}s forwards`,
                        opacity: 0,
                        textShadow: letter === ' ' ? 'none' : '0 0 10px rgba(147,51,234,0.8)'
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
        <p className="text-base sm:text-lg text-gray-200 mb-8 drop-shadow-md leading-relaxed">
          ExtendEase is your go-to platform for finding, reviewing, and managing the best Visual Studio Code extensions for your workflow.
        </p>
        <Link href="/browse-extensions" className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-700 transition mb-4">
          Browse Extensions
        </Link>
        <Link href="/add-extension" className="inline-block px-8 py-3 border-2 border-indigo-400 text-indigo-200 font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition">
          Add Extension
        </Link>
      </div>
    </div>
    </>
  );
}