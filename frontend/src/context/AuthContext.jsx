import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({ token: null, user: null });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setAuthData({ token: storedToken, user: parsedUser });
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
        localStorage.removeItem('user'); // Remove corrupted data
        setAuthData({ token: null, user: null }); // Reset to null
      }
    }
  }, []);

  

  const login = (token, user) => {
    console.log("Setting token:", token);
    console.log("Setting user:", user);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setAuthData({ token, user });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuthData({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ ...authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;