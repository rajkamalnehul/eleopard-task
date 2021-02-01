/** @format */

import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Details from "./Details";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IndustryDetails } from "./MockApi";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Header />
            <Home IndustryDetails={IndustryDetails} />
          </Route>
          <Route path="/details/:Id">
            <Header />
            <Details IndustryDetails={IndustryDetails} />
          </Route>

          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
