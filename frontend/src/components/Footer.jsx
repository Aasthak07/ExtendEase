import React from 'react';

const Footer = () => {
  return (
    // <footer className="bg-blue-900 text-white py-8 w-full">
    //   <div className="px-4 sm:px-6 lg:px-8">
    //     {/* Top Section with Socials and Links */}
    //     <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-blue-800 pb-6 mb-6">
    //       {/* Social Icons */}
    //       <div className="flex space-x-6 mb-4 md:mb-0">
    //         <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
    //           <span className="sr-only">Twitter</span>
    //           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    //             <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482A13.87 13.87 0 011.67 3.899a4.914 4.914 0 001.518 6.55 4.91 4.91 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    //           </svg>
    //         </a>
    //         <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
    //           <span className="sr-only">Facebook</span>
    //           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    //             <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
    //           </svg>
    //         </a>
    //         <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
    //           <span className="sr-only">LinkedIn</span>
    //           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    //             <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    //           </svg>
    //         </a>
    //         <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
    //           <span className="sr-only">YouTube</span>
    //           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    //             <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.016 3.016 0 00-2.122 2.136C0 8.95 0 12 0 12s0 3.05.501 5.814a3.016 3.016 0 002.122 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.05 24 12 24 12s0-3.05-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    //           </svg>
    //         </a>
    //         <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
    //           <span className="sr-only">TikTok</span>
    //           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    //             <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    //           </svg>
    //         </a>
    //         <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
    //           <span className="sr-only">Bluesky</span>
    //           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    //             <path d="M12.002 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm0 1.5a10.5 10.5 0 1 1-10.5 10.5A10.5 10.5 0 0 1 12.002 1.5Zm0 3.75a6.75 6.75 0 1 0 6.75 6.75 6.75 6.75 0 0 0-6.75-6.75Zm0 1.5a5.25 5.25 0 1 1-5.25 5.25 5.25 5.25 0 0 1 5.25-5.25Z"/>
    //           </svg>
    //         </a>
    //       </div>
    //     </div>

    //     {/* Main Links Grid */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 pb-6 border-b border-blue-800">
    //       {/* Follow us */}
    //       <div>
    //         <h3 className="text-sm font-semibold mb-3 text-gray-200">Follow us</h3>
    //         <ul className="space-y-2 text-sm text-gray-400">
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Visual Studio on Twitter</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Visual Studio on Facebook</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Visual Studio on LinkedIn</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Visual Studio on YouTube</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Visual Studio on TikTok</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Visual Studio on Bluesky</a></li>
    //         </ul>
    //       </div>

    //       {/* Developer Resources */}
    //       <div>
    //         <h3 className="text-sm font-semibold mb-3 text-gray-200">Developer Resources</h3>
    //         <ul className="space-y-2 text-sm text-gray-400">
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Dev Essentials</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Developer Community</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Visual Studio Blog</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">.NET Blog</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">C++ Blog</a></li>
    //         </ul>
    //       </div>

    //       {/* What's new */}
    //       <div>
    //         <h3 className="text-sm font-semibold mb-3 text-gray-200">What's new</h3>
    //         <ul className="space-y-2 text-sm text-gray-400">
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Surface Pro</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Surface Laptop</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Surface Laptop Studio 2</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Surface Laptop Go 3</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Microsoft Copilot</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">AI in Windows</a></li>
    //         </ul>
    //       </div>

    //       {/* Microsoft Store */}
    //       <div>
    //         <h3 className="text-sm font-semibold mb-3 text-gray-200">Microsoft Store</h3>
    //         <ul className="space-y-2 text-sm text-gray-400">
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Account profile</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Download Center</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Microsoft Store support</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Returns</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Order tracking</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Certified Refurbished</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Microsoft Store Promise</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Flexible Payments</a></li>
    //         </ul>
    //       </div>

    //       {/* Education */}
    //       <div>
    //         <h3 className="text-sm font-semibold mb-3 text-gray-200">Education</h3>
    //         <ul className="space-y-2 text-sm text-gray-400">
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Microsoft in education</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Devices for education</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Microsoft Teams for Education</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Microsoft 365 Education</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">How to buy for your school</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Educator training and development</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Deals for students and parents</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">AI for education</a></li>
    //         </ul>
    //       </div>

    //       {/* Business */}
    //       <div>
    //         <h3 className="text-sm font-semibold mb-3 text-gray-200">Business</h3>
    //         <ul className="space-y-2 text-sm text-gray-400">
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Microsoft Cloud</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Microsoft Security</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Dynamics 365</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Microsoft 365</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Microsoft Power Platform</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Microsoft Teams</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Microsoft 365 Copilot</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Small Business</a></li>
    //         </ul>
    //       </div>
    //     </div>

    //     {/* Second Row */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 border-b border-blue-800">
    //       {/* Developer & IT */}
    //       <div>
    //         <h3 className="text-sm font-semibold mb-3 text-gray-200">Developer & IT</h3>
    //         <ul className="space-y-2 text-sm text-gray-400">
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Azure</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Microsoft Developer</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Microsoft Learn</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Support for AI marketplace apps</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Microsoft Tech Community</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Azure Marketplace</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">AppSource</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Visual Studio</a></li>
    //         </ul>
    //       </div>

    //       {/* Company */}
    //       <div>
    //         <h3 className="text-sm font-semibold mb-3 text-gray-200">Company</h3>
    //         <ul className="space-y-2 text-sm text-gray-400">
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Careers</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">About Microsoft</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Company news</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Privacy at Microsoft</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Investors</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Diversity and inclusion</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Accessibility</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Sustainability</a></li>
    //         </ul>
    //       </div>

    //       {/* Explore */}
    //       <div>
    //         <h3 className="text-sm font-semibold mb-3 text-gray-200">Explore</h3>
    //         <ul className="space-y-2 text-sm text-gray-400">
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Explore Microsoft products</a></li>
    //           <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Windows 11 apps</a></li>
    //         </ul>
    //       </div>
    //     </div>

    //     {/* Bottom Section */}
    //     <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-6">
    //       <div className="mb-4 md:mb-0 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
    //         <div className="flex items-center space-x-2">
    //           <span>Language: </span>
    //           <select className="bg-blue-900 text-gray-400 border-none focus:outline-none">
    //             <option>English</option>
    //             <option>Hindi</option>
    //             <option>Spanish</option>
    //           </select>
    //         </div>
    //         <div className="flex items-center space-x-2">
    //           <a href="#" className="hover:text-blue-300">Your Privacy Choices</a>
    //           <span>|</span>
    //           <a href="#" className="hover:text-blue-300">Consumer Health Privacy</a>
    //         </div>
    //       </div>
    //       <div className="flex flex-wrap justify-center md:justify-end items-center space-x-2 text-center">
    //         <a href="#" className="hover:text-blue-300">Contact us</a>
    //         <span>|</span>
    //         <a href="#" className="hover:text-blue-300">Privacy & cookies</a>
    //         <span>|</span>
    //         <a href="#" className="hover:text-blue-300">Terms of use</a>
    //         <span>|</span>
    //         <a href="#" className="hover:text-blue-300">Trademarks</a>
    //         <span>|</span>
    //         <a href="#" className="hover:text-blue-300">About our ads</a>
    //         <span>|</span>
    //         <span>© Microsoft 2025</span>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <div className="relative mt-16 bg-deep-purple-900">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 text-teal-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Company
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-deep-purple-50">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm text-deep-purple-50">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Cherry
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Apples
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    Educational
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-indigo-400"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-indigo-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-indigo-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-indigo-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;