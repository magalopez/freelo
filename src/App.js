import React from "react";
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import Home from "./components/Home";
import Videos from "./components/Videos";
import Leaders from "./components/Leaders";
// import logo from './logo.svg';
import "./App.css";

function App() {
  // function BlogPost() {
  //   let { slug } = useParams();
  //   return <div>Now showing post {slug}</div>;
  // }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/videos/:slug">
          <Videos />
        </Route>
        <Route exact path="/leaders/:slug">
          <Leaders />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
