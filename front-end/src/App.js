import { StockProvider } from "./context/stockContext";
import './App.css';
import LineChart from './pages/LineChart';
import LogIn from "./pages/LogIn";
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./assets/components/ProtectedRoute";
import { AuthProvider } from './context/authProvider';
import Register from "./pages/Register"

function App() {
  return (
    <div className="App">
      <StockProvider>
        <AuthProvider>
          <Routes>
            <Route
              path="/stocks/graph/:shareName"
              element={
               <ProtectedRoute>
                  <LineChart />
                </ProtectedRoute>
                
              }
            />
            
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </StockProvider>
    </div>
  );
}

export default App;