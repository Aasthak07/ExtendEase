'use client';
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

// Helper to decode JWT and get user info
function getUserFromToken(token) {
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    // If the token has an 'email' and 'id', but no explicit role, infer type
    // You can enhance this logic if you add a 'role' field in the backend
    return {
      id: decoded.id || decoded._id,
      email: decoded.email,
      type: decoded.id ? 'admin' : 'user', // If 'id' exists, it's admin (from admin login), else user
    };
  } catch (e) {
    return null;
  }
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    setToken(storedToken);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (token) {
      setUser(getUserFromToken(token));
    } else {
      setUser(null);
    }
  }, [token]);

  const login = useCallback((token) => {
    localStorage.setItem('token', token);
    setToken(token);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  }, []);

  // For page protection
  const isAuthenticated = !!user;

  if (loading) return null; // Or a loading spinner if you prefer

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// Add this hook for page protection
export function useProtectedRoute({ redirectTo = '/login', requireAdmin = false } = {}) {
  const { isAuthenticated, user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        router.replace(redirectTo);
      } else if (requireAdmin && user?.type !== 'admin') {
        router.replace('/'); // or a 403 page
      }
    }
  }, [isAuthenticated, loading, user, requireAdmin, router, redirectTo]);

  return { isAuthenticated, user, loading };
} 