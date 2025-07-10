import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/components/AuthContext';
import AdminNavbar from '@/components/AdminNavbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "ExtendEase Admin",
  description: "Admin dashboard for ExtendEase VS Code extensions",
  icons: {
    icon: "/sq.ico",
    shortcut: "/sq.ico",
    apple: "/whiteLogo.png",
    other: [
      { rel: "icon", url: "/whiteLogo.png" },
      { rel: "apple-touch-icon", url: "/whiteLogo.png" }
    ]
  },
};

export default function AdminRootLayout({ children }) {
  return (
    <>
      <Toaster position='top-right' />
      <AuthProvider>
        {/* Background Pattern Overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-indigo-900 to-blue-900 opacity-100 pointer-events-none z-0 min-h-screen"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none z-0 min-h-screen"></div>

        {/* Main Content */}
        <AdminNavbar />
        <main className="flex-1 py-4 relative z-10 min-h-screen ">
          {children}
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
} 