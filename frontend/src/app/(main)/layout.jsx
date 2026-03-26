import { AuthProvider } from '@/components/AuthContext';
import Navbar from '@/components/Navbar';

export default function MainLayout({ children }) {
  return (
    <>
      <AuthProvider>
        <Navbar/>
        <div className="pt-16">
          {children}
        </div>
      </AuthProvider>
    </>
  );
}
