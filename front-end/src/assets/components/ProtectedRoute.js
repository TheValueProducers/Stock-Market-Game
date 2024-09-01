import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/authProvider'; // Make sure this path is correct
import { GameContext } from '../../context/gamecontext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const { gameCreated } = useContext(GameContext);
  console.log(location.pathname);

  // If the user is authenticated and on the register, login, or home page, redirect to /home
  if (isAuthenticated && (location.pathname === '/register' || location.pathname === '/log-in' )) {
    return <Navigate to="/" />;
  }

  // If the user is not authenticated and trying to access a protected route (not register, login, or home), redirect to /log-in
  if (!isAuthenticated && location.pathname !== '/register' && location.pathname !== '/log-in' ) {
    return <Navigate to="/log-in" />;
  }

  // If the game is created and the user is trying to access the host page, redirect to the lobby
  if (gameCreated && location.pathname === '/multiplayer/host') {
    return <Navigate to="/multiplayer/lobby" />;
  }

  // Render the children components if none of the conditions above apply
  return children;
};

export default ProtectedRoute;