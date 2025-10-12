'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useAuth } from '@/components/AuthContext';

export default function LoginPage() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setError('');
      setIsLoading(true);
      try {
        const response = await axios.post('http://localhost:5000/user/authenticate', {
          email: values.username,
          password: values.password,
        });
        setIsLoading(false);
        login(response.data.token);
        router.push('/');
      } catch (err) {
        setIsLoading(false);
        setError(
          err.response?.data?.message || 'Login failed. Please check your credentials.'
        );
      }
    },
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-blue-100 py-12">
      <div className="flex items-center justify-center w-full max-w-5xl">
        {/* Card Background */}
        <div className="w-full flex justify-center items-center p-6">
          <div className="w-full max-w-2xl bg-white/90 rounded-2xl shadow-2xl p-12 border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-indigo-700">Welcome back</h1>
              <img src="/Final logo.ico" alt="Logo" className="h-16 w-auto" />
            </div>
            <p className="text-sm text-gray-600 mt-2">Please enter your details to sign in</p>

            {error && (
              <div className="mb-4 px-4 py-2 bg-red-100 border border-red-300 text-red-800 rounded-md text-sm mt-4">
                {error}
              </div>
            )}

            <form onSubmit={formik.handleSubmit} className="space-y-5 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <input
                  type="text"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-indigo-700 transition"
                  placeholder="Enter your email"
                />
                {formik.touched.username && formik.errors.username && (
                  <div className="text-xs text-red-600 mt-1">{formik.errors.username}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-indigo-700 transition"
                  placeholder="Enter your password"
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-xs text-red-600 mt-1">{formik.errors.password}</div>
                )}
              </div>

              <div className="flex justify-between text-sm text-gray-600 items-center">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-indigo-700" />
                  Remember for 30 days
                </label>
                <Link href="#" className="text-indigo-700 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-700 hover:opacity-90 text-white py-2 rounded-lg font-semibold transition-all duration-200"
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
              <Link href="/signup" className="text-indigo-700 hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
