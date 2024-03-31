import logo from './logo.svg';
import './App.css';
import Item from './components/Item.js';
import Button from "./components/Button.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
              <Item />
              <Button />
      </header>
    </div>
  );
}

export default App;
