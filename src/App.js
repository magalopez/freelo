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
        <Route
          exact
          path="/"
          component={Home}
          onUpdate={() => window.scrollTo(0, 0)}
        />
        <Route
          exact
          path="/home"
          component={Home}
          onUpdate={() => window.scrollTo(0, 0)}
        />
        <Route
          exact
          path="/videos/:slug"
          component={Videos}
          onUpdate={() => window.scrollTo(0, 0)}
        />
        <Route
          exact
          path="/leaders/:slug"
          component={Leaders}
          onUpdate={() => window.scrollTo(0, 0)}
        />
        <Route
          exact
          path="/toolkit/:id"
          component={ToolKit}
          onUpdate={() => window.scrollTo(0, 0)}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
