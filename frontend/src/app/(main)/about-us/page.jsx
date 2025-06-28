import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              🧩 About <span className="text-purple-600">ExtendEase</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Welcome to <strong>ExtendEase</strong> – The VS Code Extensions Marketplace, a dedicated platform built 
              <strong className="text-purple-600"> by developers, for developers</strong>. Our mission is simple: to empower 
              the global coding community with a centralized, community-driven space to discover, share, and manage 
              Visual Studio Code extensions with ease.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                🚀 Our Vision
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As Visual Studio Code becomes the editor of choice for millions, the demand for tailored, 
                high-quality extensions has grown rapidly. Yet, access to curated, innovative tools beyond 
                the official marketplace remains limited.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-purple-600">ExtendEase</strong> is here to change that—by providing a seamless, 
                user-friendly environment where:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  Developers can <em>explore powerful extensions</em>, optimized for productivity and innovation.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  Publishers can <em>showcase their creations</em>, engage with users, and gain meaningful insights.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  Admins ensure the platform maintains <em>quality, safety, and inclusivity</em>.
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Built for Developers</h3>
                <p className="text-gray-700">
                  A platform that understands the needs of modern developers and provides the tools they need to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              🔧 What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ExtendEase is built using the robust <strong className="text-purple-600">MERN Stack</strong> 
              (MongoDB, Express.js, React.js, and Node.js), delivering a scalable, secure, and high-performance experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Search & Filtering</h3>
              <p className="text-gray-600">
                Quickly locate extensions by category, technology, rating, or keyword with our powerful search engine.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">👤</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Dashboards</h3>
              <p className="text-gray-600">
                Tailored spaces for developers, publishers, and admins to manage their activities efficiently.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ratings & Reviews</h3>
              <p className="text-gray-600">
                Community-driven feedback to highlight the best tools and help you make informed decisions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">One-Click VS Code Integration</h3>
              <p className="text-gray-600">
                Use our vscode: URI scheme to install extensions directly into your editor with a single click.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Authentication</h3>
              <p className="text-gray-600">
                JWT-based login and role-based access keep your data safe and your experience smooth.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High Performance</h3>
              <p className="text-gray-600">
                Built with modern technologies for fast, responsive, and reliable performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h3>
                <p className="text-gray-700">
                  Connect with fellow developers, share your extensions, and discover amazing tools.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                🧑‍🤝‍🧑 Our Community
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                ExtendEase is more than just a marketplace—it's a hub for collaboration, feedback, and discovery. 
                Whether you're a seasoned developer looking for niche tools, or an indie creator seeking visibility 
                for your first extension, you'll find your place here.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe in the <em>open-source spirit</em>, the power of <strong>developer feedback</strong>, 
                and the value of <strong>accessible innovation</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              🌱 Looking Ahead
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our roadmap includes exciting features that will make ExtendEase even more powerful and user-friendly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Recommendations</h3>
              <p className="text-gray-600">AI-powered extension suggestions based on your coding patterns</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
              <p className="text-gray-600">In-depth analytics dashboards for publishers and developers</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔌</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">API Integration</h3>
              <p className="text-gray-600">Real-time data integration via powerful APIs</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">And Much More</h3>
              <p className="text-gray-600">Continuous improvements and new features based on community feedback</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              We're just getting started—and we're excited to build the future of extension sharing with <strong className="text-purple-600">you</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            📬 Get in Touch
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Have questions, feedback, or suggestions? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Contact Us
            </Link>
            <a 
              href="mailto:support@extendease.dev" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
            >
              Email Support
            </a>
          </div>
          <p className="text-gray-600 mt-6">
            Reach out via our <Link href="/contact" className="text-purple-600 hover:underline">Contact page</Link> or email us at{' '}
            <a href="mailto:support@extendease.dev" className="text-purple-600 hover:underline font-semibold">
              support@extendease.dev
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;