// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// export default function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');

//     if (!username || !password) {
//       setError('Please enter both username and password');
//       return;
//     }

//     setIsLoading(true);

//     // Simulate login
//     setTimeout(() => {
//       setIsLoading(false);
//       // Redirect to main page
//       router.push('/');
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#23272e] via-[#1e2230] to-[#2c3140] relative overflow-hidden py-8">
//       {/* Glassmorphism Card */}
//       <div className="relative z-10 max-w-md w-full p-6 sm:p-8 md:p-10 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 mx-4">
//         <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-[#0078d4] mb-6 sm:mb-8 drop-shadow-md tracking-tight">
//           Login to VS Code Extensions
//         </h1>
//         {error && (
//           <div className="mb-4 p-2 sm:p-3 bg-red-200/80 text-red-800 rounded-md text-center font-medium text-xs sm:text-sm animate-pulse">
//             {error}
//           </div>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//           <div>
//             <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2">Username</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gray-300 focus:border-[#0078d4] focus:ring-2 focus:ring-[#0078d4]/30 bg-white/70 text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none"
//               placeholder="Enter your username"
//               autoComplete="username"
//             />
//           </div>
//           <div>
//             <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gray-300 focus:border-[#0078d4] focus:ring-2 focus:ring-[#0078d4]/30 bg-white/70 text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none"
//               placeholder="Enter your password"
//               autoComplete="current-password"
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full py-2 px-4 text-sm sm:text-lg rounded-lg bg-[#0078d4] text-white font-bold shadow-md hover:bg-[#005fa3] focus:ring-2 focus:ring-[#0078d4]/50 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
//           >
//             {isLoading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//         <div className="mt-6 text-center text-xs sm:text-sm text-gray-200">
//           Don't have an account?{' '}
//           <Link href="/signup" className="text-[#0078d4] font-semibold hover:underline transition-colors duration-150">
//             Sign up
//           </Link>
//         </div>
//       </div>
//       <div className="absolute inset-0 z-0 bg-[url('https://miro.medium.com/v2/resize:fit:4000/1*A5QkBnJud6oEsFGkD3iKFA.jpeg')] bg-cover bg-center opacity-70" />
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#23272e]/60 via-[#1e2230]/40 to-[#2c3140]/60" />
//     </div>
//   );
// }



// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// export default function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');
//     if (!username || !password) {
//       setError('Please enter both username and password');
//       return;
//     }
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       router.push('/');
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-2">
//       {/* Left Panel */}
//       <div className="flex flex-col justify-center px-6 sm:px-12 md:px-20 py-12">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
//           <p className="text-sm text-gray-600 mt-2">Please enter your details to sign in</p>
//         </div>

//         {error && (
//           <div className="mb-4 px-4 py-2 bg-red-100 border border-red-300 text-red-800 rounded-md text-sm">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
//               placeholder="Enter your password"
//             />
//           </div>

//           <div className="flex justify-between text-sm text-gray-600 items-center">
//             <label className="flex items-center gap-2">
//               <input type="checkbox" className="accent-purple-600" />
//               Remember for 30 days
//             </label>
//             <Link href="#" className="text-purple-700 hover:underline">
//               Forgot password?
//             </Link>
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-lg font-semibold transition-all duration-200"
//           >
//             {isLoading ? 'Signing in...' : 'Sign in'}
//           </button>

//           <button
//             type="button"
//             className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition"
//           >
//             <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
//             Sign in with Google
//           </button>
//         </form>

//         <p className="mt-6 text-sm text-center text-gray-600">
//           Don’t have an account?{' '}
//           <Link href="/signup" className="text-purple-700 hover:underline font-medium">
//             Sign up
//           </Link>
//         </p>
//       </div>

//       {/* Right Panel */}
//       <div className="hidden md:block bg-purple-100 h-full">
//         <img
//           src="/login-page.svg"
//           alt="Login illustration"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/');
    }, 1000);
  };

  return (
    <div className="h-screen bg-white grid grid-cols-1 md:grid-cols-2">
      {/* Left Panel */}
      <div className="flex flex-col h-screen justify-center px-6 sm:px-12 md:px-20 py-12 relative">

        {/* Logo Top Left */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-6">
          <Link href="/" className="flex items-center gap-2">
            <img src="/ExtendEase logo.png" alt="Logo" className="h-30 w-auto" />
            <span className="text-xl font-semibold text-gray-900"></span>
          </Link>
        </div>

        <div className="mt-20">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-sm text-gray-600 mt-2">Please enter your details to sign in</p>
        </div>

        {error && (
          <div className="mb-4 px-4 py-2 bg-red-100 border border-red-300 text-red-800 rounded-md text-sm mt-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between text-sm text-gray-600 items-center">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-purple-600" />
              Remember for 30 days
            </label>
            <Link href="#" className="text-purple-700 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-lg font-semibold transition-all duration-200"
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>

          <button
            type="button"
            className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
            Sign in with Google
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link href="/signup" className="text-purple-700 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>

      {/* Right Panel */}
      <div className="hidden md:block bg-purple-100 h-screen">
        <img
          src="/login-page.svg"
          alt="Login illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
