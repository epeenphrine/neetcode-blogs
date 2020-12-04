import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
// python
import PythonDirectory from "./components/python/PythonDirectory"
import Flask from "./components/python/templates/Flask";

// react
import ApiRequest from "./components/reactjs/templates/ApiRequest";
import BrowserRouter from "./components/reactjs/templates/BrowserRouter";
import ReactjsDirectory from "./components/reactjs/ReactjsDirectory";
// docker

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/python" component={PythonDirectory} />
              <Route exact path="/python/flask" component={Flask} />
              <Route exact path="/reactjs" component={ReactjsDirectory} />
              <Route
                exact
                path="/reactjs/react-router-dom"
                component={BrowserRouter}
              />
              <Route exact path="/reactjs/api-request" component={ApiRequest} />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
