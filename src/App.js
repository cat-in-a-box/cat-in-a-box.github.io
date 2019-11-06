import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import Header from './components/Header.jsx'
import Face from "./components/Face";

// Импортировал helmet, с помощью которого изменил page title.
// Насколько я понял, это самый простой способ делать это на реакте
// Еще через него меняются атрибуты страницы

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Alexander Timoshuk</title>
        <meta charSet="utf-8" />
      </Helmet>
      <Header/>
      <Face/>
    </div>
  );
}

export default App;