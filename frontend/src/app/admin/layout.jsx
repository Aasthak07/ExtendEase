'use client';
import { Toaster } from 'react-hot-toast';
import { AdminAuthProvider, useAdminAuth } from '@/components/AuthContext';
import AdminNavbar from '@/components/AdminNavbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function AdminAuthGate({ children }) {
  const { isAuthenticated, loading } = useAdminAuth();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loading && !isAuthenticated) {
        router.replace('/admin-login');
      }
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [isAuthenticated, loading, router]);

  if (loading || !isAuthenticated) {
    // Optionally, show a loading spinner or nothing while checking auth
    return null;
  }

  return <>{children}</>;
}

export default function AdminRootLayout({ children }) {
  return (
    <>
      <Toaster position='top-right' />
      <AdminAuthProvider>
        {/* Background Pattern Overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-indigo-900 to-blue-900 opacity-100 pointer-events-none z-0 min-h-screen"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none z-0 min-h-screen"></div>

        {/* Main Content */}
        <AdminNavbar />
        <main className="flex-1 py-4 relative z-10 min-h-screen ">
          <AdminAuthGate>{children}</AdminAuthGate>
        </main>
        <Footer />
      </AdminAuthProvider>
    </>
  );
} 