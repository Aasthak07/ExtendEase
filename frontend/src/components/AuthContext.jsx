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
    console.log(decoded);
    
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    setToken(storedToken);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (token) {
      setUser(getUserFromToken(token));
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
    console.log(getUserFromToken(token));
    
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
  // const isAuthenticated = !!user;

  if (loading) return null; // Or a loading spinner if you prefer

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 