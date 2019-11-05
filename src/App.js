import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet'



// Импортировал helmet, с помощью которого изменил page title. 
// Насколько я понял, это самый простой способ делать это на реакте
const PageTitle = 'Alexander Timoshuk'
class MyComponent extends React.PureComponent {
  render () {
    return (
      <>
        <Helmet>
          <title>Alexander Timoshuk</title>
        </Helmet>
        ...
      </>
    )
  }
}

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
