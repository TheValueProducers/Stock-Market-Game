import {StockProvider} from "./context/stockContext"
import './App.css';
import LineChart from './pages/LineChart';
import LogIn from "./pages/LogIn"
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <StockProvider>
      <Routes>
        <Route exact path = "/stocks/graph/:shareName" element = {<LineChart />} />
        <Route exact path = "/log-in" element = {<LogIn />} />
      </Routes>
    </StockProvider>
      
    </div>
  );
}

export default App;
