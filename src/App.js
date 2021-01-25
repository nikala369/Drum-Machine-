import logo from './logo.svg';
import './App.css';
import machinelogo from './images/machinlogo.jpg';
import Component1 from './component1';

function App() {
  return (
    <div className="App">
      <img className="img1" src={machinelogo} alt="Drum Machine Logo"/>

      <div className="main-container">
        <Component1 />
        <div>
          <input />
        </div>

      </div>
    </div>
  );
}

export default App;
