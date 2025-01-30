import logo from "./logo.svg";
import "./App.css";
import Test from "./test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello World</h2>
        <Test />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To Learn Reactjs 👈
        </a>
      </header>
    </div>
  );
}

export default App;
