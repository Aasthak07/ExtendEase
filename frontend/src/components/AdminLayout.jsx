'use client';

import { usePathname } from 'next/navigation';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const hideLayoutFor = ['/admin/login'];
  const hideLayout = hideLayoutFor.includes(pathname);

  return (
    <>
      {!hideLayout && <AdminNavbar />}
      <main className="flex-1">
        {children}
      </main>
      {!hideLayout && <Footer />}
    </>
  );
} 