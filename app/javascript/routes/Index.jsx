import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Collection from "../components/Collection";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/collection" exact component={Collection} />
      <Route path="/collection/:id" exact component={Collection} />
    </Switch>
  </Router>
);