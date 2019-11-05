import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";

// Импортировал helmet, с помощью которого изменил page title.
// Насколько я понял, это самый простой способ делать это на реакте
// А еще через него меняются атрибуты страницы

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a>Learn React</a>
      </header>
      <Helmet>
        <title>Alexander Timoshuk</title>
        <meta charSet="utf-8" />
        <meta name="description" content="A React.js application" />
      </Helmet>
    </div>
  );
}

export default App;
