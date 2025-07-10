import { Toaster } from 'react-hot-toast';
import './globals.css';
// import ClientLayout from '@/components/ClientLayout';
import { AuthProvider } from '@/components/AuthContext';
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
    <html lang="en" className="bg-gradient-to-br from-black via-indigo-900 to-blue-900">
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-black via-indigo-900 to-blue-900">
        <Toaster position='top-right' />
        <AuthProvider>
          <ClientLayout>
            {/* Background Pattern Overlay */}
            <div className="fixed inset-0 bg-gradient-to-br from-black via-indigo-900 to-blue-900 opacity-100 pointer-events-none z-0 min-h-screen"></div>
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none z-0 min-h-screen"></div>

            {/* Main Content */}
            <main className="flex-1 relative z-10 min-h-screen">
              {children}
            </main>
            {/* Footer */}
          </ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
