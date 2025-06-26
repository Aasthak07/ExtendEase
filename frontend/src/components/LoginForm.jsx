// 'use client';

// import { useState } from 'react';

// export default function LoginForm({ type }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`${type} login -> Email: ${email}, Password: ${password}`);
//     alert(`${type === 'admin' ? 'Admin' : 'User'} login successful`);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
//       <h2 className="text-2xl font-bold mb-4 text-center">{type === 'admin' ? 'Admin Login' : 'User Login'}</h2>
//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1">Email</label>
//         <input
//           type="email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full px-3 py-2 border border-gray-300 rounded"
//           placeholder="admin@example.com"
//         />
//       </div>
//       <div className="mb-6">
//         <label className="block text-sm font-medium mb-1">Password</label>
//         <input
//           type="password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-3 py-2 border border-gray-300 rounded"
//           placeholder="••••••••"
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//       >
//         {type === 'admin' ? 'Login as Admin' : 'Login'}
//       </button>
//     </form>
//   );
// }
