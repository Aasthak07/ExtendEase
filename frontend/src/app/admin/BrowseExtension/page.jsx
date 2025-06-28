'use client';

import React, { useState } from 'react';

const BrowseExtensionPage = () => {
  const [activeTab, setActiveTab] = useState('manifest');
  const [activeSection, setActiveSection] = useState('introduction');

  const manifestExample = `{
  "manifest_version": 3,
  "name": "My Extension",
  "version": "1.0.0",
  "description": "A simple browser extension",
  "permissions": ["storage", "activeTab"],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
    }
  ],
  "action": {
    "default_popup": "popup.html"
  }
}`;

  const manifestV2Example = `{
  "manifest_version": 2,
  "name": "My Extension",
  "version": "1.0.0",
  "description": "A simple browser extension",
  "permissions": ["storage", "activeTab"],
  "background": {
    "scripts": ["background.js"],
    "persistent": false
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
    }
  ],
  "browser_action": {
    "default_popup": "popup.html"
  }
}`;

  const contentScriptExample = `// content.js
console.log('Content script loaded');

// Listen for messages from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'change-color') {
    document.body.style.backgroundColor = message.color;
    sendResponse({ success: true });
  }
});

// Send message to background script
chrome.runtime.sendMessage({
  action: 'content-script-ready',
  url: window.location.href
});`;

  const backgroundScriptExample = `// background.js
console.log('Background script loaded');

// Handle extension installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received:', message);
  sendResponse({ received: true });
});

// Handle browser action click
chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, {
    action: 'change-color',
    color: '#ff0000'
  });
});`;

  const popupExample = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { width: 300px; padding: 10px; }
    button { margin: 5px; padding: 8px; }
  </style>
</head>
<body>
  <h3>My Extension</h3>
  <button id="actionBtn">Perform Action</button>
  <script src="popup.js"></script>
</body>
</html>`;

  const communicationExample = `// Communication between scripts
// Background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'get-data') {
    chrome.storage.local.get(['userData'], (result) => {
      sendResponse({ data: result.userData });
    });
    return true; // Keep message channel open for async response
  }
});

