import logo from './logo.svg';
import './App.css';
import LineGraph from './components/LineGraph/LineGraph';
import SpecialChats from './components/SpceialChart/SpecialChats';


function App() {
  return (
    <div className="App">
      <LineGraph></LineGraph>
      <SpecialChats></SpecialChats>
    </div>
  );
}

export default App;
