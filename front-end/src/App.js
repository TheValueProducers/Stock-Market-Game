import {StockProvider} from "./context/stockContext"
import './App.css';
import LineChart from './pages/LineChart';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <StockProvider>
      <Routes>
        <Route exact path = "/stocks/graph/:shareName" element = {<LineChart />} />
      </Routes>
    </StockProvider>
      
    </div>
  );
}

export default App;
