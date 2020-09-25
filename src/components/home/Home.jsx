import React from "react";

import Header from '../Header';
import Footer from '../Footer.jsx';
import Face from './Face.jsx';
import About from './About.jsx';
import Technologies from './Technologies.jsx';
import Projects from './Projects.jsx';
import Works from './Works.jsx';
import Contact from './Contact.jsx';


const Home = () => {
    return (
        <div className="App">
            <Header/>
            <Face/>
            <About/>
            <Technologies/>
            <Projects/>
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Home;