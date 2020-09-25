import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import "./App.scss";

import Home from './components/home/Home.jsx';
import Gallery from './components/gallery/gallery';
import Snake from './components/snake/Snake';
import Calculator from './components/calculator/Calculator';
import MousewheelChecker from './components/mousewheelChecker/mousewheelChecker';


function App() {
    return (
        <div className="App">
                <BrowserRouter basename="/webpage">
                    <Route exact path="/" component={Home} />
                    <Route path="/mousewheelchecker" component={MousewheelChecker} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/snake" component={Snake} />
                    <Route path="/calculator" component={Calculator} />
                </BrowserRouter>
        </div>
    );
}

export default App;
