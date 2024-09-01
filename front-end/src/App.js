import { StockProvider } from "./context/stockContext";
import { GameProvider } from "./context/gamecontext";
import './App.css';
import LineChart from './pages/LineChart';
import LogIn from "./pages/LogIn";
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./assets/components/ProtectedRoute";
import { AuthProvider } from './context/authProvider';
import Register from "./pages/Register"
import HomePage from "./pages/HomePage"
import MultiplayerHost from "./pages/MultiplayerHost";
import LobbyMultiplayer from "./pages/LobbyMultiplayer";


function App() {
  
  return (
    <div className="App">
      <GameProvider>
        <StockProvider>

          <AuthProvider>
            <Routes>
              <Route
                exact path="/stocks/graph/:shareName"
                element={
                <ProtectedRoute>
                    <LineChart />
                  </ProtectedRoute>
                  
                }
              />
              <Route
                exact path="/"
                element={
                <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                  
                }
              />
              <Route
                exact path="/multiplayer/host"
                element={
                <ProtectedRoute>
                    <MultiplayerHost />
                  </ProtectedRoute>
                  
                }
              />
              <Route
                exact path="/multiplayer/lobby"
                element={
                <ProtectedRoute>
                    <LobbyMultiplayer />
                  </ProtectedRoute>
                  
                }
              />
              
              <Route path="/log-in" element={
                <ProtectedRoute>
                  <LogIn />
                </ProtectedRoute>
                } />
              <Route path="/register" element={
                <ProtectedRoute>
                  <Register />
                </ProtectedRoute>
                } />
            </Routes>
          </AuthProvider>
        </StockProvider>
      </GameProvider>
    </div>
  );
}

export default App;