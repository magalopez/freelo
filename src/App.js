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
import ToolKit from "./components/ToolKit";
// import logo from './logo.svg';
import "./App.css";

function App() {
  // function BlogPost() {
  //   let { slug } = useParams();
  //   return <div>Now showing post {slug}</div>;
  // }

  return (
    <BrowserRouter forceRefresh={true}>
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
        <Route exact path="/toolkit/:id" component={ToolKit} />  
      </Switch>
    </BrowserRouter>
  );
}

export default App;
