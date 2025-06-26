'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm({ type = 'user' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Here you can implement your backend API call
    // Example pseudo-auth check
    if (type === 'admin' && email === 'admin@example.com' && password === 'admin123') {
      router.push('/admin/dashboard');
    } else if (type === 'user' && email === 'user@example.com' && password === 'user123') {
      router.push('/user/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">
          {type === 'admin' ? 'Admin Login' : 'Admin Sign In'}
        </h2>

        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded mb-4"
          required
        />

        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          {type === 'admin' ? 'Login as Admin' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
// 'use client';

// import LoginForm from '@/components/LoginForm';

// export default function AdminLoginPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <LoginForm type="admin" />
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';

// export default function AdminLoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`Admin login -> Email: ${email}, Password: ${password}`);
//     alert('Admin login successful');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded"
//             placeholder="admin@example.com"
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-sm font-medium mb-1">Password</label>
//           <input
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded"
//             placeholder="Enter your password"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-purple-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           Login as Admin
//         </button>
//       </form>
//     </div>
//   );
// }


