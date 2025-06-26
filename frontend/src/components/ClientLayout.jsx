'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const hideLayoutFor = ['/login', '/signup', '/admin/login'];
  const hideLayout = hideLayoutFor.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className="flex-1">
        {children}
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}
