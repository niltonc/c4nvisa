import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";

import Home from "pages/Home/index.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}