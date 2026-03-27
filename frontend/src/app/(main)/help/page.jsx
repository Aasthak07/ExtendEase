'use client';

import React from 'react';
import Link from 'next/link';

const HelpPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-blue-50 to-white font-sans relative overflow-hidden">
      {/* Content Wrapper for z-index */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 mt-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6 flex items-center justify-center gap-3 leading-none drop-shadow-sm">
                <img
                  src="/sq.ico"
                  alt="Logo"
                  className="inline-block h-[1.0em] w-[1.0em] align-middle"
                />
                <span className="-ml-0.1">Help & <span className="text-blue-600">Support</span></span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Welcome to the <strong className="text-blue-600">ExtendEase Help Center</strong>! Here you'll find everything you need to get started, troubleshoot issues, and make the most of our VS Code Extensions Marketplace.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">🚦 Quick Start Guide</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-xl hover:shadow-blue-100 transition-all hover:border-blue-300">
                <div className="text-3xl mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">🔍</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Browse & Search Extensions</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Use the <b>All Extensions</b> page to explore available extensions. Filter by category, search by name, developer, or description, and sort results to find what you need quickly.
                </p>
                <Link href="/browse-extensions" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">Go to All Extensions &rarr;</Link>
              </div>
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-xl hover:shadow-blue-100 transition-all hover:border-blue-300">
                <div className="text-3xl mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">➕</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Add Your Extension</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Want to share your own VS Code extension? Use the <b>Add Extension</b> page to submit details, upload a logo, and describe features. Your extension will be visible to the community after admin approval.
                </p>
                <Link href="/user/request-extension" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">Add an Extension &rarr;</Link>
              </div>
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-xl hover:shadow-blue-100 transition-all hover:border-blue-300">
                <div className="text-3xl mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">🛠️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Manage Extensions (Admin)</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Admins can edit, publish/unpublish, or delete extensions from the <b>Manage Extensions</b> dashboard. Use the search and filter tools to quickly find and update listings.
                </p>
                <Link href="/admin/manage-extensions" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">Admin Manage Extensions &rarr;</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">❓ Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-10 bg-white/80 p-10 rounded-2xl shadow-sm border border-gray-200">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-blue-600">How do I install an extension?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Click the <b>Download Extension</b> button on an extension's details page. You can also use the <code>vscode:extension/</code> link for one-click install in VS Code.</p>
                
                <h3 className="font-semibold text-lg mb-2 text-blue-600">How do I update set my extension?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">If you are the publisher, contact the admin or use the dashboard to request changes. Admins can edit or delete extensions directly.</p>
                
                <h3 className="font-semibold text-lg mb-2 text-blue-600">Who can rate or review extensions?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">All registered users can rate and review extensions to help others make informed choices.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-blue-600">I forgot my admin password. What do I do?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Contact the platform owner or use the password reset feature (if enabled). For security, only authorized users can reset admin credentials.</p>
                
                <h3 className="font-semibold text-lg mb-2 text-blue-600">How do I report a problem or bug?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Use the contact form or email support@extendease.com. Include as much detail as possible for a quick resolution.</p>
                
                <h3 className="font-semibold text-lg mb-2 text-blue-600">Where can I find more documentation?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Check the <Link href="/about-us" className="text-blue-600 underline">About Us</Link> page for more info, or reach out to our team for help.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">💡 Tips for Best Experience</h2>
            <div className="bg-blue-600 text-white p-10 rounded-2xl shadow-lg max-w-3xl mx-auto">
              <ul className="space-y-4 text-lg text-blue-50">
                <li className="flex items-start gap-3"><span className="font-bold text-white mt-1">•</span> Use the search and filter tools to quickly find relevant extensions.</li>
                <li className="flex items-start gap-3"><span className="font-bold text-white mt-1">•</span> Check ratings and reviews before installing new tools.</li>
                <li className="flex items-start gap-3"><span className="font-bold text-white mt-1">•</span> Keep your extensions up to date for the latest features and security fixes.</li>
                <li className="flex items-start gap-3"><span className="font-bold text-white mt-1">•</span> If you're an admin, regularly review new submissions for quality and compliance.</li>
                <li className="flex items-start gap-3"><span className="font-bold text-white mt-1">•</span> Join the community to share feedback and suggest new features!</li>
              </ul>
            </div>
          </div>
        </section>

        {/* More Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">🌟 More Platform Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all hover:border-blue-300">
                <div className="text-3xl mb-4 bg-blue-50 w-14 h-14 flex items-center justify-center rounded-full">🔍</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Advanced Search & Filtering</h3>
                <p className="text-gray-600">Quickly locate extensions by category, technology, rating, or keyword with our powerful search engine.</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all hover:border-blue-300">
                <div className="text-3xl mb-4 bg-blue-50 w-14 h-14 flex items-center justify-center rounded-full">👤</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Personalized Dashboards</h3>
                <p className="text-gray-600">Tailored spaces for developers, publishers, and admins to manage their activities efficiently.</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all hover:border-blue-300">
                <div className="text-3xl mb-4 bg-blue-50 w-14 h-14 flex items-center justify-center rounded-full">⭐</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Ratings & Reviews</h3>
                <p className="text-gray-600">Community-driven feedback to highlight the best tools and help you make informed decisions.</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all hover:border-blue-300">
                <div className="text-3xl mb-4 bg-blue-50 w-14 h-14 flex items-center justify-center rounded-full">📦</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">One-Click Integration</h3>
                <p className="text-gray-600">Use our vscode: URI scheme to install extensions directly into your editor with a single click.</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all hover:border-blue-300">
                <div className="text-3xl mb-4 bg-blue-50 w-14 h-14 flex items-center justify-center rounded-full">🔒</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Secure Authentication</h3>
                <p className="text-gray-600">JWT-based login and role-based access keep your data safe and your experience smooth.</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all hover:border-blue-300">
                <div className="text-3xl mb-4 bg-blue-50 w-14 h-14 flex items-center justify-center rounded-full">🚀</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">High Performance</h3>
                <p className="text-gray-600">Built with modern technologies for fast, responsive, and reliable performance.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpPage;