import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function BrowserRouter() {
  return (
    <React.Fragment>
      <div className="mx-auto text-center">
        <h2 className="display-6">react-router-dom</h2>
        <p className="lead ">route urls in react</p>
      </div>
      <h2>Install react-router-dom</h2>
      <SyntaxHighlighter language="bash">
        {`
npm i react-router-dom 
                    `}
      </SyntaxHighlighter>
      <h2>setup react router dom at App.js</h2>
      <SyntaxHighlighter language="jsx">
        {`
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Testing from "./components/testing/Testing";
import Flask from "./components/python/flask/Flask";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home"
import BrowserRouter from "./components/reactjs/BrowserRouter"
function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/testing" component={Testing} />
              <Route exact path="/python/flask" component={Flask} />
              <Route exact path="/reactjs/browser-router" component={BrowserRouter} />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
}
                    `}
      </SyntaxHighlighter>
      <h2>get current directory using useLocation</h2>
      <SyntaxHighlighter language="jsx">
        {`
import { useLocation } from "react-router-dom";
export default function Navbar() {
  const { pathname, search, hash } = useLocation();
  console.log(pathname);

  return (
    <React.Fragment>
    <div>
    i'm in 
    </div>
    <div>
    {pathname}
    </div>
    </React.Fragment>
  );
}

    `}
      </SyntaxHighlighter>
    </React.Fragment>
  );
}
