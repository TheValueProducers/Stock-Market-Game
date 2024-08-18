import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authProvider'; // Make sure this path is correct

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Ensure this hook is correctly checking authentication

  console.log("Is authenticated", isAuthenticated);
  if (!isAuthenticated) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/log-in"/>;
  }

  // Render the children components if authenticated
  return children;
};

export default ProtectedRoute;