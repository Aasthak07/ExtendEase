// src/app/page.jsx
'use client';
import React from 'react';
import Link from 'next/link';
import Threads from '../components/Threads';

export default function Page() {
  return (
    <div className="font-sans bg-gradient-to-br from-black via-indigo-900 to-blue-900 min-h-screen w-full flex items-start justify-start relative overflow-hidden">
      {/* Animated Background (Threads) */}
      <div className="absolute inset-0 z-0">
        <Threads
          color={[0.388, 0.408, 0.945]}
          amplitude={1.2}
          distance={0.1}
          enableMouseInteraction={true}
        />
      </div>
      {/* Top-left Logo */}
      <Link href="/" className="fixed top-4 left-4 z-50 flex items-center space-x-2 hover:opacity-80 transition-opacity">
        <img
          src="/whiteLogo.png"
          alt="ExtendEase Logo"
          className="h-10 w-auto"
        />
        <span className="hidden sm:inline font-semibold text-white text-lg tracking-tight drop-shadow-lg">ExtendEase</span>
      </Link>
      {/* Left-aligned Content */}
      <div className="relative z-10 flex flex-col items-start text-left px-6 py-12 w-full max-w-2xl mx-0 mt-24">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
          <span className="inline-block animate-fadeInWord" style={{ animationDelay: '0s' }}>Discover,</span>{' '}
          <span className="inline-block animate-fadeInWord" style={{ animationDelay: '0.5s' }}>Manage</span>{' '}
          <span className="inline-block animate-fadeInWord" style={{ animationDelay: '1s' }}>&</span>{' '}
          <span className="inline-block animate-fadeInWord" style={{ animationDelay: '1.5s' }}>Publish</span>{' '}
          <span className="inline-block animate-fadeInWord" style={{ animationDelay: '2s' }}><span className="text-indigo-200">VS Code Extensions</span></span>
        </h1>
        <p className="text-base sm:text-lg text-gray-200 mb-8 drop-shadow-md leading-relaxed">
          ExtendEase is your go-to platform for finding, reviewing, and managing the best Visual Studio Code extensions for your workflow.
        </p>
        <Link href="/browse-extensions" className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-700 transition mb-4">
          Browse Extensions
        </Link>
        <Link href="/publishers" className="inline-block px-8 py-3 border-2 border-indigo-400 text-indigo-200 font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition">
          For Publishers
        </Link>
      </div>
    </div>
  );
}