import logo from './logo.svg';
import './App.css';
import Component1 from './Component/Component1';
import Component2 from './Component/Component2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>This is version 0</span>
        <Component1 />
        <Component2 />
      </header>
    </div>
  );
}

export default App;
