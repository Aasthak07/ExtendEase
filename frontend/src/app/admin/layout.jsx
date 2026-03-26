"use client";
import { Toaster } from 'react-hot-toast';
import { AdminAuthProvider, useAdminAuth } from '@/components/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import '../globals.css';

// No Navbar or Footer here!

function AdminAuthGate({ children }) {
  const { isAuthenticated, loading } = useAdminAuth();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loading && !isAuthenticated) {
        router.replace('/admin-login');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isAuthenticated, loading, router]);

  if (loading || !isAuthenticated) {
    return null; // Or a spinner
  }

  return <>{children}</>;
}

export default function AdminRootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className="min-h-screen flex flex-col bg-white">
        <Toaster position='top-right' />
        <AdminAuthProvider>
          <main className="flex-1 py-4 relative z-10 min-h-screen bg-white">
            <AdminAuthGate>{children}</AdminAuthGate>
          </main>
        </AdminAuthProvider>
      </body>
    </html>
  );
} 