// Content script
chrome.runtime.sendMessage({ action: 'get-data' }, (response) => {
  console.log('Received data:', response.data);
});`;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Code copied to clipboard!');
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-gray-800">🚀 Browser Extension Guide</h1>
            <div className="flex space-x-4">
              <button 
                onClick={() => scrollToSection('introduction')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'introduction' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Introduction
              </button>
              <button 
                onClick={() => scrollToSection('components')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'components' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Components
              </button>
              <button 
                onClick={() => scrollToSection('apis')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'apis' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                APIs
              </button>
              <button 
                onClick={() => scrollToSection('development')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'development' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Development
              </button>
              <button 
                onClick={() => scrollToSection('publishing')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'publishing' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Publishing
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6">
        {/* Introduction Section */}
        <section id="introduction" className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Introduction to Browser Extensions
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browser extensions are software programs that extend the functionality of web browsers. 
              They can modify web pages, add new features, and integrate with web services.
            </p>
          </div>

          {/* Definition and Purpose */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">What are Browser Extensions?</h2>
            <p className="text-gray-600 mb-4">
              Browser extensions are small software programs that can modify and enhance the functionality of the web browser. 
              They are written using web technologies like HTML, CSS, and JavaScript.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Key Characteristics:</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Run in the browser environment</li>
                  <li>• Can access browser APIs and web pages</li>
                  <li>• Cross-platform compatibility</li>
                  <li>• Easy to install and update</li>
                  <li>• Can work offline</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Common Use Cases:</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Ad-blocking and privacy protection</li>
                  <li>• Password managers and security tools</li>
                  <li>• Productivity and workflow automation</li>
                  <li>• Social media enhancements</li>
                  <li>• Shopping assistants and price trackers</li>
                  <li>• Developer tools and debugging</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">⚡ Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                onClick={() => alert('Generate manifest.json file')}
              >
                📄 Generate Manifest
              </button>
              <button 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                onClick={() => alert('Launch test browser')}
              >
                🧪 Test Extension
              </button>
              <button 
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                onClick={() => alert('Package extension')}
              >
                📦 Package Extension
              </button>
            </div>
          </div>
        </section>

        {/* Core Components Section */}
        <section id="components" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Core Components of a Browser Extension</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">📄 Manifest File (manifest.json)</h3>
              <p className="text-gray-600 mb-3">
                The blueprint of your extension that defines its properties, permissions, and structure.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Extension metadata (name, version, description)</li>
                <li>• Required permissions and host permissions</li>
                <li>• Script files and their roles</li>
                <li>• UI components (popup, options page)</li>
                <li>• Icons and assets</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">⚙️ Background Scripts</h3>
              <p className="text-gray-600 mb-3">
                Service workers (MV3) or background pages (MV2) that handle events and manage extension state.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Handle extension lifecycle events</li>
                <li>• Manage global state and data</li>
                <li>• Process messages from content scripts</li>
                <li>• Handle browser events (tabs, bookmarks, etc.)</li>
                <li>• Run background tasks and timers</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">🌐 Content Scripts</h3>
              <p className="text-gray-600 mb-3">
                Scripts that run in the context of web pages and can interact with the page's DOM.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Access and modify page content</li>
                <li>• Inject CSS and JavaScript</li>
                <li>• Communicate with background scripts</li>
                <li>• Handle page-specific events</li>
                <li>• Run in isolated context</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">🖥️ UI Components</h3>
              <p className="text-gray-600 mb-3">
                HTML pages that provide user interface for the extension.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Popup:</strong> Quick access interface</li>
                <li>• <strong>Options Page:</strong> Settings and configuration</li>
                <li>• <strong>Sidebar:</strong> Panel interface (Firefox)</li>
                <li>• <strong>New Tab Page:</strong> Custom new tab</li>
                <li>• <strong>Icons:</strong> Extension and action icons</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Browser Extension APIs Section */}
        <section id="apis" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Browser Extension APIs</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Essential APIs Overview</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Core APIs:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• <strong>runtime:</strong> Extension lifecycle and messaging</li>
                  <li>• <strong>storage:</strong> Data persistence (local/sync)</li>
                  <li>• <strong>tabs:</strong> Tab management and manipulation</li>
                  <li>• <strong>webRequest:</strong> Network request interception</li>
                  <li>• <strong>cookies:</strong> Cookie management</li>
                  <li>• <strong>bookmarks:</strong> Bookmark operations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Advanced APIs:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• <strong>identity:</strong> OAuth authentication</li>
                  <li>• <strong>alarms:</strong> Scheduled tasks</li>
                  <li>• <strong>notifications:</strong> System notifications</li>
                  <li>• <strong>contextMenus:</strong> Right-click menus</li>
                  <li>• <strong>commands:</strong> Keyboard shortcuts</li>
                  <li>• <strong>omnibox:</strong> Address bar integration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Browser Differences */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Browser-Specific Differences</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold">Feature</th>
                    <th className="text-left py-3 px-4 font-semibold">Chrome</th>
                    <th className="text-left py-3 px-4 font-semibold">Firefox</th>
                    <th className="text-left py-3 px-4 font-semibold">Edge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Manifest V3</td>
                    <td className="py-3 px-4 text-green-600">✅ Full Support</td>
                    <td className="py-3 px-4 text-green-600">✅ Full Support</td>
                    <td className="py-3 px-4 text-green-600">✅ Full Support</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Service Workers</td>
                    <td className="py-3 px-4 text-green-600">✅</td>
                    <td className="py-3 px-4 text-green-600">✅</td>
                    <td className="py-3 px-4 text-green-600">✅</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">WebRequest MV3</td>
                    <td className="py-3 px-4 text-green-600">✅ Declarative</td>
                    <td className="py-3 px-4 text-green-600">✅ Both APIs</td>
                    <td className="py-3 px-4 text-green-600">✅ Declarative</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Native Messaging</td>
                    <td className="py-3 px-4 text-green-600">✅</td>
                    <td className="py-3 px-4 text-yellow-600">⚠️ Partial</td>
                    <td className="py-3 px-4 text-green-600">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Development Tools Section */}
        <section id="development" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Development Tools and Setup</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">🛠️ Development Environment</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• <strong>Code Editor:</strong> VS Code with extension support</li>
                <li>• <strong>Version Control:</strong> Git for project management</li>
                <li>• <strong>Package Manager:</strong> npm/yarn for dependencies</li>
                <li>• <strong>Build Tools:</strong> Webpack, Rollup, or Vite</li>
                <li>• <strong>Linting:</strong> ESLint for code quality</li>
                <li>• <strong>Testing:</strong> Jest or Mocha for unit tests</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">🐛 Debugging Extensions</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• <strong>Chrome:</strong> chrome://extensions/ → Inspect views</li>
                <li>• <strong>Firefox:</strong> about:debugging → This Firefox</li>
                <li>• <strong>Edge:</strong> edge://extensions/ → Details → Inspect</li>
                <li>• <strong>Content Scripts:</strong> Browser DevTools</li>
                <li>• <strong>Background Scripts:</strong> Extension DevTools</li>
                <li>• <strong>Console Logging:</strong> Use console.log() for debugging</li>
              </ul>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">🔒 Best Practices and Security</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Permission Minimization:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Request only necessary permissions</li>
                  <li>• Use optional permissions when possible</li>
                  <li>• Limit host permissions to specific domains</li>
                  <li>• Avoid <code>&lt;all_urls&gt;</code> when possible</li>
                  <li>• Explain why permissions are needed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Content Security Policy:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Use strict CSP in manifest</li>
                  <li>• Avoid <code>'unsafe-eval'</code> and <code>'unsafe-inline'</code></li>
                  <li>• Use <code>chrome-extension://</code> for local resources</li>
                  <li>• Validate external content</li>
                  <li>• Sanitize user input</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">💡 Code Examples</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Code Examples</h3>
            
            {/* Tab Buttons */}
            <div className="flex border-b border-gray-200 mb-4 overflow-x-auto">
              <button
                className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'manifest' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('manifest')}
              >
                Manifest V3
              </button>
              <button
                className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'manifestV2' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('manifestV2')}
              >
                Manifest V2
              </button>
              <button
                className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'content' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('content')}
              >
                Content Script
              </button>
              <button
                className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'background' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('background')}
              >
                Background Script
              </button>
              <button
                className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'popup' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('popup')}
              >
                Popup
              </button>
              <button
                className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'communication' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('communication')}
              >
                Communication
              </button>
            </div>

            {/* Tab Content */}
            <div className="relative">
              {activeTab === 'manifest' && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">manifest.json (V3)</span>
                    <button 
                      className="text-blue-500 hover:text-blue-600 text-sm"
                      onClick={() => copyToClipboard(manifestExample)}
                    >
                      Copy Code
                    </button>
                  </div>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{manifestExample}</code>
                  </pre>
                </div>
              )}

              {activeTab === 'manifestV2' && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">manifest.json (V2)</span>
                    <button 
                      className="text-blue-500 hover:text-blue-600 text-sm"
                      onClick={() => copyToClipboard(manifestV2Example)}
                    >
                      Copy Code
                    </button>
                  </div>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{manifestV2Example}</code>
                  </pre>
                </div>
              )}

              {activeTab === 'content' && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">content.js</span>
                    <button 
                      className="text-blue-500 hover:text-blue-600 text-sm"
                      onClick={() => copyToClipboard(contentScriptExample)}
                    >
                      Copy Code
                    </button>
                  </div>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{contentScriptExample}</code>
                  </pre>
                </div>
              )}

              {activeTab === 'background' && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">background.js</span>
                    <button 
                      className="text-blue-500 hover:text-blue-600 text-sm"
                      onClick={() => copyToClipboard(backgroundScriptExample)}
                    >
                      Copy Code
                    </button>
                  </div>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{backgroundScriptExample}</code>
                  </pre>
                </div>
              )}

              {activeTab === 'popup' && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">popup.html</span>
                    <button 
                      className="text-blue-500 hover:text-blue-600 text-sm"
                      onClick={() => copyToClipboard(popupExample)}
                    >
                      Copy Code
                    </button>
                  </div>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{popupExample}</code>
                  </pre>
                </div>
              )}

              {activeTab === 'communication' && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Communication between scripts</span>
                    <button 
                      className="text-blue-500 hover:text-blue-600 text-sm"
                      onClick={() => copyToClipboard(communicationExample)}
                    >
                      Copy Code
                    </button>
                  </div>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{communicationExample}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Publishing Section */}
        <section id="publishing" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">📦 Packaging and Publishing</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">📋 Publishing Steps</h3>
              <ol className="text-gray-600 space-y-2">
                <li>1. <strong>Prepare your extension:</strong> Ensure all files are ready</li>
                <li>2. <strong>Create a ZIP file:</strong> Package all extension files</li>
                <li>3. <strong>Create developer account:</strong> Register on store platforms</li>
                <li>4. <strong>Submit for review:</strong> Upload and provide descriptions</li>
                <li>5. <strong>Wait for approval:</strong> Review process can take days</li>
                <li>6. <strong>Publish:</strong> Extension goes live on the store</li>
              </ol>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">🏪 Store Platforms</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="font-medium">Chrome Web Store</span>
                  <span className="text-green-600">$5 one-time fee</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="font-medium">Firefox Add-ons</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="font-medium">Edge Add-ons</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="font-medium">Safari Extensions</span>
                  <span className="text-green-600">$99/year</span>
                </div>
              </div>
            </div>
          </div>

          {/* Store Requirements */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">📋 Store Requirements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Required Assets:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Extension icons (16x16, 48x48, 128x128)</li>
                  <li>• Screenshots (1280x800 or 640x400)</li>
                  <li>• Detailed description</li>
                  <li>• Privacy policy (if collecting data)</li>
                  <li>• Support information</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Review Guidelines:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Follow platform policies</li>
                  <li>• Ensure security and privacy</li>
                  <li>• Provide clear functionality</li>
                  <li>• Test thoroughly before submission</li>
                  <li>• Respond to review feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">📖 Resources and Further Learning</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">📚 Official Documentation</h3>
              <div className="space-y-3">
                <a 
                  href="https://developer.chrome.com/docs/extensions/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-blue-600">Chrome Extensions</h4>
                      <p className="text-sm text-gray-600">Complete Chrome extension documentation</p>
                    </div>
                    <span className="text-blue-500">→</span>
                  </div>
                </a>
                <a 
                  href="https://extensionworkshop.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-orange-600">Firefox Add-ons</h4>
                      <p className="text-sm text-gray-600">Mozilla's WebExtensions documentation</p>
                    </div>
                    <span className="text-orange-500">→</span>
                  </div>
                </a>
                <a 
                  href="https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-green-600">Edge Extensions</h4>
                      <p className="text-sm text-gray-600">Microsoft Edge extension development</p>
                    </div>
                    <span className="text-green-500">→</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">👥 Community Resources</h3>
              <div className="space-y-3">
                <a 
                  href="https://stackoverflow.com/questions/tagged/google-chrome-extension" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-orange-600">Stack Overflow</h4>
                      <p className="text-sm text-gray-600">Q&A for extension development</p>
                    </div>
                    <span className="text-orange-500">→</span>
                  </div>
                </a>
                <a 
                  href="https://github.com/topics/browser-extension" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800">GitHub</h4>
                      <p className="text-sm text-gray-600">Open source extension examples</p>
                    </div>
                    <span className="text-gray-500">→</span>
                  </div>
                </a>
                <a 
                  href="https://discord.gg/chromium" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-blue-600">Chrome DevTools Discord</h4>
                      <p className="text-sm text-gray-600">Community discussions and help</p>
                    </div>
                    <span className="text-blue-500">→</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Learning Path */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">🎯 Learning Path</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-2xl mb-2">🌱</div>
                <h4 className="font-semibold mb-2">Beginner</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Learn basic HTML/CSS/JS</li>
                  <li>• Understand manifest structure</li>
                  <li>• Create simple popup extension</li>
                  <li>• Test in browser</li>
                </ul>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-2xl mb-2">🚀</div>
                <h4 className="font-semibold mb-2">Intermediate</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Content scripts & messaging</li>
                  <li>• Background scripts & APIs</li>
                  <li>• Storage & state management</li>
                  <li>• Cross-browser compatibility</li>
                </ul>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-semibold mb-2">Advanced</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Complex APIs & permissions</li>
                  <li>• Performance optimization</li>
                  <li>• Security best practices</li>
                  <li>• Publishing & maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrowseExtensionPage;
