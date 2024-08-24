import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Create a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (username, password) => {
    try {
      const response = await axios.post("http://localhost:3001/api/v1/user/login", { username, password });
      if (response.status === 200) {
        setIsAuthenticated(true);
        navigate("/home");  
      } else if (response.status === 401) {
        alert("Incorrect Password");
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to login. Please check your connection or try again later.");
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/v1/user/logout");
      if (response.status === 200) {
        setIsAuthenticated(false);
        navigate("/log-in");  
      } else {
        alert("Failed to log out. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("Failed to log out. Please check your connection or try again later.");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth context
export const useAuth = () => useContext(AuthContext);