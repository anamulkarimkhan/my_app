import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Welcome to my first page</h4>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <h1>We are building and designing web page and site and help land static and dynamic pages online</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
