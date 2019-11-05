import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet'



// Импортировал Helmet, с помощью которого изменил page title. 
// Насколько я понял, это самый простой способ делать это на реакте
class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Alexander Timoshuk</title>
                <link rel="canonical" href="https://cat-in-a-box.github.io/webpage/"/>
            </Helmet>
            ...
        </div>
    );
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
