import React from "react";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
