'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="font-sans bg-gradient-to-br from-gray-50 via-blue-50 to-white min-h-screen w-full relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 px-6 sm:px-8 lg:px-12 mt-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16" style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1s ease-out'
              }}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6 flex items-center justify-center gap-3 leading-none drop-shadow-sm">
                  <img
                    src="/sq.ico"
                    alt="Logo"
                    className="inline-block h-[1.0em] w-[1.0em] align-middle"
                  />
                  <span className="-ml-0.1">
                    About <span className="text-blue-600">ExtendEase</span>
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Welcome to <strong className="text-blue-600">ExtendEase</strong> – The VS Code Extensions Marketplace built
                  <strong className="text-blue-600"> by developers, for developers</strong>. Discover, share, and manage
                  Visual Studio Code extensions with ease.
                </p>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="py-16 px-6 sm:px-8 lg:px-12 bg-white/50 backdrop-blur-sm border-y border-gray-200">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-out 0.2s'
                }}>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                    <span className="text-blue-600">Our</span> Vision
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    We envision effortless extension discovery for every developer.
                    <strong className="text-blue-600"> ExtendEase</strong> is building the future by creating:
                  </p>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 text-xl mr-3 leading-none rounded-full bg-blue-50 px-2 py-1">•</span>
                      <span>A <em>curated ecosystem</em> where quality extensions rise to the top through community-driven ratings and reviews</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 text-xl mr-3 leading-none rounded-full bg-blue-50 px-2 py-1">•</span>
                      <span>An <em>intelligent discovery platform</em> that learns from your coding patterns and suggests the perfect extensions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 text-xl mr-3 leading-none rounded-full bg-blue-50 px-2 py-1">•</span>
                      <span>A <em>collaborative space</em> where developers share insights, feedback, and build better tools together</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 text-xl mr-3 leading-none rounded-full bg-blue-50 px-2 py-1">•</span>
                      <span>A <em>seamless experience</em> from discovery to installation, making your development workflow faster and more efficient</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-10 shadow-lg" style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-out 0.4s'
                }}>
                  <div className="text-center">
                    <div className="mb-6 mx-auto bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center border border-blue-100 shadow-sm">
                      <span className="text-5xl">💻</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Built for Developers</h3>
                    <p className="text-gray-600 leading-relaxed">
                      A platform that understands the needs of modern developers and provides the tools they need to succeed in a distraction-free way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What We Offer Section */}
          <section className="py-20 px-6 sm:px-8 lg:px-12 bg-transparent">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16" style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 1s ease-out 0.6s'
              }}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                  🔧 What We Offer
                </h2>
                <div className="relative max-w-3xl mx-auto mb-10">
                  <div className="flex justify-center mb-6">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 border border-blue-200 shadow-md">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-xl text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md px-8 py-8 leading-relaxed font-medium">
                    <span className="text-blue-600 font-bold">ExtendEase</span> helps you discover and manage VS Code extensions with smart filters and clear organization. Spend less time searching, more time building.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature Cards */}
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:border-blue-300 transition-all duration-300 text-center" style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-out 0.8s'
                }}>
                  <div className="text-3xl mb-4 bg-blue-50 w-16 h-16 rounded-full mx-auto flex items-center justify-center border border-blue-100">🔍</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Advanced Search & Filtering</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Quickly locate extensions by category, technology, rating, or keyword with our powerful search engine.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:border-blue-300 transition-all duration-300 text-center" style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-out 1.0s'
                }}>
                  <div className="text-3xl mb-4 bg-blue-50 w-16 h-16 rounded-full mx-auto flex items-center justify-center border border-blue-100">👤</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Personalized Dashboards</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tailored spaces for developers, publishers, and admins to manage their activities efficiently.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:border-blue-300 transition-all duration-300 text-center" style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-out 1.2s'
                }}>
                  <div className="text-3xl mb-4 bg-blue-50 w-16 h-16 rounded-full mx-auto flex items-center justify-center border border-blue-100">⭐</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Ratings & Reviews</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Community-driven feedback to highlight the best tools and help you make informed decisions.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:border-blue-300 transition-all duration-300 text-center" style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-out 1.4s'
                }}>
                  <div className="text-3xl mb-4 bg-blue-50 w-16 h-16 rounded-full mx-auto flex items-center justify-center border border-blue-100">📦</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">One-Click VS Code Integration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Use our vscode: URI scheme to install extensions directly into your editor with a single click.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:border-blue-300 transition-all duration-300 text-center" style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-out 1.6s'
                }}>
                  <div className="text-3xl mb-4 bg-blue-50 w-16 h-16 rounded-full mx-auto flex items-center justify-center border border-blue-100">🔐</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Secure Authentication</h3>
                  <p className="text-gray-600 leading-relaxed">
                    JWT-based login and role-based access keep your data safe and your experience smooth.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:border-blue-300 transition-all duration-300 text-center" style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-out 1.8s'
                }}>
                  <div className="text-3xl mb-4 bg-blue-50 w-16 h-16 rounded-full mx-auto flex items-center justify-center border border-blue-100">🚀</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">High Performance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Built with modern technologies for fast, responsive, and reliable performance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Community Section */}
          <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white/40 border-y border-gray-200">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-10 shadow-lg text-center" style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-out 2.0s'
                }}>
                  <div className="mb-6 mx-auto bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center border border-blue-100 shadow-sm">
                    <span className="text-5xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Community</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Connect with fellow developers, share your extensions, and discover amazing tools.
                  </p>
                </div>
                <div style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-out 2.2s'
                }}>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                    🧑‍🤝‍🧑 Our Community
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    ExtendEase is more than just a marketplace—it's a hub for collaboration, feedback, and discovery.
                    Whether you're a seasoned developer looking for niche tools, or an indie creator seeking visibility
                    for your first extension, you'll find your place here.
                  </p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    We believe in the <em>open-source spirit</em>, the power of <strong className="text-blue-600">developer feedback</strong>,
                    and the value of <strong className="text-blue-600">accessible innovation</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Roadmap Section */}
          <section className="py-20 px-6 sm:px-8 lg:px-12 bg-transparent text-center">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16" style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 1s ease-out 2.4s'
              }}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                  🌱 Looking Ahead
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our roadmap includes exciting features that will make ExtendEase even more powerful and user-friendly.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/80 p-6 rounded-2xl shadow-sm border border-gray-200" style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-out 2.6s'
                }}>
                  <div className="bg-blue-50 border border-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Personalized Recommendations</h3>
                  <p className="text-gray-600 text-sm">AI-powered extension suggestions based on your coding patterns</p>
                </div>

                <div className="bg-white/80 p-6 rounded-2xl shadow-sm border border-gray-200" style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-out 2.8s'
                }}>
                  <div className="bg-blue-50 border border-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Real-time Analytics</h3>
                  <p className="text-gray-600 text-sm">In-depth analytics dashboards for publishers and developers</p>
                </div>

                <div className="bg-white/80 p-6 rounded-2xl shadow-sm border border-gray-200" style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-out 3.0s'
                }}>
                  <div className="bg-blue-50 border border-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔌</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">API Integration</h3>
                  <p className="text-gray-600 text-sm">Real-time data integration via powerful APIs</p>
                </div>

                <div className="bg-white/80 p-6 rounded-2xl shadow-sm border border-gray-200" style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-out 3.2s'
                }}>
                  <div className="bg-blue-50 border border-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">And Much More</h3>
                  <p className="text-gray-600 text-sm">Continuous improvements and new features based on community feedback</p>
                </div>
              </div>

              <div className="mt-12 bg-blue-600 rounded-3xl p-10 max-w-4xl mx-auto shadow-lg" style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 1s ease-out 3.4s'
              }}>
                <p className="text-2xl font-semibold text-white">
                  We're just getting started—and we're excited to build the future of extension sharing with <strong className="text-blue-200">you</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gray-50 border-t border-gray-200">
            <div className="max-w-4xl mx-auto text-center" style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s ease-out 3.6s'
            }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                📬 Get in Touch
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Have questions, feedback, or suggestions? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-400/50 hover:scale-105"
                >
                  Contact Us
                </Link>
                <a
                  href="mailto:support@extendease.dev"
                  className="inline-flex items-center justify-center px-10 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all shadow-md hover:scale-105"
                >
                  Email Support
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutUs;