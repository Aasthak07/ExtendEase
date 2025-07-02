import React from 'react';
import Link from 'next/link';

export default function AddExtensionPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* 1. Extension Name and Logo */}
      <div className="flex items-center space-x-4 mb-6">
        <img src="/file.svg" alt="Extension Logo" className="w-16 h-16" />
        <h1 className="text-3xl font-bold">Your Extension Name</h1>
      </div>

      {/* 2. Description */}
      <p className="mb-4 text-lg text-gray-700">
        A brief and compelling description of what your VS Code extension does. Make coding easier, faster, and more fun!
      </p>

      {/* 3. Features List */}
      <h2 className="text-xl font-semibold mt-8 mb-2">Features</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Feature one: Supercharge your workflow</li>
        <li>Feature two: Easy to use and configure</li>
        <li>Feature three: Seamless integration with VS Code</li>
      </ul>

      {/* 4. Installation Instructions */}
      <h2 className="text-xl font-semibold mt-8 mb-2">Installation</h2>
      <ol className="list-decimal list-inside mb-4 text-gray-700">
        <li>
          <Link href="https://marketplace.visualstudio.com/" target="_blank" className="text-blue-600 underline">Open the Visual Studio Marketplace</Link> and search for <b>Your Extension Name</b>.
        </li>
        <li>Click <b>Install</b> to add it to VS Code.</li>
        <li>Or, in VS Code, press <b>Ctrl+P</b> and enter <code>ext install publisher.extensionName</code>.</li>
        <li>
          <a href="vscode:extension/publisher.extensionName" className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Open in VS Code</a>
        </li>
      </ol>

      {/* 5. Screenshots or GIFs */}
      <h2 className="text-xl font-semibold mt-8 mb-2">Screenshots</h2>
      <div className="flex space-x-4 mb-4">
        <img src="/public/file.svg" alt="Screenshot 1" className="w-40 h-24 object-contain border rounded" />
        <img src="/public/file.svg" alt="Screenshot 2" className="w-40 h-24 object-contain border rounded" />
      </div>

      {/* 6. Testimonials or User Reviews */}
      <h2 className="text-xl font-semibold mt-8 mb-2">What Users Say</h2>
      <div className="mb-4">
        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800 mb-2">“This extension changed the way I code!”</blockquote>
        <span className="text-sm text-gray-500">- Happy Developer</span>
      </div>

      {/* 7. FAQ Section */}
      <h2 className="text-xl font-semibold mt-8 mb-2">FAQ</h2>
      <div className="mb-4">
        <p className="font-semibold">Q: Is this extension free?</p>
        <p className="mb-2">A: Yes, it's completely free to use.</p>
        <p className="font-semibold">Q: How do I report a bug?</p>
        <p>A: Please open an issue on our GitHub repository.</p>
      </div>

      {/* 8. Support and Contact Information */}
      <h2 className="text-xl font-semibold mt-8 mb-2">Support & Contact</h2>
      <p className="mb-4">Need help? <a href="mailto:support@example.com" className="text-blue-600 underline">Email us</a> or visit our <Link href="https://github.com/example/repo" target="_blank" className="text-blue-600 underline">GitHub</Link>.</p>

      {/* 9. GitHub Repository Link */}
      <h2 className="text-xl font-semibold mt-8 mb-2">Source Code</h2>
      <Link href="https://github.com/example/repo" target="_blank" className="text-blue-600 underline mb-4 inline-block">View on GitHub</Link>

      {/* 10. Version and Changelog */}
      <h2 className="text-xl font-semibold mt-8 mb-2">Version & Changelog</h2>
      <p className="mb-4">Current version: <b>1.0.0</b>. <Link href="#" className="text-blue-600 underline">View changelog</Link></p>

      {/* 11. Video Demo */}
      <h2 className="text-xl font-semibold mt-8 mb-2">Video Demo</h2>
      <div className="mb-4">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      {/* 12. Compatibility */}
      <h2 className="text-xl font-semibold mt-8 mb-2">Compatibility</h2>
      <p>Supports VS Code versions 1.60.0 and above.</p>
    </div>
  );
} 