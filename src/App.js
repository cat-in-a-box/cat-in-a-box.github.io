import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import "./App.scss";

import Home from './components/home/Home.jsx';
import Gallery from './components/gallery/Gallery.jsx';
import Snake from './components/snake/Snake.jsx';
import Calculator from './components/calculator/Calculator.jsx';
import MousewheelChecker from './components/mousewheelChecker/MousewheelChecker.jsx';

function App() {
    return (
        <div className="App">
            <BrowserRouter basename="/">
                <Route exact path="/" component={Home}/>
                <Route path="/mousewheelchecker" component={MousewheelChecker}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/snake" component={Snake}/>
                <Route path="/calculator" component={Calculator}/>
            </BrowserRouter>
        </div>
    );
}

export default App;