import React from "react";
import "./App.css";
import routes from "./routes";
import {Route, Switch, BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        {routes.map((route, idx) => (
                            <Route path={route.path} component={route.component} key={idx}/>
                        ))}
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        </div>
    );
}

export default App;
