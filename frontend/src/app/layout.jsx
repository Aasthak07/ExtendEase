import { Toaster } from 'react-hot-toast';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
  title: "VS Code Extensions",
  description: "Browse and manage Visual Studio Code extensions",
  icons: {
    icon: "/sq.ico", // Path to your logo in the public folder
    shortcut: "/sq.ico",
    apple: "/whiteLogo.png",
    other: [
      { rel: "icon", url: "/whiteLogo.png" },
      { rel: "apple-touch-icon", url: "/whiteLogo.png" }
    ]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <Toaster position='top-right' />
        <ClientLayout>
          {/* Main Content */}
          <main className="flex-1 py-4">
            {children}
          </main>
          {/* Footer */}
          {/* <footer className="bg-white border-t mt-12">
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2">
                <img src="/Final logo.ico" alt="ExtendEase Logo" className="h-28 w-28" />
                <span className="text-lg font-bold text-indigo-600">ExtendEase</span>
              </div>
              <div className="text-gray-500 text-sm mt-4 md:mt-0">
                &copy; {new Date().getFullYear()} ExtendEase. All rights reserved.
              </div>
            </div>
          </footer> */}
        </ClientLayout>
      </body>
    </html>
  );
}
