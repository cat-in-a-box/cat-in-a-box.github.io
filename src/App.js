import React from "react";
import "./App.css";
// Установил и импортировал Helmet, с помощью которого изменил page title.
// Насколько я понял, это самый простой способ менять его (как и атрибуты страницы) на реакте.
// А еще подгружает скрипты. Нормально.
// Поставил еще React-Scrollable-Anchor для красивых якорей и плавного перемещения
import { Helmet } from "react-helmet";
import Header from './components/Header.jsx';
import Face from "./components/Face.jsx";
import About from "./components/About.jsx";
import Works from "./components/Works.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Alexander Timoshuk</title>
        <meta charSet="utf-8" />
      </Helmet>
      <Header/>
      <Face/>
      <About/>
      <Works/>
      <Footer/>
      <Contact/>
    </div>
  );
}

export default App;
