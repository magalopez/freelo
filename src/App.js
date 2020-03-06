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
        <Route exact path="/"  component = {Home}/>
        <Route exact path="/home"  component = {Home}/>
        <Route exact path="/videos/:slug" component = {Videos}/>
        <Route exact path="/leaders/:slug"  component = {Leaders}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
