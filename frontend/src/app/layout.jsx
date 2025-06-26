// import './globals.css';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import ClientLayout from '@/components/ClientLayout'


// export const metadata = {
//   title: "VS Code Extensions",
//   description: "Browse and manage Visual Studio Code extensions",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50 min-h-screen flex flex-col">
//         <Navbar />
//         <main className="flex-1">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
import { Toaster } from 'react-hot-toast';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
  title: "VS Code Extensions",
  description: "Browse and manage Visual Studio Code extensions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <Toaster position='top-right' />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
