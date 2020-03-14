import React from "react";
import "./App.css";

// Установил и импортировал Helmet, с помощью которого изменил page title.
// Насколько я понял, это самый простой способ менять его (как и атрибуты страницы) на реакте.
// А еще подгружает скрипты если что вдруг. Нормально.
// Потом убрал его, нашел другой способ изменять тайтл.
// Поставил еще React-Scrollable-Anchor для плавного перемещения по якорям

import Header from './components/Header.jsx';
import Face from "./components/Face.jsx";
import About from "./components/About.jsx";
import Works from "./components/Works.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
//import ScrollButton from "./components/ScrollButton.jsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Face/>
            <About/>
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
