import logo from './logo.svg';
import './App.css';
import List from './Pages/list/List';
import ErrorPage from './Pages/error-page/ErrorPage';
import HomePage from './Pages/home-page/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage/>
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vous
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
    </div>
  );
}

export default App;
