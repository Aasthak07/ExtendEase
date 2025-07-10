import Navbar from '@/components/Navbar';

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar/>
      <div className="pt-16">
        {children}
      </div>
    </>
  );
}
