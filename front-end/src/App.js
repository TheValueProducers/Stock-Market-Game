
import './App.css';
import LineChart from './pages/LineChart';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/stocks/graph/:shareName" element = {<LineChart />} />
      </Routes>
      
    </div>
  );
}

export default App;
