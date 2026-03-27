import { Star, Search, User, Cloud, Shield } from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white text-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 mt-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-800">Why Choose ExtendEase?</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover, review, and request the best extensions for your workflow—all in one place.
          </p>
          <Link href="/browse-extensions" className="inline-block px-8 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-400/50 hover:scale-105">
            Browse Extensions
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          <FeatureCard icon={<Search size={32} className="text-blue-600" />} title="Powerful Search" desc="Find extensions fast with advanced search and filters." />
          <FeatureCard icon={<Star size={32} className="text-blue-600" />} title="User Reviews" desc="Read and write reviews to help the community." />
          <FeatureCard icon={<User size={32} className="text-blue-600" />} title="Admin Tools" desc="Admins can easily manage and approve extensions." />
          <FeatureCard icon={<Cloud size={32} className="text-blue-600" />} title="Cloud Image Uploads" desc="Fast, reliable logo hosting with Cloudinary." />
          <FeatureCard icon={<Shield size={32} className="text-blue-600" />} title="Secure & Modern" desc="Built with the latest tech for speed and safety." />
          <FeatureCard icon={<Search size={32} className="text-blue-600" />} title="Request Extensions" desc="Suggest new extensions for the marketplace." />
        </div>

        {/* How It Works */}
        <div className="mb-16 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-10 shadow-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">How It Works</h2>
          <ol className="list-decimal list-inside text-lg space-y-4 text-gray-600 ml-4">
            <li><span className="font-semibold text-gray-800">Browse or search</span> for extensions by category or keyword.</li>
            <li><span className="font-semibold text-gray-800">View details</span>, ratings, and reviews for each extension.</li>
            <li><span className="font-semibold text-gray-800">Request new extensions</span> or submit your own (admin approval required).</li>
            <li><span className="font-semibold text-gray-800">Admins manage</span>, approve, and feature top extensions.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white/90 border border-gray-200 rounded-xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:shadow-blue-100 hover:border-blue-300 transition-all duration-300">
      <div className="mb-6 bg-blue-50 p-4 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}