import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input type="file" id="ctrl" webkitdirectory directory multiple/>
      </header>
    </div>
  );
}

export default App;
