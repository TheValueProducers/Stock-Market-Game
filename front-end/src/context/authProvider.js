import React, { createContext, useState, useContext } from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios";

// Create a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  
  

  const login = async (username, password) => {
    await axios.post("http://localhost:3001/api/v1/user/login", {username, password})
    .then(response => {
      if (!response.ok && response.status === 401){
        alert("Incorrect Password")
        return
      }else{
        
        setIsAuthenticated(true);
        
      }
    })
    .catch((err) => {
      console.error(err)
    }
  )
    

    
  };

  const logout = () => {
    
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth context
export const useAuth = () => useContext(AuthContext);